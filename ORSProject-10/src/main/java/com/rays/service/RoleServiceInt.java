package com.rays.service;

import com.rays.common.BaseServiceInt;
import com.rays.common.UserContext;
import com.rays.dto.RoleDTO;

public interface RoleServiceInt extends BaseServiceInt<RoleDTO> {

	public RoleDTO findByName(String name, UserContext userContext);

}
