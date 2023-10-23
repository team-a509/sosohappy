package com.ssafy.monster.service;

import com.ssafy.monster.domain.entity.MemberMonsterGrowth;
import com.ssafy.monster.domain.entity.MemberMonsterProfile;
import com.ssafy.monster.domain.entity.MonsterType;
import com.ssafy.monster.domain.res.CloverRes;
import com.ssafy.monster.domain.res.MonsterRes;
import com.ssafy.monster.repository.GrowthRepository;
import com.ssafy.monster.repository.MonsterRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ChoiceFormat;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
public class MonsterServiceImpl implements MonsterService{

    private final MonsterRepository monsterRepository;
    private final GrowthRepository growthRepository;

    @Autowired
    public MonsterServiceImpl(MonsterRepository monsterRepository, GrowthRepository growthRepository) {
        this.monsterRepository = monsterRepository;
        this.growthRepository = growthRepository;
    }


    /**
     * 대표 캐릭터 불러오기
    */
    @Override
    public Map<String, Object> searchRepresentativeMonster(Long memberId) {

        MemberMonsterProfile profile = monsterRepository.findByMemberId(memberId).get();
        MemberMonsterGrowth growth = growthRepository.findByMemberMonsterProfile_MemberIdAndMonsterType_TypeId(profile.getMemberId(), profile.getMonsterInfo().getMonsterType().getTypeId()).get();
        MonsterType type = profile.getMonsterInfo().getMonsterType(); //프로필 타입

        // ChoiceFormat (level)
        List<Integer> expList = monsterRepository.getMonsterCloverInfo();
        double[] expArr = expList.stream().mapToDouble(i -> i).toArray();
        double[] prefixSum = new double[expArr.length]; //누적 경험치(클로버)
        for(int i = 0; i < expArr.length; i++) {
            for(int j = 0; j <= i; j++) {
                prefixSum[i] += expArr[j];
            }
        }
        List<Integer> levelList = monsterRepository.getMonsterLevelInfo();
        String[] levelArr = levelList.stream().map(i -> i.toString()).toArray(size -> new String[size]);

        ChoiceFormat cf= new ChoiceFormat(prefixSum, levelArr);

        // exp 계산용
        int currentLevel = Integer.parseInt(cf.format(growth.getMonsterClover()));
        int requiredClover = (int) expArr[currentLevel-1];
        Double prevRequiredClover = prefixSum[currentLevel-1];
        int currentClover = growth.getMonsterClover();

        // result
        CloverRes clover = CloverRes.builder()
                .memberClover(profile.getMemberClover())
                .memberAccruedClover(profile.getMemberAccruedClover())
                .build();

        MonsterRes monster = MonsterRes.builder()
                .memberMonsterId((long) profile.getMonsterInfo().getMonsterId())
                .typeId(type.getTypeId())
                .typeName(type.getTypeName())
                .level(profile.getMonsterInfo().getMonsterLevel())
                .currentPoint((currentClover-prevRequiredClover) / requiredClover)
                .build();

        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("clover", clover);
        resultMap.put("monster", monster);

        return resultMap;
    }

    /**
     * 보유중인 캐릭터 불러오기(도감)
     */
    @Override
    public Map<String, Object> searchMonsterList(Long memberId){

        // ChoiceFormat (level)
        List<Integer> expList = monsterRepository.getMonsterCloverInfo();
        double[] expArr = expList.stream().mapToDouble(i -> i).toArray();
        double[] prefixSum = new double[expArr.length]; //누적 경험치(클로버)
        for(int i = 0; i < expArr.length; i++) {
            for(int j = 0; j <= i; j++) {
                prefixSum[i] += expArr[j];
            }
        }
        List<Integer> levelList = monsterRepository.getMonsterLevelInfo();
        String[] levelArr = levelList.stream().map(i -> i.toString()).toArray(size -> new String[size]);

        ChoiceFormat cf= new ChoiceFormat(prefixSum, levelArr);

        // result
        List<MemberMonsterGrowth> monsterList = growthRepository.findAllByMemberMonsterProfile_MemberId(memberId);

        List<MonsterRes> resList = monsterList
                .stream().map(m -> MonsterRes.builder()
                        .memberMonsterId(m.getMemberMonsterId())
                        .typeId(m.getMonsterType().getTypeId())
                        .typeName(m.getMonsterType().getTypeName())
                        .level(Integer.parseInt(cf.format(m.getMonsterClover())))
                        .build()
        ).collect(Collectors.toList());

        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("monsterList", resList);

        return resultMap;
    }

    /**
     * 경험치 등록하기
     */
    @Override
    public Map<String, Object> updateMonsterClover(Long memberMonsterId, int clover) {

        log.info("updateMonsterClover_start memberMonsterId: " + memberMonsterId + "clover : " + clover);
        MemberMonsterGrowth growth = growthRepository.findByMemberMonsterId(memberMonsterId).get();
        MemberMonsterProfile profile = growth.getMemberMonsterProfile();
        if(profile.getMemberClover() < clover) {
            //클로버 부족
        }
        growth.updateClover(growth.getMonsterClover() + clover);
        profile.updateClover(profile.getMemberClover() - clover);
        growthRepository.save(growth);
        monsterRepository.save(profile);

        // ChoiceFormat (level)
        List<Integer> expList = monsterRepository.getMonsterCloverInfo();
        double[] expArr = expList.stream().mapToDouble(i -> i).toArray();
        double[] prefixSum = new double[expArr.length]; //누적 경험치(클로버)
        for(int i = 0; i < expArr.length; i++) {
            for(int j = 0; j <= i; j++) {
                prefixSum[i] += expArr[j];
            }
        }
        List<Integer> levelList = monsterRepository.getMonsterLevelInfo();
        String[] levelArr = levelList.stream().map(i -> i.toString()).toArray(size -> new String[size]);

        ChoiceFormat cf= new ChoiceFormat(prefixSum, levelArr);

        // exp 계산용
        int currentLevel = Integer.parseInt(cf.format(growth.getMonsterClover()));
        int requiredClover = (int) expArr[currentLevel-1];
        Double prevRequiredClover = prefixSum[currentLevel-1];
        int currentClover = growth.getMonsterClover();

        // result
        CloverRes cloverRes = CloverRes.builder()
                .memberClover(profile.getMemberClover())
                .memberAccruedClover(profile.getMemberAccruedClover())
                .build();

        MonsterRes monster = MonsterRes.builder()
                .memberMonsterId((long) profile.getMonsterInfo().getMonsterId())
                .typeId(growth.getMonsterType().getTypeId())
                .typeName(growth.getMonsterType().getTypeName())
                .level(Integer.parseInt(cf.format(growth.getMonsterClover())))
                .currentPoint((currentClover-prevRequiredClover) / requiredClover)
                .build();


        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("clover", cloverRes);
        resultMap.put("monster", monster);

        return resultMap;
    }


}
