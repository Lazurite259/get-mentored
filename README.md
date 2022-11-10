# get-mentored

## Project setup
```
npm install
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
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<br/>

## Connect database  

### Create a `.env` file in `/backend`
```
touch .env
```

### Add MongoDB connection string in `.env` file
```
MONGOBD_URI="mongodb+srv://{username}:{password}@{cluster}.mongodb.net/{dbname}?retryWrites=true&w=majority"
```

### Install `dotenv` package
```
npm install --save dotenv
```

### Initiate `dotenv` in `backend/'index.js`
```
const dotenv = require("dotenv")
dotenv.config()
```


