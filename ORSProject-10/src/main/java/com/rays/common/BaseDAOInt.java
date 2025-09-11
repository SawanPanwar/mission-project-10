package com.rays.common;

import java.util.List;

public interface BaseDAOInt<T extends BaseDTO> {

	public long add(T dto, UserContext userContext);

	public void update(T dto, UserContext userContext);

	public void delete(T dto, UserContext userContext);

	public T findByPK(long pk, UserContext userContext);

	public T findByUniqueKey(String attribute, Object val, UserContext userContext);

	public List search(T dto, int pageNo, int pageSize, UserContext userContext);

	public List search(T dto, UserContext userContext);

}