class Api::V1::UsersController < ApplicationController
def create
    #byebug
    @user = User.new(user_params)

    if @user.save
      session[:id] = @user.id
      render json: { status: 201, user: @user, logged_in: true}
    else
      error_resp = { error: @user.errors.full_messages.to_sentence}
      render json: error_resp, status: :unprocessable_entity
    end
  end


  private
    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end
end 