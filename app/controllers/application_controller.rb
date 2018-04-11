class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?, :sign_in, :sign_out, :auth

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    session[:session_token] = user.reset_session_token!
  end

  def sign_out
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def auth
    {
      cloud_name: dkk7qjv7c,
      api_key: '499866761334525',
      api_secret: G2OgkVTeeJGjkn6cNo6a9U7TYG0
    }
  end

end
