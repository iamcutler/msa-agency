class StaffVideo < ActiveRecord::Base
  belongs_to :staff

  enum video_type: [ :youtube, :vimeo ]
end
