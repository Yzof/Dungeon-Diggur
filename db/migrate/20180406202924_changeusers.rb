class Changeusers < ActiveRecord::Migration[5.1]
  def change
    change_table :users do |t|
      t.text :biography
    end
  end
end
