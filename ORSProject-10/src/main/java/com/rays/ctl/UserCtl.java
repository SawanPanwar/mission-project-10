package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.RoleDTO;
import com.rays.dto.UserDTO;
import com.rays.form.UserForm;
import com.rays.service.RoleServiceInt;
import com.rays.service.UserServiceInt;

@RestController
@RequestMapping(value = "User")
public class UserCtl extends BaseCtl<UserForm, UserDTO, UserServiceInt> {

	@Autowired
	RoleServiceInt roleService = null;
	
	@GetMapping("preload")
	public ORSResponse preload() {
		ORSResponse res = new ORSResponse(true);
		RoleDTO dto = new RoleDTO();
		//dto.setStatus(RoleDTO.ACTIVE);
		List<DropdownList> list = roleService.search(dto, userContext);
		res.addResult("roleList", list);
		return res;
	}

}