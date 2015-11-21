ActiveAdmin.register Faq do
    menu priority: 7, label: 'FAQ'

    index do
        column :id
        column :question
        column :answer
        column :order

        actions
    end

    permit_params :question, :answer, :order
end
