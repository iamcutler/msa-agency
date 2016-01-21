class ClientCategory < ActiveRecord::Base
  belongs_to :client

  has_one :photos, through: :client

  def self.findClients(categories = '')
      select("clients.*, GROUP_CONCAT(client_categories.category SEPARATOR ', ') as categories")
      .joins(:client)
      .where("clients.basic = 0")
      .where("clients.page_hide = 0")
      .where(category: categories.split(','))
      .group("clients.id")
  end
end
