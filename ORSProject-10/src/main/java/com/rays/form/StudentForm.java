package com.rays.form;

import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.StudentDTO;

public class StudentForm extends BaseForm {

	@NotEmpty(message = "please enter enroll")
	private String enrolNo;

	@NotEmpty(message = "please enter firstname")
	private String firstName;

	@NotEmpty(message = "please enter lastname")
	private String lastName;

	@NotNull(message = "Date of birth is required")
	private Date dob;

	@NotNull(message = "please enter phone")
	@Pattern(regexp = "(^$|[0-9]{10})")
	private String phoneNo;

	@NotEmpty(message = "please enter email")
	@Email
	private String email;

	@NotNull(message = "please enter college")
	@Min(1)
	private Long collegeId;

	private String collegeName;

	public String getEnrolNo() {
		return enrolNo;
	}

	public void setEnrolNo(String enrolNo) {
		this.enrolNo = enrolNo;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getCollegeId() {
		return collegeId;
	}

	public void setCollegeId(Long collegeId) {
		this.collegeId = collegeId;
	}

	public String getCollegeName() {
		return collegeName;
	}

	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}

	@Override
	public BaseDTO getDto() {

		StudentDTO dto = initDTO(new StudentDTO());

		dto.setEnrolNo(enrolNo);
		dto.setFirstName(firstName);
		dto.setLastName(lastName);
		dto.setDob(dob);
		dto.setPhoneNo(phoneNo);
		dto.setEmail(email);
		dto.setCollegeId(collegeId);
		
		return dto;
	}
}
