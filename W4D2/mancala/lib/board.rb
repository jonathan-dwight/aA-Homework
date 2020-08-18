require "byebug"
class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Board.place_stones
    @player_1 = name1
    @player_2 = name2 
  end

  def self.place_stones
    # helper method to #initialize every non-store cup with four stones each
    new_board = Array.new(14) {Array.new}
    (0...14).each do |i|
      if i != 13 && i != 6
        4.times do
          new_board[i] << :stone
        end
      end
    end
    new_board
  end

  def valid_move?(start_pos)
    if start_pos > 14
      raise "Invalid starting cup"
    elsif self.cups[start_pos].length == 0
      raise "Starting cup is empty"
    end
  end

  def make_move(start_pos, current_player_name)
    stones = 0
    stones += self.cups[start_pos].length
    self.cups[start_pos] = self.cups[start_pos].clear  

    i = start_pos + 1
    while stones > 0
      i = 0 if i > 13
      if current_player_name == @player_1
        if i != 13
          self.cups[i] << :stone
          stones -= 1
        end
        i += 1
      elsif current_player_name == @player_2
        if i != 6
          self.cups[i] << :stone
          stones -= 1
        end
        i += 1
      end
    end
    self.render
    last_pos = i-1
    self.next_turn(last_pos)
  end


  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    pos = self.cups[ending_cup_idx]
    return :prompt if ending_cup_idx == 13 || ending_cup_idx == 6
    return :switch if pos.length == 1 
    return ending_cup_idx if pos.length > 1
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    self.cups[0..5].all? {|ele| ele.empty?} || self.cups[7..12].all? {|ele| ele.empty?}
  end

  def winner
    return :draw if self.cups[6].length == self.cups[13].length
    self.cups[6].length > self.cups[13].length ? @player_1 : @player_2
  end
end
