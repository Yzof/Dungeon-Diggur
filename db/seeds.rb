# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create(username: "Demo", password:"password")
user1 = User.create(username: "Dungeon-Master", password:"password")
user2 = User.create(username: "Player-Hater", password:"password")
user3 = User.create(username: "Goblin", password:"password")

gallery1 = Gallery.create(
  author_id: 1,
  title:"The Tomb of Horrors",
  description:"The original death maze created by Gary Gygax"
)
gallery2 = Gallery.create(
  author_id: 2,
  title:"Ravenloft",
  description:"Classic Vampire Setting"
)
gallery3 = Gallery.create(
  author_id: 3,
  title:"Dragons of Despair",
  description:"Setting for the DragonLance books"
)

asset1 = Asset.create(gallery_id: 1, path: "http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523383878/qzfs4degnx6j2zfuvqzl.png")
asset2 = Asset.create(gallery_id: 2, path: "http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523396511/rwk8birm44atml05yfnw.png")
asset3 = Asset.create(gallery_id: 3, path: "http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523398643/sidssiyv4v2kt4rff2jl.png")
