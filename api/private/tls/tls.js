const router = require('express').Router()
const dbModel = require('./tlModel')
const spawn = require("child_process").spawn;

//Gets all Students by TL
router
  .get('/',(req,res)=>{
    return dbModel.findAll(req.user.id)
    .then(p=>{res.status(200).json({message:'Success',students:[...p]})})
    .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
})


router.get("/cp", (req, res) => {
  const shell = "./api/private/tls/shh.sh";
  const child2 = spawn("sh", [shell,"yo"]);
  res.writeHead(200,{
    "Content-Type": "text/event-stream",
    "Cache-control": "no-cache" 
  })
  
  child2.stdout.on('data', data =>{
    console.log(`Number of files ${data}`)
    res.write('data: ' + data + "\n\n")
  })

  child2.stdout.on("error", data => {
    console.log(`Number of files ${data}`);//Was there an error? 
  });

  child2.stdout.on("close", data => {
    res.end()//End the stream on close
  });

});
module.exports=router
