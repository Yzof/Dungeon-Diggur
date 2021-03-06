class CreateTaggings < ActiveRecord::Migration[5.1]
  def change
    create_table :taggings do |t|
      t.integer :gallery_id, null: false
      t.integer :tag_id, null: false
      t.timestamps
    end

    add_index :taggings, :tag_id
    add_index :taggings, :gallery_id
  end
end
