require 'byebug'

arr = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
# => "fiiiissshhhhhh"

#Sluggish Octopus
#Find the longest fish in O(n^2) time. Do this by comparing all fish lengths to all other fish lengths

# def sluggish_octopus(arr)
#     ans = ""
#     (0...arr.length).each do |idx_1|
#         (idx_1+1...arr.length).each do |idx_2|
#             ans = arr[idx_2] if arr[idx_1].length < arr[idx_2].length
#         end
#     end
#     ans
# end

# p sluggish_octopus(arr)

# Dominant Octopus
# Find the longest fish in O(n log n) time. Hint: You saw a sorting algorithm that 
# runs in O(n log n) in the Sorting Complexity Demo. Remember that 
# Big O is classified by the dominant term.


def dominant_octopus(arr)
    return arr if arr.length <= 1

    mid_idx = arr.length / 2
    #debugger
    left = arr[0...mid_idx]
    right = arr[mid_idx..-1]

    left_sort = dominant_octopus(left)
    right_sort = dominant_octopus(right)

    merge_octopus(left_sort, right_sort)

end

def merge_octopus(left, right)
    smaller = []
    #debugger
    until left.empty? || right.empty?
        if left[0].length < right[0].length
            smaller << left.shift
        else  
            smaller << right.shift
        end
    end
    smaller + left + right
end

#p dominant_octopus(arr)[-1] --- don't know why we cant just put this within the merge sort


#Clever Octopus
# Find the longest fish in O(n) time. 
# The octopus can hold on to the longest 
# fish that you have found so far while stepping through the array only once.


def clever_octopus(arr)
    i = 0
    j = arr.length-1

    max = arr[0]
    while i != j
        if arr[i].length < arr[j].length
            max = arr[j]
            i += 1
        elsif arr[j].length <= arr[i].length
            max = arr[i]
            j -= 1
        end
    end
    max 
end

#p clever_octopus(arr)

#Dancing Octopus

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]


def slow_dance(target, arr)

    arr.each_with_index do |ele, idx|
        if target == ele
            return idx
        end
    end

end

#p slow_dance('up', tiles_array)

new_tiles_hash = {"up" => 0, "right-up" => 1, "right" => 2, "right-down" => 3, "down" => 4, "left-down" => 5, "left" => 6,  "left-up" => 7 }

# Constant Dance!
# Now that the octopus is warmed up, 
# let's help her dance faster. Use a different data structure and write a 
# new function so that you can access the tentacle number in O(1) time.

def constant_dance(target, hash)
    return hash[target] 
end

p constant_dance("up", new_tiles_hash)