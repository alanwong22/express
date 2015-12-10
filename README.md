## Requirements: 
- [Node.JS](http://nodejs.org)
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)

### Packages:
- Express: Small, robust tooling for HTTP servers
- Body-parser: Node.js body parsing middleware.
- Nodemon: Watches for code changes without having to manually restart the server.


### Install:
MongoDB:
	$ brew update
	$ brew install mongodb
	$ mkdir -p /data/db
	
	(Update permissions)
	$ sudo chown -R [current user] /data/db

	Setting db
	$ mongo
		MongoDB shell version: 2.6.7
		connecting to: test
	> use [db name]
		switched to db [db name]
	> db
		[db name]
	> show dbs
		admin               (empty)
		local               0.078GB
		nodews4             0.078GB
		[db name]        0.078GB
	>

<b>To have launchd start mongodb at login:</b>
  $ ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
<b>Then to load mongodb now:</b>
  $ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
<b>Or, if you don't want/need launchctl, you can just run:</b>
  $ mongod --config /usr/local/etc/mongod.conf

## Start Up Sequence
- MongoDB: $ mongod
- Node: $ nodemon
