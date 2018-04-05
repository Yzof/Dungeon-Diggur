export const fetchGallery = (id) => (
  $.ajax({
    url: `/api/users/2/galleries/${id}`,
    method: "GET"
  })
);

export const fetchGalleries = () => (
  $.ajax({
    url: `/api/galleries/`,
    method: "GET"
  })
);

export const createGallery = (gallery) => (
  $.ajax({
    url: `/api/users/:user_id/galleries/${gallery.id}`,
    method: "POST",
    data: { gallery }
  })
);

export const editGallery = (gallery) => (
  $.ajax({
    url: `/api/users/:user_id/galleries/${gallery.id}`,
    method: "PATCH",
    data: { gallery }
  })
);

export const deleteGallery = (id) => (
  $.ajax({
    url: `/api/users/:user_id/galleries/${id}`,
    method: "DELETE"
  })
);
