export const fetchUser = (id) => (
  $.ajax({
    url: `/api/users/${id}`,
    method: "GET"
  })
);

export const updateUser = (user) => (
  $.ajax({
    url: `/api/users/${user.id}`,
    method: "PATCH",
    data: { user }
  })
);

//todo check user_actions
