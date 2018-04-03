json.current_user do
  json.set! @user.id do
    json.partial! "users/user", user: @user
  end
end
