class Analytics
  def initialize(values)
    @values = Array(values).map(&:to_f)
    raise ArgumentError, "Values cannot be empty" if @values.empty?
  end

  def average
    sum = 0.0
    @values.each do |v|
      sum += v
    end
    sum / @values.length.to_f
  end

  def variance
    avg = average
    total = 0.0

    @values.each do |v|
      total += (v - avg) ** 2
    end

    total / @values.length.to_f
  end
end

data = [1, 2, 3, 4, 5]
puts Analytics.new(data).variance
