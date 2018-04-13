class Api::TagsController < ApplicationController

  def show
    @tag = Tag.find(params[:id])

    if @tag
      render 'api/tags/show'
    else
      render json: @tag.errors.full_messages, status: 404
    end
  end
end
