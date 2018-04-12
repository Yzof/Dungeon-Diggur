export const fetchAssets = () => (
  $.ajax({
    method: 'GET',
    url: '/api/assets',
  })
);

export const fetchAsset = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/assets/${id}`,
  })
);

export const uploadImage = (asset) => {

  return (
    $.ajax({
      method: 'POST',
      url: '/api/assets',
      data: { asset }
    })
  );
};
