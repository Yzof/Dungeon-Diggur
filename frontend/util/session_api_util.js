export const fetchUser = (id) => (
  $.ajax({
    url: `/api/users/${id}`,
    method: "GET"
  })
);
export const signup = (user) => (
  $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user }
  })
);
export const login = (user) => (
  $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user }
  })
);
export const logout = () => (
  $.ajax({
    url: "/api/session",
    method: "DELETE"
  })
);
