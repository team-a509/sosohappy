import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";

import CommonLayout from "@/components/CommonLayout";
import MyChat from "@/components/MyChat";
import ChatDate from "@/components/ChatDate";

import PreArrowIcon from "@/assets/img/pre-arrow.png"
import HamburgerMenuIcon from "@/assets/img/hamburger-menu.png"
import GroupUserIcon from "@/assets/img/group-user-icon.png"
import ExitIcon from "@/assets/img/exit-icon.png"
import SendIcon from "@/assets/img/send-icon.png"
import FishThumbnail from "@/assets/img/fish-thumbnail.png"

import ChatStyle from "@/styles/ChatStyle";
import YourChat from "@/components/YourCaht";

const Chat = () => {
  return (
    <CommonLayout>
      <View style={ChatStyle.heightWrap}>



        <View style={ChatStyle.chatTitleWrap}>
          <TouchableOpacity activeOpacity={0.7}>
            <Image
              source={PreArrowIcon}
              style={ChatStyle.preArrowIcon}
            />
          </TouchableOpacity>
          <View style={ChatStyle.chatTitle}>
            <Text style={ChatStyle.chatTitleName}>김싸피</Text>
            <Text style={ChatStyle.chatTitleRank}>나눔이</Text>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <Image
              source={HamburgerMenuIcon}
              style={ChatStyle.hamburgerMenuIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={ChatStyle.chatContentWrap}>
          <ScrollView>
            <ChatDate date="2023. 10. 15."/>

            <MyChat content="네, 금방 갈게요 조금만 기다리세요."/>
            <ChatDate date="2023. 10. 16."/>
            <YourChat thumbnail={FishThumbnail} content="안녕하세요! 저는 7층에 있습니다.
            건물에 들어오시면, 엘리베이터를 찾기가
            어렵네요, 안쪽으로 들어오셔서 오른쪽에
            있습니다."/>
            <MyChat content="네, 금방 갈게요 조금만 기다리세요."/>

          </ScrollView>
        </View>

        <View style={ChatStyle.agreeWrap}>
          <Image
            source={GroupUserIcon}
            style={ChatStyle.groupUserIcon}
          />
          <Text style={ChatStyle.agreeInfoText}>매칭하기 버튼을 통해 상대방의 요청을 승인해주세요.</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={ChatStyle.agreeButton}>
              <Text style={ChatStyle.agreeButtonText}>승인하기</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={ChatStyle.controlWrap}>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={ChatStyle.exitFlexWrap}>
              <Image
                source={ExitIcon}
                style={ChatStyle.exitIcon}
              />
              <Text style={ChatStyle.exitText}>채팅방 나가기</Text>
            </View>
          </TouchableOpacity>
          <TextInput
            placeholder="메시지 내용을 입력하세요."
            style={ChatStyle.chanMsgInput}
          />
          <TouchableOpacity activeOpacity={0.7}>
            <View style={ChatStyle.sendButton}>
              <Image
                source={SendIcon}
                style={ChatStyle.sendIcon}
              />
            </View>
          </TouchableOpacity>
        </View>



      </View>
    </CommonLayout>
  );
};

export default Chat;
