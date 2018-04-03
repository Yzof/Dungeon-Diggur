class Api::SessionsController < ApplicationController
  def new
    render :login
  end

  def create
    user = User.find_by_credentials(
      username: params.user.username,
      password: params.user.password
    )

    if user
      sign_in(user)
      render :show
    else
      render ['Invalid Username or Password'], status: 422
    end
  end

  def delete
    sign_out
    render json: {}
  end
end
