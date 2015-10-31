class ClientCategory < ActiveRecord::Base
  belongs_to :client

  def self.findClients(categories = '')
      select("clients.*, GROUP_CONCAT(client_categories.category SEPARATOR ', ') as categories")
      .joins(:client)
      .where(category: categories.split(','))
      .group("clients.id")
  end
end
