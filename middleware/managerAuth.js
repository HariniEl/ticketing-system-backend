jwt=require('jsonwebtoken')

const userAuth =(request,response,next)=>{
    try{
        const token = request.header("usertoken")
        jwt.verify(token,process.env.SECERET_KEY)
        next();
    }catch(err){
        response.status(401).send({message:err.message})
    }
}

const managerAuth =(request,response,next)=>{
    try{
        const token = request.header("managertoken")
        jwt.verify(token,process.env.SECERET_KEY)
        next();
    }catch(err){
        response.status(401).send({message:err.message})
    }
}
const helperAuth =(request,response,next)=>{
    try{
        const token = request.header("helpertoken")
        jwt.verify(token,process.env.SECERET_KEY)
        next();
    }catch(err){
        response.status(401).send({message:err.message})
    }
}

const adminAuth =(request,response,next)=>{
    try{
        const token = request.header("admintoken")
        jwt.verify(token,process.env.SECERET_KEY)
        next();
    }catch(err){
        response.status(401).send({message:err.message})
    }
}