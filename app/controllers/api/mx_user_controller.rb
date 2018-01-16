class Api::MxUserController < ApplicationController
  def index
    @mx = MxClient.institutions
    render json: @mx
  end

  def create_mx_user
    @userguid = MxClient.mx_user(params[:id])
    @user = User.update(params[:id], mx_guid: @userguid.guid, first_name: params[:first_name], last_name: params[:last_name]) 
    render json: @user
  end

  def institution_cred
    render json: MxClient.credentials(params[:institution_code])
  end

  def member_maker
    @mx_guid = params[:user_mx_guid]
    @institution_code = params[:institution_code]
    @credentials = [{guid: params[:user_credential_guid], value: params[:username]},{guid: params[:password_credential_guid], value: params[:password]}]
    render json: MxClient.create_member(@mx_guid, @institution_code, @credentials)
  end

  def accounts
    render json: MxClient.accounts(params[:user_guid])
  end

  def account_summary
    @mx_guid = params[:user_guid]
    @account_guid = params[:account_guid]
    @from_date = params[:from_date]
    @to_date = params[:to_date]
    accounts = MxClient.account_transactions(@mx_guid, @account_guid, @from_date, @to_date)
    render json: accounts
  end
  
  def cash_flow
    @user_guid = params[:user_guid]
    @from_date = params[:from_date]
    @to_date = params[:to_date]
    @transactions = MxClient.transactions(@user_guid,@from_date,@to_date)
    @expense_categories = {};
    @income_categories = {};
    @transactions.each{ |transaction|
      @category = transaction[:category]
      @amount = transaction[:amount]
      @trans_array = [transaction[:is_expense], transaction[:is_income]]
      @transaction_type = transaction[:is_expense] ? "expense" : "income"
      if @transaction_type === "expense"
        if @expense_categories.has_key?(@category)
          
          @expense_categories[@category] += @amount
        else
          @expense_categories[@category] = @amount
        end
      else
        if @income_categories.has_key?(@category)
          
          @income_categories[@category] += @amount
        else
          @income_categories[@category] = @amount
        end
      end
    }
    render json: {"income":@income_categories, "expense":@expense_categories}
  end
end
