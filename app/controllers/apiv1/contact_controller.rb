class Apiv1::ContactController < ApplicationController
    protect_from_forgery with: :null_session

    # Submit contact information
    def submit
        @success = true;

        if !ContactMailer.contact_form(contact_params).deliver_now
            @success = false
        end

        render json: { success: @success }
    end

    private

        def contact_params
            params.require(:contact).permit(:regarding, :name, :email, :phone, :message)
        end
end
