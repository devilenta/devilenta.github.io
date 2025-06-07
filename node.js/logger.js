function Log (res,req,next ){

    console.log("logging...");
    next()
    
}

module.exports = Log