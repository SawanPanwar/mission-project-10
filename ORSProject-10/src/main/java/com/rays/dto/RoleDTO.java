package com.rays.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "st_role")
public class RoleDTO extends BaseDTO {

	@Column(name = "name", length = 50)
	private String name = null;

	@Column(name = "description", length = 100)
	private String description = null;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String getUniqueKey() {
		return "name";
	}

	@Override
	public String getUniqueValue() {
		return name;
	}

	@Override
	public String getLabel() {
		return "Role Name";
	}
	
	@Override
	public String getTableName() {
		return "Role";
	}

	@Override
	public String getValue() {
		return name;
	}
}