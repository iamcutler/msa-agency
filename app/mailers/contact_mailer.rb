class ContactMailer < ApplicationMailer
    default from: 'noreply@msaagency.com'

    def contact_form(form_params)
        @params = form_params

        mail(to: 'infoatmsa@gmail.com', subject: 'MSA Agency Contact Form')
    end

    def booking_form(form_params)
        @params = form_params

        mail(to: 'infoatmsa@gmail.com', subject: 'I want to book a client')
    end

    def representation_form(form_params)
        @params = form_params

        mail(to: 'infoatmsa@gmail.com', subject: 'I would like MSA to represent me!')
    end
end
