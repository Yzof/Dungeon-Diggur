json.extract! gallery, :id, :author_id, :title, :description
json.assets gallery.assets.each do |asset|
  json.partial! "api/assets/asset", asset: asset
end
