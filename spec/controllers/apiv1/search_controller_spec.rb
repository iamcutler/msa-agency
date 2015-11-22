require 'rails_helper'

RSpec.describe Apiv1::SearchController, type: :controller do

  describe "GET #get_results" do
    it "returns http success" do
      get :get_results
      expect(response).to have_http_status(:success)
    end
  end

end
