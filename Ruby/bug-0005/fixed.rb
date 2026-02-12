class MessageFormatter
  def format(messages)
    output = []

    messages.each do |msg|
      text = msg[:text].to_s
      urgent = msg[:urgent] == true

      if urgent
        output << text.upcase
      else
        output << text.capitalize
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
