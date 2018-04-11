class Asset < ApplicationRecord
  validates :gallery_id, presence: true

  belongs_to :gallery,  class_name: "Gallery",
                        foreign_key: :gallery_id
end
