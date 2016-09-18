ActiveAdmin.register ClientResume do
    menu priority: 3, label: 'Resumes'
    config.sort_order = 'order_asc'

    filter :client_id, as: :select, collection: proc { Client.order(:first_name) }
    filter :project
    filter :credit
    filter :company
    filter :job_type

    active_admin_import validate: false,
                        csv_options: {
                            col_sep: "\"",
                            row_sep: "\r\r\n"
                        },
                        template: 'admin/import_resume',
                        timestamps: true,
                        template_object: ActiveAdminImport::Model.new(
                            hint: "File will be imported with such header format: 'client_id', ''project', 'credit', 'company', 'job_type'",
                            client: '',
                            csv_options: {col_sep: ",", row_sep: "\r\r\n", quote_char: "\""},
                            csv_headers: ["client_id", "project", "credit", "company", "job_type"]
                        ),
                        before_import: proc { |import|
                            client_id = import.model.client

                            ClientResume.where(client_id: import.model.client).delete_all
                        },
                        back: proc { config.namespace.resource_for(ClientResume).route_collection_path } # redirect to resume index

    csv force_quotes: true, col_sep: ",", quote_char: "\"" do
        column :client_id
        column :project
        column :credit
        column :company
        column :job_type
    end

    index download_links: [:csv]
    index download_links: proc{ ClientResume.order(:order) }

    # Controller
    controller do
        before_filter :disable_pagination, :only => [:index]

        # disable pagination on filtered clients
        def disable_pagination
            if params[:q] && params[:q][:client_id_eq]
                @per_page = ClientResume.count
            end
        end
    end

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
            input :client, include_blank: false, :collection => Client.all.order(:first_name).map{ |u|
                [ "#{u.first_name} #{u.last_name}", u.id ]
            }
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
                ['Industrials', 'industrials'],
                ['Miscellaneous', 'misc'],
                ['Music Video', 'music video'],
                ['Print', 'print'],
                ['Teaching', 'teaching'],
                ['Television', 'television'],
                ['Theater', 'theater']
            ], include_blank: false
        end

        actions
    end

    permit_params :client_id, :project, :credit, :company, :job_type
end
