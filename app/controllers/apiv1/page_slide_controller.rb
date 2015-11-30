class Apiv1::PageSlideController < ApplicationController
    # GET /page-slides
    def index
        @slides = PageSlide.find_all_by_section(params[:section]).order(:order)
    end
end
