require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do 
    FactoryBot.build(:user,
      email: "noblecheetah@99cats.com", 
      password: "password1234")
  end

  
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

  it "creates a session token before validation" do 
    user.valid?
    expect(user.session_token).to_not be nil
  end

  describe "#reset_session_token" do 
      it 'resets a session token on a user' do
        user.valid?
        old_session_token = subject.session_token
        user.reset_session_token!

        expect(user.session_token).not_to eq(old_session_token)
      end

      it "returns the new session token" do 
        expec(user.reset.reset_session_token!).to eq(user.session_token)
      end
  end

  describe "#is_password?" do
    it "verifies a password is correct" do 
      expect(user.is_password? ("good_password")).to be true
    end
    it "verifies a password is not correct" do 
      expect(user.is_password?("bad_password")).to be false
    end
  end

  describe '.find_by_credentials' do
    before {user.save!}

    it "returns user given good credentials" do 
        expec(User.find_by_credentials("noblecheetah@99cats.com", "good_password")).to eq(user)
    end 

    it "returns user given good credentials" do 
        expec(User.find_by_credentials("noblecheetah@99cats.com", "bad_password")).to eq(nil)
    end 
  end
end
