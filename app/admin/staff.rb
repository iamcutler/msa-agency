ActiveAdmin.register Staff do
    menu priority: 4, label: 'Staff'

    index title: 'Staff' do
        id_column
        column :first_name
        column :last_name
        column :position
        column :location
        column :department
        column :order
        actions
    end

    show title: 'Staff Member' do
        attributes_table do
            row :first_name
            row :last_name
            row :email
            row :position
            row :biography
            row :location
            row :department
            row :slug
            row :order
        end
    end

    form do |f|
        inputs "Details" do
            input :first_name
            input :last_name
            input :email
            input :position
            input :biography
            input :location, as: :select, collection: ['Los Angeles', 'New York', ['Los Angeles and New York', 'Los Angeles, New York']], include_blank: false
            input :department
            input :slug
            input :order
        end

        f.inputs 'Photos' do
            f.has_many :photos do |ph|
                if ph.object.persisted?
                    ph.input :_destroy, :as => :boolean
                end
                ph.input :image, as: :file, hint: ph.object.image.present? ? image_tag(ph.object.image.url(:thumb)) : content_tag(:span, "no image uploaded yet")
                if ph.object.persisted?
                    ph.input :cover
                    ph.input :default
                end
                ph.input :caption
                ph.input :order, placeholder: '0'

                ph.actions
            end
        end

        f.inputs 'Videos' do
            f.has_many :videos do |pv|
                pv.input :_destroy, :as => :boolean
                pv.input :video_id, placeholder: 'v?=uc-CzXQJg8Y'
                pv.input :video_type, as: :select, collection: [['YouTube', 'youtube'], ['Vimeo', 'vimeo']], include_blank: false
                pv.input :order, placeholder: '0'

                pv.actions
            end
        end

        actions
    end

    # Assign params that can be editable (Mass Assignment)
    permit_params :first_name, :last_name, :email, :position, :biography, :location, :department, :image, :slug, :order,
                  photos_attributes: [:id, :image, :caption, :cover, :default, :order, :_destroy],
                  videos_attributes: [:id, :video_id, :video_type, :order, :_destroy]
end
