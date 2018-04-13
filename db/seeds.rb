# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
# User.create(username: "", password: "", biography: "")
# Gallery.create( author_id: #, title: "", description: "")
# Vote.create(user_id: #, vote_type: #, voteable_type: "", voteable_id: #)
# Asset.create(gallery_id: #, path: "")

demoUser = User.create(username: "Demo", password:"password")
user1 = User.create(username: "Dungeon-Master", password:"password")
user2 = User.create(username: "Player-Hater", password:"password")
user3 = User.create(username: "Goblin", password:"password")

gallery1 = Gallery.create(
  author_id: 1,
  title: "The Tomb of Horrors",
  description: "The original death maze created by Gary Gygax",
  tag_names: ["wip", "deadly", "classic"]
)
gallery2 = Gallery.create(
  author_id: 2,
  title: "Ravenloft",
  description: "Classic Vampire Setting",
  tag_names: ["classic", "undead", "high-level"]
)
gallery3 = Gallery.create(
  author_id: 3,
  title: "Dragons of Despair",
  description: "Setting for the DragonLance books",
  tag_names: ["dragons", "wip", "deadly"]
 )
gallery4 = Gallery.create(
  author_id: 2,
  title: "Escape from the Underdark",
  description: "Will Lolith's plan to resurrect the god of undeath succeed?",
  tag_names: ["undead", "low-level", "spiders"]
)
gallery5 = Gallery.create(
  author_id: 4,
  title: "The Book of Wondrous Inventions",
  description: "An expermintal sentient tome begins spreading its ideas, chaos ensues.",
  tag_names: ["sci-fi", "low-level", "weird"]
)
gallery6 = Gallery.create(
  author_id: 3,
  title: "Queen of the Spiders",
  description: "The conclusion to the epic Lolith storyline",
  tag_names: ["spiders", "undead", "high-level"]
)
gallery7 = Gallery.create(
  author_id: 4,
  title: "Desert of Desolation",
  description: "An Egyptian-themed setting, filled with unknown dark creatures",
  tag_names: ["weird", "undead", "deadly"]
)
gallery8 = Gallery.create(
  author_id: 2,
  title: "White Plume Mountain",
  description: "The classic dungeon-crawl, featuring engenious puzzles and dangerous traps.",
  tag_names: ["classic", "deadly", "high-level", "dungeon-crawl"]
)
gallery9 = Gallery.create(
  author_id: 1,
  title: "Expedition to the Barrier Peaks",
  description: "A sci-fi romp through the classic GreyHawk setting.",
  tag_names: ["sci-fi", "weird", "wip"]
)
gallery10 = Gallery.create(
  author_id: 3,
  title: "The Temple of Elemental Evil",
  description: "When Nature itself is the monster of the week, who will step up to slay it?",
  tag_names: ["classic", "dragons", "dungeon-crawl"]
)

vote1 = Vote.create(user_id: 2, vote_type: 0, voteable_type: "Gallery", voteable_id:1)
vote2 = Vote.create(user_id: 2, vote_type: 0, voteable_type: "Gallery", voteable_id:2)
vote3 = Vote.create(user_id: 2, vote_type: 0, voteable_type: "Gallery", voteable_id:3)
vote4 = Vote.create(user_id: 2, vote_type: 0, voteable_type: "Gallery", voteable_id:4)
vote5 = Vote.create(user_id: 2, vote_type: 0, voteable_type: "Gallery", voteable_id:5)

vote6 = Vote.create(user_id: 3, vote_type: 1, voteable_type: "Gallery", voteable_id:3)
vote7 = Vote.create(user_id: 3, vote_type: 1, voteable_type: "Gallery", voteable_id:4)
vote8 = Vote.create(user_id: 3, vote_type: 1, voteable_type: "Gallery", voteable_id:5)
vote9 = Vote.create(user_id: 3, vote_type: 0, voteable_type: "Gallery", voteable_id:6)
vote10 = Vote.create(user_id: 3, vote_type: 0, voteable_type: "Gallery", voteable_id:7)

vote11 = Vote.create(user_id: 4, vote_type: 0, voteable_type: "Gallery", voteable_id:6)
vote12 = Vote.create(user_id: 4, vote_type: 0, voteable_type: "Gallery", voteable_id:7)
vote13 = Vote.create(user_id: 4, vote_type: 0, voteable_type: "Gallery", voteable_id:8)
vote14 = Vote.create(user_id: 4, vote_type: 0, voteable_type: "Gallery", voteable_id:9)
vote15 = Vote.create(user_id: 4, vote_type: 0, voteable_type: "Gallery", voteable_id:10)

asset1 = Asset.create(gallery_id: 1, path: "http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523383878/qzfs4degnx6j2zfuvqzl.png")
asset2 = Asset.create(gallery_id: 2, path: "http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523396511/rwk8birm44atml05yfnw.png")
asset3 = Asset.create(gallery_id: 3, path: "http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523398643/sidssiyv4v2kt4rff2jl.png")
asset4 = Asset.create(gallery_id: 4, path: "http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523466502/imx2sjcbetm5lxqdhoif.png")
asset5 = Asset.create(gallery_id: 5, path: "http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523466822/nskayurffov9tqd9vyoh.png")
asset6 = Asset.create(gallery_id: 6, path: "http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523396511/rwk8birm44atml05yfnw.png")
asset7 = Asset.create(gallery_id: 7, path: "http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523467885/j6iulved0jxl7hynuzow.png")
asset8 = Asset.create(gallery_id: 8, path: "http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523463935/kr5jxajxo6xmjioizoeb.png")
asset9 = Asset.create(gallery_id: 9, path: "http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523331738/m91tunx2tk9ml8nnejn4.png")
asset10 = Asset.create(gallery_id: 10, path: "http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523513490/nlyxx03nck8bvokojd4x.png")
asset11 = Asset.create(gallery_id: 1, path: "http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523418638/g4lfoxghkcoinbtfocmi.png")
asset12 = Asset.create(gallery_id: 8, path: "http://res.cloudinary.com/dkk7qjv7c/image/upload/v1523484997/ccf2ufoysg6qgxcnlgph.png")
