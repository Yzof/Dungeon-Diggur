export const createVote = (vote) => (
  $.ajax({
    method: 'POST',
    url: '/api/vote',
    data: { vote }
  })
);

export const updateVote = (vote) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/vote`,
    data: { vote }
  })
);

export const deleteVote = (vote) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/vote`,
    data: { vote }
  })
);
