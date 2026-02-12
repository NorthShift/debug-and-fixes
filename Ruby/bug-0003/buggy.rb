class Analytics
  def initialize(values)
    @values = values
  end

  def average
    sum = 0
    @values.each do |v|
      sum += v
    end
    sum / @values.length
  end

  def variance
    avg = average
    total = 0

    @values.each do |v|
      total += (v - avg) ** 2
    end

    total / @values.length
  end
end

data = [1, 2, 3, 4, 5]
puts Analytics.new(data).variance
