class Apiv1::CompanyController < ApplicationController
  def index
      @company = Company.first
  end
end
