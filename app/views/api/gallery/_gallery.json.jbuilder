json.extract! gallery, :id, :author_id, :title, :description
json.assets gallery.assets.each do |asset|
  json.partial! "api/assets/asset", asset: asset
end
json.votes do
  json.downvotes gallery.votes.where(vote_type: :down).count
  json.upvotes gallery.votes.where(vote_type: :up).count
  gallery_vote = gallery.votes.select { |vote| vote.user_id == current_user.id }[0]
  json.currentUserVote gallery_vote ? gallery_vote.vote_type : nil
end
json.tags gallery.tags.each do |tag|
  json.partial! 'api/tags/tag', tag: tag
end
