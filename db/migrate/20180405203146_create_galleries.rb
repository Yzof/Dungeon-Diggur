class CreateGalleries < ActiveRecord::Migration[5.1]
  def change
    create_table :galleries do |t|
      t.integer :author_id, null: false
      t.timestamps
    end

    add_index :galleries, :author_id
  end
end
