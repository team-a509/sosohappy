package com.ssafy.helphistorycommand.exception;

import com.ssafy.helphistorycommand.api.response.FormattedResponse;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionManager {

    @ExceptionHandler(CustomException.class)
    public FormattedResponse onCustomException(CustomException e) {

        return FormattedResponse.builder()
                .status("fail")
                .message(e.getErrorCode().getMessage())
                .build();
    }
}
