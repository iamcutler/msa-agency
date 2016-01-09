class PageSlide < ActiveRecord::Base
    # This method associates the attribute ":image" with a file attachment
    has_attached_file :image, styles: {
        thumb: '300x300>',
        large: '900x900>'
    },
    default_url: '/assets/images/img-placeholder.jpg'

    # Validate the attached image is image/jpg, image/png, etc
    validates_attachment_presence :image
    validates_attachment_size :image, :less_than => 5.megabytes
    validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

    enum slide_type: [ :image, :video ]
    enum media_type: [ :youtube, :vimeo ]
    enum link_target: [ :_self, :_blank ]

    # Find all slides by section
    def self.find_all_by_section(section = 'home')
        where(section: section)
    end
end
