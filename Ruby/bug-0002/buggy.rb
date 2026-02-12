class TodoLoader
  def initialize(path)
    @path = path
  end

  def load
    todos = []
    file = File.open(@path)

    file.each_line do |line|
      title, done = line.split(",")
      todos << {
        title: title.strip,
        done: done.strip == "true"
      }
    end

    todos
  end
end

loader = TodoLoader.new("todos.txt")
puts loader.load.inspect
