package com.mkyong.rest;

import com.mkyong.rest.AppErrCode;

public class AppException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;

	public AppException(AppErrCode errorcode) {
		super(errorcode.toString());
	}
	
	public AppException(Throwable cause) {
		super(AppErrCode.UNKNOWN_ERROR.toString(), cause);
	}
}