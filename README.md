# Social Media API Backend
This is a backend framework for providing data from a social media platform. You can manage users and their relationships as well as their posts or "thoughts." Rating information can also be obtained with reactions embedded in the users posts.

## Details:
This was built in JavaScript using MongoDB and Mongoose to sort and manage user and post data. Express was used to create a server and listen for requests. There are user models which contain posts, as well as post models that contain post information and reaction data.

## Endpoints:
### User
`/api/user` - GET, POST, Create a new user or get a list of all users

`/api/user/:userID` - GET, PUT, DELETE, Get update, or delete a specific user

`/api/user/:userID/friends` - POST, Add a new friend to this users friend list

`/api/user/:userID/friends/:friendID` - DELETE, Remove a friend from this users friend list

### Thought
`/api/thought` - GET, POST, Get all posts or create a new post

`/api/thought/:thoughtID` - GET, PUT, DELETE, Get, update, or delete a specific user

`/api/thought/:thoughtID/reactions` - POST, Create a reaction to be added to this post

`/api/thought/:thoughtID/reactions/:readctionID` - DELETE, Delete a reaction
