export const fetchTag = (id) => (
  $.ajax({
    url: `/api/tags/${id}`,
    method: "GET"
  })
);
