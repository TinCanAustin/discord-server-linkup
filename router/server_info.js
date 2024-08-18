const express = require("express");
const router = express.Router();

serverInfo = {}

router
.route("/:serverID")
.post((req, res)=>{
    const serverID = req.params.serverID;
    const { channelID } = req.body;
    if(channelID !== undefined && channelID !== null){
        if(serverID in serverInfo){
            res.status(400).json({error: true, response: "Server info exsists"});
        }else{
            serverInfo[serverID.toString()] = req.body;
            res.status(201).json({error: false, response: "Server info set"});
        }
    }else{
        res.status(400).json({error: true, response: "Please enter channel "});
    }
})
.get((req, res)=>{
    const serverID = req.params.serverID;
    if(serverID.toString() in serverInfo){
        let info = serverInfo[serverID.toString()]
        res.status(200).json({error: false, response: info});
    }else{
        res.status(404).json({error: true, response: "Server not set"});
    }
});

module.exports = router;