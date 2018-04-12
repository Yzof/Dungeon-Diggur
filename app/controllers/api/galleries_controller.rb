class Api::GalleriesController < ApplicationController
  def index
    @galleries = Gallery.all
    render "api/gallery/index"
  end

  def show
    @gallery = Gallery.find(params[:id])
    render "api/gallery/show"
  end

  def create
    @gallery = Gallery.new(gallery_params)

    if @gallery.save
      render "api/gallery/show"
    else
      render json: @gallery.errors.full_messages, status: 422
    end
  end

  def update
    @gallery = Gallery.find(params[:id])

    if @gallery
      @gallery.update(gallery_params)
      render "api/gallery/show"
    else
      render json: @gallery.errors.full_messages, status: 422
    end
  end

  def destroy
    @gallery = Gallery.find(params[:id])
    @gallery.destroy
  end

  private

  def gallery_params
    params.require("gallery").permit(:author_id, :title, :description, tag_names: [])
  end
end
