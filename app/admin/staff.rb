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
            input :image, as: :file, hint: f.object.image.present? ? image_tag(f.object.image.url(:thumb)) : content_tag(:span, "no image uploaded yet")
            input :department
            input :slug
            input :order
        end

        actions
    end

    # Assign params that can be editable (Mass Assignment)
    permit_params :first_name, :last_name, :email, :position, :biography, :location, :department, :image, :slug, :order
end
