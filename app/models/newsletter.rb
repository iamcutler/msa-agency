class Newsletter < ActiveRecord::Base
    validates :email_address, presence: true, uniqueness: true
    validates :email_address, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
end
