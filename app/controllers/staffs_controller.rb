class StaffsController < ApplicationController
    # GET /staff
    def index
        @staff = Staff.all().order(:order)
    end

    # GET /staff/slug
    def show
        @staff = Staff.find_by_slug(params[:id])
    end
end
