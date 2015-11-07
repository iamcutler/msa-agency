ActiveAdmin.register ClientResume do
    menu priority: 3, label: 'Resumes'

    index do
        column :client
        column :project
        column :credit
        column :company
        column :job_type

        actions
    end

    form do |f|
        inputs "Details" do
            input :client, include_blank: false
            input :project
            input :credit
            input :company
            input :job_type, as: :select, collection: [
                ['Award', 'award'],
                ['Award Show', 'award show'],
                ['Commerical', 'commercial'],
                ['Concerts/Tours/Events', 'event'],
                ['Corporate', 'corporate'],
                ['Film', 'film'],
                ['Miscellaneous', 'misc'],
                ['Music Video', 'music video'],
                ['Television', 'television']
            ], include_blank: false
        end

        actions
    end

    permit_params :client, :project, :credit, :company, :job_type
end
