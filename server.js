const express = require(`express`)
const port=3001
const app = express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.post('/',(req,res)=>{
    try{
        const{Username,Email,Password,DateofBirth}=req.boby
    if(!Username)
        return res.status(400).json({message:"Username cannot be empty"})
    if(!Email)
        return res.status(400).json({message:"Email cannot be empty"})
    const len =Password.length
    if(len<8 || len>16)
        return res.status(400).json({message:"Password length should be greater than 8 or less than or equal to 16"})
    res.status(400).json({message:"success"})
}
catch(e){
console.log(e.message)
}

})
app.listen(port,()=>{
    console.log("listening to port")
})