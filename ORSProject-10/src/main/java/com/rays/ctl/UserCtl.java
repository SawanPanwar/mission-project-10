package com.rays.ctl;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.RoleDTO;
import com.rays.dto.UserDTO;
import com.rays.form.ChangePasswordForm;
import com.rays.form.ForgetPasswordForm;
import com.rays.form.MyProfileForm;
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
		// dto.setStatus(RoleDTO.ACTIVE);
		List<DropdownList> list = roleService.search(dto, userContext);
		res.addResult("roleList", list);
		return res;
	}

	@PostMapping("myProfile")
	public ORSResponse myProfile(@RequestBody @Valid MyProfileForm form, BindingResult bindingResult) {

		ORSResponse res = validate(bindingResult);

		if (!res.isSuccess()) {
			return res;
		}

		UserDTO dto = baseService.findById(userContext.getUserId(), userContext);
		dto.setFirstName(form.getFirstName());
		dto.setLastName(form.getLastName());
		dto.setDob(form.getDob());
		dto.setPhone(form.getPhone());
		dto.setGender(form.getGender());

		baseService.update(dto, userContext);
		
		res.setSuccess(true);
		res.addMessage("Your Profile updated successfully..!!");

		return res;
	}

	@PostMapping("changePassword")
	public ORSResponse changePassword(@RequestBody @Valid ChangePasswordForm form, BindingResult bindingResult) {

		ORSResponse res = validate(bindingResult);

		if (!res.isSuccess()) {
			return res;
		}

		UserDTO changedDto = baseService.changePassword(form.getLoginId(), form.getOldPassword(), form.getNewPassword(),
				userContext);

		if (changedDto == null) {
			res.setSuccess(false);
			res.addMessage("Invalid old password");
			return res;
		}

		res.setSuccess(true);
		res.addMessage("Password has been changed");

		return res;
	}
}