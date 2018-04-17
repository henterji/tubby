package com.tubby.security.exception;

@SuppressWarnings("serial")
public class UsernameExistsException extends RuntimeException {
	public UsernameExistsException(String msg, Throwable t) {
		super(msg, t);
	}

	public UsernameExistsException(String msg) {
		super(msg);
	}
}
