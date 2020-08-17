class GraphNode

    attr_accessor :val, :neighbors

    def initialize(val)
        @val = val
        @neighbors = []
    end

    def add_neighbor(node)
        @neighbors << node
    end

    def bfs(starting_node, target_value)
        queue = [starting_node]
        visited = Set.new

        until queue.empty?
            ele = queue.shift
            unless visited.include?(ele)
                return ele if ele.val == target_value
                visited.add(ele)
                queue += ele.neighbors
            end
        end
        nil
    end

end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]
