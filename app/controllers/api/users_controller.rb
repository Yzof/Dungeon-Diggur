class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      render :show
    else
      render json: ['Invalid Username or Password'], status: 422
    end
  end

  def show
    @user = User.find_by_credentials(
      username: user_params[:username],
      password: user_params[:password]
      );

    if @user
      render json: :show
    else
      render json: ["User not Found"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :session_token)
  end
end
