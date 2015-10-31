module Apiv1
    class NewsletterController < ApplicationController
        skip_before_action :verify_authenticity_token

        # POST /newsletter
        def create
            newEmail = Newsletter.create(email_address: params[:email_address])
 
            @success = newEmail.valid?
        end
    end
end
