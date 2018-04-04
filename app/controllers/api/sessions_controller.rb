class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render "api/users/show"
    else
      render ['Invalid Username or Password'], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      sign_out
    else
      render json: ["No User Logged In"], status: 404
    end
  end
end
