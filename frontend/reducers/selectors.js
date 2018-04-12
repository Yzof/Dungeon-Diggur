export const countVotes = (gallery) => {
  return gallery.votes.upvotes - gallery.votes.downvotes;
};
