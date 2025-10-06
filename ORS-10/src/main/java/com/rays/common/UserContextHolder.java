package com.rays.common;

public class UserContextHolder {

	private static final ThreadLocal<UserContext> threadLocal = new ThreadLocal<>();

	public static void setContext(UserContext context) {
		threadLocal.set(context);
	}

	public static UserContext getContext() {
		return threadLocal.get();
	}

	public static void clear() {
		threadLocal.remove();
	}
}