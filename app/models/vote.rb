# == Schema Information
#
# Table name: votes
#
#  id            :integer          not null, primary key
#  voteable_id   :integer
#  voteable_type :string
#  vote_type     :integer
#  user_id       :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Vote < ApplicationRecord
  validates :user_id, presence: true
  validates :user_id, uniqueness: { scope: %i[voteable_id voteable_type] }

  belongs_to :user, foreign_key: :user_id
  belongs_to :voteable, polymorphic: true
  enum vote_type: [:up, :down]
end
