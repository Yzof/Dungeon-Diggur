# == Schema Information
#
# Table name: images
#
#  id                            :integer          not null, primary key
#  gallery_id                    :integer          not null
#  created_at                    :datetime         not null
#  updated_at                    :datetime         not null
#  image_attachment_file_name    :string
#  image_attachment_content_type :string
#  image_attachment_file_size    :integer
#  image_attachment_updated_at   :datetime
#

require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
