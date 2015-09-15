class SocialController < ApplicationController
  def getTwitterFeed
      twitter_config = SOCIAL_CONFIG['twitter']

      twitter = Twitter::REST::Client.new do |config|
          config.consumer_key = twitter_config['consumer_key']
          config.consumer_secret = twitter_config['consumer_secret']
          config.access_token = twitter_config['oauth_token']
          config.access_token_secret = twitter_config['oauth_token_secret']
      end

      @feed = twitter.user_timeline(twitter_config['username'], { count: params[:count] })

      render json: @feed
  end

  def getInstagramFeed
  end
end
