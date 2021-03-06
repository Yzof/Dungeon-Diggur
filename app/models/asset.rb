# == Schema Information
#
# Table name: assets
#
#  id         :integer          not null, primary key
#  gallery_id :integer          not null
#  path       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Asset < ApplicationRecord
  validates :gallery_id, presence: true

  belongs_to :gallery,  class_name: "Gallery",
                        foreign_key: :gallery_id
end
