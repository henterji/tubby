package com.tubby.security.exception;

@SuppressWarnings("serial")
public class InvliadCaptchaException extends RuntimeException {
	public InvliadCaptchaException(String msg, Throwable t) {
		super(msg, t);
	}

	public InvliadCaptchaException(String msg) {
		super(msg);
	}
}
