# == Schema Information
#
# Table name: galleries
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  title       :string           not null
#  description :text
#

class Gallery < ApplicationRecord
  validates :author_id, presence: true

  belongs_to :author, class_name: "User",
                      foreign_key: :author_id

  has_many :assets, foreign_key: :gallery_id, dependent: :destroy
end
