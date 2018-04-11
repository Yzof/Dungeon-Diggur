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

require 'test_helper'

class AssetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
