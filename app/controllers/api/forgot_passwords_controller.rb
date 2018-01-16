class Api::ForgotPasswordsController < ApplicationController
  def generate_new_password_email
    User.send_reset_password_instructions(user_params)
    render json: {}, status: 200
  end

  def reset
    User.reset_password_by_token(reset_params)
    render json: {}, status: 200
  end

  private

    def user_params
      params.require(:user).permit(:email)
    end

    def reset_params
      params.require(:password).permit(:password, :password_confirmation, :reset_password_token)
    end
end
