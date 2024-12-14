require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes');
require('./connections');
const taskmanagerServer = express();
taskmanagerServer.use(cors());
taskmanagerServer.use(express.json());
taskmanagerServer.use(router);
PORT = 4000 || process.env.PORT;
taskmanagerServer.listen(PORT,()=>{
    console.log(`Task manager App server running successfully at port number: ${PORT}`);  
})