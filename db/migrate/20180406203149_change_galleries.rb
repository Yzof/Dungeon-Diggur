class ChangeGalleries < ActiveRecord::Migration[5.1]
  def change
    change_table :galleries do |t|
      t.string :title, null: false
      t.text :description
    end
  end
end
