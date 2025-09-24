package com.rays.service;

import java.sql.Timestamp;
import java.util.Date;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.common.UserContext;
import com.rays.dao.UserDAOInt;
import com.rays.dto.UserDTO;

@Service
@Transactional
public class UserServiceImpl extends BaseServiceImpl<UserDTO, UserDAOInt> implements UserServiceInt {

	@Transactional(readOnly = true)
	public UserDTO findByLoginId(String login, UserContext userContext) {
		return baseDao.findByUniqueKey("loginId", login, userContext);
	}

	@Override
	public UserDTO register(UserDTO dto, UserContext userContext) {

		Long id = add(dto, userContext);

		dto.setId(id);

		return dto;
	}

	@Override
	public UserDTO authenticate(String loginId, String password) {

		UserDTO dto = findByLoginId(loginId, null);

		if (dto != null) {
			UserContext userContext = new UserContext(dto);
			if (password.equals(dto.getPassword())) {
				dto.setLastLogin(new Timestamp((new Date()).getTime()));
				dto.setUnsucessfullLoginAttempt(0);
				update(dto, userContext);
				return dto;
			} else {
				dto.setUnsucessfullLoginAttempt(1 + dto.getUnsucessfullLoginAttempt());
				update(dto, userContext);
			}
		}
		return null;
	}

	@Override
	public UserDTO forgotPassword(String loginId) {

		UserDTO dto = findByLoginId(loginId, null);
		if (dto == null) {
			return null;
		}
		return dto;
	}

	@Override
	public UserDTO changePassword(String loginId, String oldPassword, String newPassword, UserContext userContext) {

		UserDTO dto = findByLoginId(loginId, null);

		if (dto != null && oldPassword.equals(dto.getPassword())) {
			dto.setPassword(newPassword);
			update(dto, userContext);
			return dto;
		} else {
			return null;
		}
	}
}