package com.tubby.security.exception;

@SuppressWarnings("serial")
public class UsernamePasswordException extends RuntimeException {
	public UsernamePasswordException(String msg, Throwable t) {
		super(msg, t);
	}

	public UsernamePasswordException(String msg) {
		super(msg);
	}
}
