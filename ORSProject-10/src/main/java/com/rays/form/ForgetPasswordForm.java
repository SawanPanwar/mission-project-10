package com.rays.form;

import javax.validation.constraints.NotEmpty;

import com.rays.common.BaseForm;

public class ForgetPasswordForm extends BaseForm {

	@NotEmpty(message = "Login Id is required")
	private String loginId;

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}
}