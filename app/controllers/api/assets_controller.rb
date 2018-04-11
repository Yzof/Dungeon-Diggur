class Api::AssetsController < ApplicationController
  def index
    @assets = Asset.all
  end

  def create
    @asset = Asset.create(asset_params)

    @gallery = Gallery.find(@asset.gallery_id)
    if @asset.save!
      render "api/gallery/show"
    else
      render json: @asset.errors.full_messages, status: 422
    end
  end

  def show
    @asset = Asset.find(params[:id])
  end

  def destroy
    @asset = Asset.find(params[:id])
  end

  private

  def asset_params
    params.require(:asset).permit(:path, :gallery_id)
  end
end
