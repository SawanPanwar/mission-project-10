package com.rays.form;

import javax.validation.constraints.NotEmpty;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.CourseDTO;

public class CourseForm extends BaseForm {

	@NotEmpty(message = "please enter name")
	private String name;

	@NotEmpty(message = "please enter duration")
	private String duration;

	@NotEmpty(message = "please enter description")
	private String description;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public BaseDTO getDto() {

		CourseDTO dto = initDTO(new CourseDTO());
		dto.setName(name);
		dto.setDuration(duration);
		dto.setDescription(description);

		return dto;
	}

}
