 class LRUCache

    def initialize(size)
        @cache = []
        @size = size

    end

    def count
        self.cache.length
      # returns number of elements currently in cache
    end

    def add(el)
        if self.cache.include?(el)
            self.cache.delete(el)
            self.cache << el
        elsif self.count >= self.size
            self.cache.shift
            self.cache << el
        else
            self.cache << el
        end

      # adds element to cache according to LRU principle
    end

    def show
        p self.cache
      # shows the items in the cache, with the LRU item first
    end

    protected
    attr_reader :cache, :size
    # helper methods go here!

  end

johnny_cache = LRUCache.new(4)

johnny_cache.add("I walk the line")
johnny_cache.add(5)

johnny_cache.count # => returns 2

johnny_cache.add([1,2,3])
johnny_cache.add(5)
johnny_cache.add(-5)
johnny_cache.add({a: 1, b: 2, c: 3})
johnny_cache.add([1,2,3,4])
johnny_cache.add("I walk the line")
johnny_cache.add(:ring_of_fire)
johnny_cache.add("I walk the line")
johnny_cache.add({a: 1, b: 2, c: 3})


johnny_cache.show 