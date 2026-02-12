class OrderFulfillment
  def initialize(orders)
    @orders = orders
  end

  def fulfill
    @orders.each do |order|
      next if order[:shipped]

      order[:items].each do |item|
        item[:stock] -= item[:quantity]
      end

      order[:shipped] = true
    end

    @orders
  end
end

orders = [
  {
    items: [
      { stock: 3, quantity: 2 },
      { stock: 1, quantity: 2 }
    ],
    shipped: false
  }
]

puts OrderFulfillment.new(orders).fulfill.inspect
