package com.tubby.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

/**
 * The persistent class for the user database table.
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "USER")
@Data
public class User implements Serializable {
	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name = "USERNAME", length = 255, unique = true)
	@NotNull
	@Size(min = 4, max = 255)
	private String username;

	@Column(name = "PASSWORD", length = 255)
	@NotNull
	@Size(min = 4, max = 255)
	private String password;

	@Column(name = "FIRSTNAME", length = 255)
	@NotNull
	@Size(min = 4, max = 255)
	private String firstname;

	@Column(name = "LASTNAME", length = 255)
	@NotNull
	@Size(min = 4, max = 255)
	private String lastname;

	@Column(name = "EMAIL", length = 255)
	@NotNull
	@Size(min = 4, max = 255)
	private String email;

	@Column(name = "ENABLED")
	@NotNull
	private Boolean enabled;

	@Column(name = "LASTPASSWORDRESETDATE")
	@Temporal(TemporalType.TIMESTAMP)
	@NotNull
	private Date lastPasswordResetDate;

	@Column(name = "create_user")
	private String createUser;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "create_time")
	private Date createTime;

	@Column(name = "update_user")
	private String updateUser;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "update_time")
	private Date updateTime;

	// bi-directional many-to-many association to Role
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "USER_ROLE", joinColumns = {
			@JoinColumn(name = "USER_ID", referencedColumnName = "ID") }, inverseJoinColumns = {
					@JoinColumn(name = "ROLE_ID", referencedColumnName = "ID") })
	private List<Role> roles;

	public User() {
	}

	public User(long id, String username, String password, boolean enabled, Date lastPasswordResetDate) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.enabled = enabled;
		this.lastPasswordResetDate = lastPasswordResetDate;
	}
}
