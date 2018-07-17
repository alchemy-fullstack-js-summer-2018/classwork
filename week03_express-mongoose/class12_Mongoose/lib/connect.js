/* eslint no-console: "off" */
const mongoose = require('mongoose');

module.exports = function(dbUri) {
    
    mongoose.connect(dbUri, { useNewUrlParser: true });
    
    // CONNECTION EVENTS
    
    // Success
    mongoose.connection.on('connected',  () => {  
        console.log('Mongoose default connection open to ' + dbUri);
    });
    
    // Error
    mongoose.connection.on('error', (err) => {  
        console.log('Mongoose default connection error: ' + err);
    }); 
    
    // Connection disconnected
    mongoose.connection.on('disconnected', () => {  
        console.log('Mongoose default connection disconnected'); 
    });
    
    // If the Node process ends, close the Mongoose connection 
    process.on('SIGINT', () => {  
        mongoose.connection.close(() => { 
            console.log('Mongoose default connection disconnected through app termination'); 
            process.exit(0); 
        }); 
    });
};