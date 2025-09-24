package com.rays.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.rays.common.BaseForm;

public class ChangePasswordForm extends BaseForm {

	@NotEmpty(message = "Old Password is required")
	@Size(min = 2, max = 10)
	private String oldPassword;

	@NotEmpty(message = "New Password is required")
	@Size(min = 2, max = 10)
	private String newPassword;

	private String loginId;

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}
}