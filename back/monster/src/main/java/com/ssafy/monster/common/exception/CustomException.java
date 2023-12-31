package com.ssafy.monster.common.exception;

import lombok.Getter;

@Getter
public class CustomException extends RuntimeException {

    private ErrorCode errorCode;
    public CustomException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
    @Override
    public synchronized Throwable fillInStackTrace() {
        return this;
    }


}