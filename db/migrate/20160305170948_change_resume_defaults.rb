class ChangeResumeDefaults < ActiveRecord::Migration
  def change
      change_table :client_resumes do |t|
          t.change :project, :string, default: ''
          t.change :credit, :string, default: ''
          t.change :company, :string, default: ''
      end
  end
end
