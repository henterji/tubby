package com.tubby.security.exception;

@SuppressWarnings("serial")
public class IncorrectTelephoneException extends RuntimeException {
	public IncorrectTelephoneException(String msg, Throwable t) {
		super(msg, t);
	}

	public IncorrectTelephoneException(String msg) {
		super(msg);
	}
}
