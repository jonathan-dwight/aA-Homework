class Stack

    attr_accessor :stack

    def initialize
        @stack = []
    end

    def push(el)
        @stack.push(el)
    end

    def pop
        @stack.pop
    end

    def peek
        @stack[-1]
    end
end

class Queue

    attr_accessor :queue

    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue.unshift(el)

    end
    
    def dequeue
        @queue.pop
    end

    def peek
        @queue[-1]
    end

end

class Map

    attr_accessor :map

    def initialize
        @map = []
    end

    def set(key,value)
        self.map << [key,value]
    end

    def get(key)
        self.map.each do |sub|
            sub.each do |ele|
                return ele if ele == key
            end
        end
        nil
    end

    def delete(key)
        self.map.each do |sub|
            sub.each do |ele|
                self.map.delete(sub) if ele == key
            end
        end
        self.map
    end

    def show
        self.map
    end

end