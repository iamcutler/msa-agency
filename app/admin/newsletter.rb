ActiveAdmin.register Newsletter , as: 'Mailing List' do
    menu priority: 8, label: 'Mailing List'
    actions :all, except: [:edit]

    index title: 'Mailing List' do
        column :email_address
        column 'Signed up on', :created_at

        actions
    end

    show title: '' do
        attributes_table do
            row :email_address
            row :created_at, label: 'Signed up on'
        end
    end

    permit_params :email_address
end
