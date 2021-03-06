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
    @user = User.find(params[:id])

    if @user
      render "api/users/show"
    else
      render json: ["User not Found"], status: 404
    end
  end

  def update
    @user = User.find(params[:id])

    if @user && @user.update(user_params)
      render "api/users/show"
    else
      render json: ["User not Found"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :session_token, :biography)
  end
end
