class ChangeResumeProjectNull < ActiveRecord::Migration
  def change
      change_table :client_resumes do |t|
          t.change :project, :string, null: true
      end
  end
end
