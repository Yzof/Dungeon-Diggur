class Tagging < ApplicationRecord
  belongs_to :gallery
  belongs_to :tag
end
