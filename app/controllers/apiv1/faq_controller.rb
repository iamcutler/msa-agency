class Apiv1::FaqController < ApplicationController
    # GET /faq
    def index
        @faqs = Faq.all.order(:order)
    end

    # GET /faq/1
    def show
        @faq = Faq.find(params[:id])
    end
end
