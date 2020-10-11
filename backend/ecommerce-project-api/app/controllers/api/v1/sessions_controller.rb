class Api::V1::SessionsController < ApplicationController

    def create
        @user = User.find_by(email: params[:session][:email])

        if @user && @user.authenticate(params[:session][:password])
            session[:id] = @user.id
            render json: { status: 201, user: @user, logged_in: true}
        else
            render json: { error: "Invalid email and password"}
        end
    end

    def get_current_user
        if logged_in?
          render json: { status: 201, user: current_user, logged_in: true}
        else
          render json: { erro: "Not logged in"}
        end
      end
  

    def destroy
      session.clear
      render json: {
        notice: "Log out successful"
      }, status: ok
    end
end 