class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    self.take_turn
    while !self.game_over
      self.take_turn
    end
    self.game_over_message
    self.reset_game
  end

  def take_turn
    self.show_sequence
    self.require_sequence
    if self.game_over == false
      self.sequence_length += 1
      self.round_success_message
    end
  end

  def show_sequence
    self.add_random_color
  end

  def require_sequence
    # this is suppose to be inputing a sequence
    # but we can't test it.
    # while loop... checking every single one
    # with input
    # if they lose... immediately set game_over to false
  end

  def add_random_color
    self.seq << COLORS.sample

  end

  def round_success_message
    puts "Nice! See if you can get the next one!"
  end

  def game_over_message
    puts "Life is a series of patterns we with knowlegde to learn and to adapt to."
  end

  def reset_game
    self.game_over = false
    self.sequence_length = 1
    self.seq = []
  end

end
