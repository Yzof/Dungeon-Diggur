json.partial! "api/users/user", user: @user
json.galleries @user.galleries.each do |gallery|
  json.partial! "api/gallery/gallery", gallery: gallery
end
