class Api::VotesController < ApplicationController
  def create
    @vote = Vote.new(vote_params)
    if @vote.save
      @gallery = @vote.voteable
      render "api/gallery/show"
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def update
    @vote = Vote.find_by(
      voteable_id: vote_params[:voteable_id],
      user_id: vote_params[:user_id],
      voteable_type: vote_params[:voteable_type]
    )

    if @vote && @vote.update(vote_params)
      @gallery = @vote.voteable
      render "api/gallery/show"
    else
      render json: vote.errors.full_messages, status: 422
    end
  end

  def destroy
    @vote = Vote.find_by(vote_params)
    if @vote
      @gallery = @vote.voteable
      @vote.destroy
      render "api/gallery/show"
    else
      render json: ["Wrong Vote"], status: 404
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:voteable_id, :voteable_type, :vote_type, :user_id)
  end
end
