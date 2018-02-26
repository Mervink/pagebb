/**
 * @author Leon Mwandiringa    
 * @uses bundle app and run
 * @return mixed exported handle
 */
const app = require("./Bootstrap/app.js");
const port = 4000;

//run the app 
app.listen(port, (err)=>{

        if(err){
            console.log(`an error happened soo sorry bro. it will resolve itself on its own on ${err}`);
        }

        console.log("running right now bro..");
});