galleries = (Tagging.where(tag_id: @tag.id).map { |tagging| Gallery.where(id: tagging.gallery_id) }).flatten

galleries.each do |gallery|
  json.set! gallery.id do
    json.partial! "api/gallery/gallery", gallery: gallery
  end
end
