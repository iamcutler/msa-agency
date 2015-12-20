ActiveAdmin.register Company do
    actions :all, :except => [:new, :destroy]
    config.filters = false

    menu priority: 1, label: 'Company'

    index do
        column :reel_id
        column :reel_type

        actions
    end

    form do |f|
        inputs 'Reel' do
            input :reel_id
            input :reel_type, as: :select, collection: [['YouTube', 'youtube'], ['Vimeo', 'vimeo']], include_blank: false
        end

        actions
    end

    permit_params :id, :reel_id, :reel_type
end
