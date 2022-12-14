# get-mentored

# Frontend

## Project setup
```
npm install
```

### Set environment variables

Create `.env` file 
```
touch .env
```

Add server uri
```
VUE_APP_BASE_URI = 'http://localhost:3000'
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
npm run standard
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


<br/>

# Backend

## Project setup
```
cd backend
npm install
```

## Connect database  

#### Create a `.env` file
```
touch .env
```

#### Add MongoDB connection string to `.env` file
```
MONGOBD_URI='mongodb+srv://{username}:{password}@{cluster}.mongodb.net/{dbname}?retryWrites=true&w=majority'
```

#### Install `dotenv` package
```
npm install --save dotenv
```

#### Initiate `dotenv` in `backend/index.js`
```
const dotenv = require("dotenv")
dotenv.config()
```

### Connect to Database
#### Make sure you installed mongo shell and nodemon, then use the following instruction to connect to the database.

`Install Mongo Shell if you haven't by following the link:`
https://www.mongodb.com/docs/v4.4/tutorial/install-mongodb-on-os-x/

`Install nodemon if you haven't by following the link:`
https://thinkster.io/tutorials/node-json-api/initializing-a-starter-node-project

Start
```
cd backend
brew services start mongodb-community@4.4
nodemon     
```
Stop
```
brew services stop mongodb-community@4.4
```
## Setup SMTP Server  

### Add following string to `backend/.env` file
```
SMTP_HOST = 'smtp.offic365.com'
SMTP_PORT = '587'
SMTP_EMAIL = {Outlook Account}
SMTP_PASSWORD = {Outlook Password}
```
Resource: https://nodemailer.com/about/

Set account authentication: https://stackoverflow.com/questions/64166563/send-email-using-microsoft-365-email-server-in-nodejs
