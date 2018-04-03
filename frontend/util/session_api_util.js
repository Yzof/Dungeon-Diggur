export const fetchUser = (id) => (
  $.ajax({
    url: `/api/users/${id}`,
    method: "GET"
  })
);
export const createUser = (user) => (
  $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user }
  })
);
export const createSession = () => (
  $.ajax({
    url: "/api/session",
    method: " POST"
  })
);
export const deleteSession = () => (
  $.ajax({
    url: "/api/session",
    method: "DELETE"
  })
);
