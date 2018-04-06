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

require 'test_helper'

class GalleryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
