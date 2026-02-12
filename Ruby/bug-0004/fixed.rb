class OrderFulfillment
  def initialize(orders)
    @orders = Marshal.load(Marshal.dump(orders)) # deep copy
  end

  def fulfill
    @orders.each do |order|
      next if order[:shipped]

      original_items = Marshal.load(Marshal.dump(order[:items]))

      begin
        order[:items].each do |item|
          stock = item[:stock]
          quantity = item[:quantity]

        if stock.nil? || quantity.nil?
            raise "Missing stock or quantity"
        end

        if quantity > stock
            raise "Not enough stock"
        end

          item[:stock] = stock - quantity
        end

        order[:shipped] = true

        rescue
        order[:items] = original_items
        raise
      end
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