class ChangeClientResumeOrder < ActiveRecord::Migration
  def change
    change_column :client_resumes, :order, :integer, default: 1
  end
end
