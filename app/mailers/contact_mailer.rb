class ContactMailer < ApplicationMailer
    default from: 'noreply@msaagency.com'

    def contact_form(form_params)
        @params = form_params

        mail(to: 'iamcutler@icloud.com', subject: 'MSA Agency Contact Form')
    end
end
