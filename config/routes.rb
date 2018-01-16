Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    post '/forgot_password/send', to: 'forgot_passwords#generate_new_password_email'
    post '/forgot_password/reset', to: 'forgot_passwords#reset'
    resources :mx_user
    post '/create_mx_user', to: 'mx_user#create_mx_user'
    post '/member_maker', to: 'mx_user#member_maker'
    get '/institution_cred', to: 'mx_user#institution_cred'
    get '/accounts', to: 'mx_user#accounts'
    get '/account_summary', to: 'mx_user#account_summary'
    get '/cash_flow', to: 'mx_user#cash_flow'
  end

  get '*other', to: 'static#index'
end
