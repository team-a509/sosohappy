package com.ssafy.chat.config;

import com.ssafy.chat.api.service.ChatServerManageService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.support.GenericMessage;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectedEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import java.util.Map;

@Component
@RequiredArgsConstructor
public class WebSocketEventListener {
    private final ChatServerManageService chatServerManageService;

    @EventListener
    public void handleSessionConnected(SessionConnectedEvent event) {

        String rawMemberId = event.getMessage().getHeaders()
                .get("simpConnectMessage", GenericMessage.class)
                .getHeaders()
                .get("nativeHeaders", Map.class)
                .get("memberId")
                .toString();
        String simpSessionId = event.getMessage().getHeaders().get("simpSessionId").toString();
        Long memberId = Long.parseLong(rawMemberId.substring(1, rawMemberId.length() - 1));

        chatServerManageService.enter(memberId, simpSessionId);
    }

    @EventListener
    public void handleSessionDisconnect(SessionDisconnectEvent event) {
        String simpSessionId = event.getMessage().getHeaders().get("simpSessionId").toString();
        chatServerManageService.leave(simpSessionId);
    }
}
