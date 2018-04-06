export const fetchUser = (id) => (
  $.ajax({
    url: `/api/users/${id}`,
    method: "GET"
  })
);

//todo check user_actions
