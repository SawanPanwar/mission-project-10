package com.rays.form;

import javax.validation.constraints.NotEmpty;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.CourseDTO;

public class CourseForm extends BaseForm {

	@NotEmpty(message = "Name is required")
	private String name;

	@NotEmpty(message = "Duration is required")
	private String duration;

	@NotEmpty(message = "Description is required")
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
