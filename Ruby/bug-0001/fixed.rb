class LoginTracker
  def initialize
    @logins = {}
    @total = 0
  end

  def record(username)
    if @logins[username]
      @logins[username] += 1
    else
      @logins[username] = 1
    end

    @total += 1
  end

  def most_active_user
    max = 0
    user = nil

    @logins.each do |name, count|
      if count > max
        max = count
        user = name
      end
    end

    user
  end

  def total_logins
    @total
  end
end

tracker = LoginTracker.new
tracker.record("alice")
tracker.record("bob")
tracker.record("alice")

puts tracker.most_active_user
