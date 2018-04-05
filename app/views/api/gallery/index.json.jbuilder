json.galleries do
  @galleries.each do |gallery|
    json.set! gallery.id do
      json.partial! "api/gallery/gallery", gallery: gallery
    end
  end
end
