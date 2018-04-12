# == Schema Information
#
# Table name: galleries
#
#  id                 :integer          not null, primary key
#  author_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  title              :string           not null
#  description        :text
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Gallery < ApplicationRecord
  validates :author_id, presence: true

  belongs_to :author, class_name: "User",
                      foreign_key: :author_id

  has_many :assets, foreign_key: :gallery_id, dependent: :destroy
  has_many :votes, as: :voteable, dependent: :destroy
end
