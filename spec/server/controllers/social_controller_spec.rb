require 'rails_helper'

RSpec.describe SocialController, type: :controller do

  describe "GET #getTwitterFeed" do
    it "returns http success" do
      get :getTwitterFeed
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #getInstagramFeed" do
    it "returns http success" do
      get :getInstagramFeed
      expect(response).to have_http_status(:success)
    end
  end

end
