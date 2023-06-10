## Install packages -
npm install

## Run Server (after running migrations and seeders below) -
npm run dev

## Migrations -

#### Create a migration skeleton -
npx sequelize-cli migration:generate --name create-random

#### Migrate -
npx sequelize-cli db:migrate

#### Undo last migration -
npx sequelize-cli db:migrate:undo
#### Undo all -
npx sequelize-cli db:migrate:undo:all

#### Undo to a specific version -
npx sequelize-cli db:migrate:undo:all --to 20230122034349-create-users
npx sequelize-cli db:migrate:undo:all --to 20230122034401-create-devices
npx sequelize-cli db:migrate:undo:all --to 20230201154707-create-streams



## Seeding -

#### Create Seeder -
npx sequelize-cli seed:generate --name create-random

#### Running Seeds -
npx sequelize-cli db:seed:all

#### Undoing Seeds -
npx sequelize-cli db:seed:undo

#### Undo specific Seed -
npx sequelize-cli db:seed --seed 20230123033901-create-users
npx sequelize-cli db:seed --seed 20230123034233-create-devices
npx sequelize-cli db:seed --seed 20230201155254-create-streams

#### Undo all seeds -
npx sequelize-cli db:seed:undo:all


## Testing -

#### Run all tests
npm run test

#### Run one test file
npx mocha --exit .\test\01-auth.js

npx mocha --exit --timeout 1000 .\test\01-auth-test.js
npx mocha --exit --timeout 1000 .\test\02-streams-test.js
npx mocha --exit --timeout 1000 .\test\02-streams-test.js -g 'get all streams'
npx mocha --exit --timeout 1000 .\test\02-streams-test.js -g 'create new stream'
npx mocha --exit --timeout 1000 .\test\02-streams-test.js -g 'update existing stream'

npx mocha --exit --timeout 1000 .\test\03-document-types-test.js -g 'get all document-types'

npx mocha --exit --timeout 1000 .\test\04-course-types-test -g 'update existing course type'
npx mocha --exit --timeout 1000 .\test\04-course-types-test -g 'create new course type - invalid contributions'

npx mocha --exit --timeout 1000 .\test\05-courses-test -g 'get all courses'
npx mocha --exit --timeout 1000 .\test\05-courses-test -g 'create new course'
npx mocha --exit --timeout 1000 .\test\05-courses-test -g 'update existing course'
npx mocha --exit --timeout 1000 .\test\05-courses-test -g 'delete existing course'

npx mocha --exit --timeout 1000 .\test\06-institutes-test -g 'get all institutes'
npx mocha --exit --timeout 1000 .\test\06-institutes-test -g 'create new institute'
npx mocha --exit --timeout 1000 .\test\06-institutes-test -g 'update existing institute'
npx mocha --exit --timeout 1000 .\test\06-institutes-test -g 'delete existing institute'

npx mocha --exit --timeout 1000 .\test\07-languages-test -g 'get all languages'
npx mocha --exit --timeout 1000 .\test\07-languages-test -g 'create new language'
npx mocha --exit --timeout 1000 .\test\07-languages-test -g 'update existing language'
npx mocha --exit --timeout 1000 .\test\07-languages-test -g 'delete existing language'

npx mocha --exit --timeout 1000 .\test\08-donors-test -g 'get all donors'
npx mocha --exit --timeout 1000 .\test\08-donors-test -g 'create new donor'
npx mocha --exit --timeout 1000 .\test\08-donors-test -g 'update existing donor'
npx mocha --exit --timeout 1000 .\test\08-donors-test -g 'delete existing donor'


npx mocha --exit --timeout 1000 .\test\09-schools-test -g 'get all schools'
npx mocha --exit --timeout 1000 .\test\09-schools-test -g 'create new school'
npx mocha --exit --timeout 1000 .\test\09-schools-test -g 'update existing school'
npx mocha --exit --timeout 1000 .\test\09-schools-test -g 'delete existing school'


