class Api::V1::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save 
            login!
            render json: {
                status: :created,
                user: @user 
            }
        else
            render json: {
                status: 500, 
                errors: @user.erros.full_messages
            }
    end 

    private
        def user_params
            params.require(:user).permit(:username, :email, :password, :password_confirmation)
        end 

end 