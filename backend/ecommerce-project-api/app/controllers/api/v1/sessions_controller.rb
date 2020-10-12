class Api::V1::SessionsController < ApplicationController

    def create
        @user = User.find_by(email: params[:session][:email])

        if @user && @user.authenticate(params[:session][:password])
            session[:id] = @user.id
            render json: @user
        else
            render json: { error: "Invalid email and password"}
        end
    end

    def get_current_user
        if logged_in?
          render json: current_user
        else
          render json: { error: "Not logged in"}
        end
      end
  

    def destroy
      session.clear
      render json: {
        notice: "Log out successful"
      }, status: ok
    end
end 