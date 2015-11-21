class Apiv1::AffiliateController < ApplicationController
    # GET /affiliates
    def index
        @affiliates = Affiliate.all.order(:order)
    end

    # GET /affiliates/:id
    def show
        @affiliate = Affiliate.find(params[:id])
    end
end
