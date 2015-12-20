class Company < ActiveRecord::Base
    self.table_name = "company"
    
    enum reel_type: [ :youtube, :vimeo ]
end
