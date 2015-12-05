class ClientReel < ActiveRecord::Base
  belongs_to :client
  
  enum video_type: [ :youtube, :vimeo ]
end
