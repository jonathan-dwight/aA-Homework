class UserMailer < ApplicationMailer
    default from: 'noblecheetah14@cats99.com'
    
    def welcome_email(user)
        @user = user
        @url  = 'http://localhost:3000/session/new'
        mail(to: @user.username, subject: 'Welcome to NobleCheetah14 MEOW ;)')
    end
end
