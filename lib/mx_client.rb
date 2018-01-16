class MxClient 
  def self.mx_user(id)
    @user = {
        "identifier": id,
        "is_disabled": nil, 
        "metadata": "{}" }
    ::Atrium::User.create(@user)
  end

  def self.institutions
    ::Atrium::Institution.list
  end

  def self.credentials(code)
    ::Atrium::Institution.credentials(code)
  end

  def self.create_member(user_mx_guid, institution, credentials)
    @member_aggregatior = 
      {"user_guid": user_mx_guid,
       "institution_code": institution,
       "credentials": credentials}
    ::Atrium::Member.create(@member_aggregatior)
  end

  def self.accounts(user_mx_guid)
    @user = {"user_guid": user_mx_guid}
    ::Atrium::Account.list(@user)
  end

  def self.account_transactions(user_mx_guid, account_guid, from_date, to_date)
    @account_trans_call ={
      "user_guid": user_mx_guid,
      "account_guid":account_guid,
      
      }
    @dates = {
      "from_date": from_date,
      "to_date": to_date,
    }
    puts(account_guid)
    @account = ::Atrium::Account.read(@account_trans_call)
    account_info = { account: @account, transactions: @account.transactions }
  end
  
  def self.transactions(user_mx_guid, from_date, to_date)
    @options = {
      "user_guid": user_mx_guid,
      "from_date": from_date,
      "to_date": to_date,
    }
    ::Atrium::Transaction.list(@options)
  end
end
