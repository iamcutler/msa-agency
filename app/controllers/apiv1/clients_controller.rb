require "#{Rails.root}/app/services/client-pdf"

module Apiv1
    class ClientsController < ApplicationController
        # GET /clients
        def index
            @clients = Client.all.is_basic(false).page_hidden(false).order(:first_name)
        end

        # GET /clients/slug
        def show
            @client = Client.find_by_slug(params[:id])

            if @client
                @clientPhotos = @client.photos.order(:order)
                @clientReel = @client.reel
                @clientVideos = @client.videos.order(:order)
                @clientPress = @client.press.order(:order)
                @resumeOrder = @client.get_resume_types

                begin
                    # Add vimeo thumbnail if available
                    @clientVideos.each do |v|
                        if v.video_type == "vimeo"
                            video = Vimeo::Simple::Video.info(v.video_id)

                            Rails.logger.info video[0]
                            if video
                                v[:thumbnail] = video[0]['thumbnail_large'];
                            end
                        end
                    end
                rescue e
                    Rails.logger.error "Error getting vimeos for client: #{@client}"
                end
            else
                render json: { error: 'Client not found' }, status: 404
            end
        end

        # GET /clients-by-category
        def find_by_categories
            begin
                categories = params[:categories]

                @clients = ClientCategory.findClients(categories).order("clients.first_name ASC")
            rescue
                @clients = []
            end
        end

        # POST /client-resume/:id/sort
        def sort_resume_categories
            client_id = params[:id]
            categories = params[:categories]

            begin
                if client_id && categories
                    client = Client.find(client_id)

                    if client
                        # Save resume types for client
                        client.save_resume_types(categories)

                        return render json: { success: true }
                    end
                end

                render json: { success: false }
            rescue StandardError => e
                Rails.logger.error e
                render json: { success: false }
            end
        end

        # POST /client-resume/:id/resume/sort-records
        def sort_resume_records
            client_id = params[:id]
            categories = params[:categories]

            begin
                if client_id && categories
                    client = Client.find(client_id)

                    if client
                        # Iterator and update order
                        categories.each_with_index do |c, i|
                            client.resume.update(c, order: i + 1)
                        end

                        return render json: { success: true }
                    end
                end

                render json: { success: false }
            rescue StandardError => e
                Rails.logger.error e
                render json: { success: false }
            end
        end

        # GET /clients/resume/{slug}.pdf
        def resume_generation
            client = Client.find_by_slug(params[:slug])

            # if not found
            if client.nil?
              render :file => 'public/404.html', :status => :not_found, :layout => false
            else
              respond_to do |format|
                format.pdf do
                  pdf = ClientPdf.new(client, {
                      :bottom_margin => 50
                  })
                  send_data pdf.render, filename: "#{client[:first_name]} #{client[:last_name]}.pdf", type: 'application/pdf'
                end
              end
            end
        end
    end
end
