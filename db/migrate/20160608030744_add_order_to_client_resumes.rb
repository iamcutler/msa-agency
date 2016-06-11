class AddOrderToClientResumes < ActiveRecord::Migration
  def change
    add_column :client_resumes, :order, :integer, after: :job_type, null: false, default: 0
  end
end
