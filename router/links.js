const express = require("express");
const router = express.Router();

const processRequest = new Map();

router
.route("/:id")
.post((req, res)=>{
    const id = req.params.id;
    const { message } = req.body;

    if(message !== undefined && message !== null){
        processRequest.set(id, req.body);
        console.log(`Message stored for ID: ${id}`);
        res.status(201).json({error: false, response: "Message sent"});
    }else{
        res.status(400).json({error: true, response: "Please enter message"});
    }
})
.get((req, res)=>{
    const id = req.params.id;

    if(processRequest.has(id)){
        let message = processRequest.get(id);
        processRequest.delete(id);
        console.log(`Message for ID: ${id} retrieved and cleared`);
        res.status(200).json({error: false, response: message});
    }else{
        res.status(404).json({error: true, response: "No message found"});
    }
});

module.exports = router;