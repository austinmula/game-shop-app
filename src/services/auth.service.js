import http from "../http-common";

export const login = (user) => {
  return http.post("/auth/login", user);
};

export const logout = () => {
  localStorage.removeItem("user");
};
