class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.integer :voteable_id
      t.string :voteable_type
      t.integer :vote_type
      t.integer :user_id
      t.timestamps
    end
  end
end
