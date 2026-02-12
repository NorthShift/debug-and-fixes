class TodoLoader
  def initialize(path)
    @path = path
  end

  def load
    todos = []
    file = File.open(@path, "r")
    file.each_line do |line|
      title, done = line.split(",")
      todos << {
        title: title.strip,
        done: done.to_s.strip.downcase == "true"
      }

     todos
    end
  end
end

loader = TodoLoader.new("todos.txt")
puts loader.load.inspect