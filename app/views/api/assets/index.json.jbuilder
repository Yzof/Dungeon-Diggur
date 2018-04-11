json.assets @assets.each do |asset|
  json.gallery_id asset.gallery_id
  json.partial! "api/assets/asset", asset: asset
end
