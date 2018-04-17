package com.tubby.security.service;

import java.io.Serializable;

@SuppressWarnings("serial")
public class JwtAuthenticationResponse implements Serializable {
	private final String token;

	public JwtAuthenticationResponse(String token) {
		this.token = token;
	}

	public String getToken() {
		return this.token;
	}
}
