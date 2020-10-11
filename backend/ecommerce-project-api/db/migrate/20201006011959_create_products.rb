class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :title
      t.string :image
      t.string :description
      t.decimal :price
      t.integer :quantity
      t.belongs_to :user
      t.timestamps
    end
  end
end
