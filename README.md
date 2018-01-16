## Bank Assist

## SERVER SETUP
1. bundle install
1. bundle exec rake db:create db:migrate
1. bundle exec rails s -p 3001

## CLIENT SETUP
1. cd client
1. yarn
1. yarn start

## Updating Master

 - git add .
 - git commit -m “ADD MESSAGE ABOUT UPDATE AND ADD TICKET NUMBER” 


## Updating code base and starting new work and changes

 - git fetch origin master
 - git rebase origin/master
 - git checkout -b YOUR_BRANCH_NAME origin/master


