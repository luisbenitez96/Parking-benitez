# parking-manager
A parking management system


### Firebase Configuration

-Remember when you are going to create the firebase project , you have
to active hosting, database, function store, and the authentication with 
email and password, Good Luck Cowboy 🤠

- You have to set up the project with your own firebase variables,
the file is `src/firebase/config.js`

### Tips

You are using a NoSql database , for that if you want to track the user information,
you have to start to create collection for each user like a three, for example:

`user -> benitez -> parking -> vehicles`

It will create a cascade object and you  will know what own each user