class ClientService
    def initialize(params)
        @client = params[:client]
    end

    def getDefaultPhoto
        @client.photos.each do |photo|
            if photo.default?
                return photo
            end
        end

        nil
    end

    def getCoverPhoto
        @client.photos.each do |photo|
            if photo.cover?
                return photo
            end
        end

        nil
    end
end
