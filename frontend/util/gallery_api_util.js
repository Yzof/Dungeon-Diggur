export const fetchGallery = (id) => (
  $.ajax({
    url: `/api/galleries/${id}`,
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
    url: `/api/galleries`,
    method: "POST",
    data: { gallery }
  })
);

export const editGallery = (gallery) => (
  $.ajax({
    url: `/api/galleries/${gallery.id}`,
    method: "PATCH",
    data: { gallery }
  })
);

export const deleteGallery = (id) => (
  $.ajax({
    url: `/api/galleries/${id}`,
    method: "DELETE"
  })
);
