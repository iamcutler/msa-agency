class CreateClientResumes < ActiveRecord::Migration
  def change
    create_table :client_resumes do |t|
      t.references :client, index: true, foreign_key: true
      t.string :project, null: false
      t.string :credit
      t.string :company
      t.string :job_type, null: false

      t.timestamps null: false
    end
  end
end
