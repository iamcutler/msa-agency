class Affiliate < ActiveRecord::Base
    # This method associates the attribute ":image" with a file attachment
    has_attached_file :image, styles: {
        thumb: '300x300>',
        square: '400x400#',
        medium: '600x600>',
        large: '800x800>'
    },
    default_url: '/assets/images/img-placeholder.jpg'

    # Validate the attached image is image/jpg, image/png, etc
    validates_attachment_presence :image
    validates_attachment_size :image, :less_than => 3.megabytes
    validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
