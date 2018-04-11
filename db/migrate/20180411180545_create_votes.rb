class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.string :composite_id, null: false
      t.integer :vote_type
      t.integer :user_id
      t.timestamps
    end
  end
end
