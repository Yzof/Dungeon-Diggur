class CreateAssets < ActiveRecord::Migration[5.1]
  def change
    create_table :assets do |t|
      t.integer :gallery_id, null: false
      t.text :path
      t.timestamps
    end
  end
end
