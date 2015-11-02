require "instagram"

instagram_config = SOCIAL_CONFIG['instagram']

Instagram.configure do |config|
    config.client_id = instagram_config['client_id']
    config.client_secret = instagram_config['client_secret']
    config.access_token = instagram_config['access_token']
    # For secured endpoints only
    #config.client_ips = '<Comma separated list of IPs>'
end
