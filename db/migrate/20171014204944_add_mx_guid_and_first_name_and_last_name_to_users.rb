class AddMxGuidAndFirstNameAndLastNameToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :mx_guid, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
  end
end
