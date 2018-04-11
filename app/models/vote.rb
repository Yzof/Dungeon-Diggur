# == Schema Information
#
# Table name: votes
#
#  id           :integer          not null, primary key
#  composite_id :string           not null
#  vote_type    :integer
#  user_id      :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Vote < ApplicationRecord
  validates :composite_id, presence: true
end
