# Bridge MongooseDB and Express Server

This directory contains one express server:

* Server.js + App.js - Encapsulated Node/Express web server withh Mongo Access

## Important Files

* Server.ts - based HTTP server
* App.ts - Express server
* DbClient.ts - MongoDB client
* createDB/bridgeData.js - DB population file
* model/* - Mongoose model schema definitions

## Execute MongoDB and Express Server

Make sure you install the node.js server and Mongo DB sofware from the side.  Ensure your path variable contains the execution path of the node.js and mongo binary.

Run the following commands in this directory to execute the server db and then the node server:

1. Create the db file directory

    Windows: ```md db```

    Mac: ```mkdir db```

2. Start the DB server on port 3000

    Windows: ```start.toDoSample.cmd```

    Mac: ```mongod -port 3000 -dbpath ./db```

3. Open a new terminal (in this directory) and run Mongo shell

   ```mongo --port 3000 --authenticationDatabase admin```

4. Populate the DB server with sample data in Mongo shell

    ``` bash
    load ('createDB/bridgeData.js');
    load ('createDB/createAdminUser.js');
    exit
    ```

5. Install npm packages (if you haven't completed this step before)

    ```npm install```

6. Compile Node/Express Server. You may need to go to all subdirectories and compile the ts files.

   ```tsc AppServer.ts```

7. Execute Node/Express server on port 8080

    ```node AppServer.js```

## Testing

To test server, try the following URLs on the browser while the server is running:

* <http://localhost:8080/>
* <http://localhost:8080/users>
#BridgeChat
#BridgeChat
