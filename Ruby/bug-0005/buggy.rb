class MessageFormatter
  def format(messages)
    output = []

    messages.each do |msg|
      if msg[:urgent]
        output << msg[:text].upcase
      else
        msg[:text].capitalize
      end
    end

    output.join("\n")
  end
end

messages = [
  { text: "server down", urgent: true },
  { text: "daily report ready", urgent: false }
]

puts MessageFormatter.new.format(messages)
