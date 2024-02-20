dotenv=require("dotenv"),
express=require('express'),
cors=require('cors'),
nodemailer=require('nodemailer'),
bcrypt=require('bcrypt'),
jwt=require('jsonwebtoken'),
generator =require('generate-password'),
adminRouter=require('./routes/admin.route.js'),
userRouter=require('./routes/users.route.js'),
managerRouter=require('./routes/manager.route.js'),
helperRouter=require('./routes/helper.route.js'),
allcommand=require('./routes/allcommand.route.js'),
mainsigin=require('./routes/mainsignin.route.js')

const app = express()

const PORT = process.env.PORT ||3000


app.use(cors())
app.use(express.json())


var transporter = nodemailer.createTransport({
    service: 'gmail' ,
    auth: {
      user: 'zenclass1234@gmail.com',
      pass: process.env.EMAIL_PASSWORD
    }
  });
  
 


async function genHashesPassword (password){
  const NO_OF_ROUNDS = 10
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS)
  const hashPassword = await bcrypt.hash(password,salt)

  return hashPassword
}


app.use('/main',mainsigin)
app.use('/all',allcommand)
app.use('/admin',adminRouter)
app.use('/user',userRouter)
app.use('/management',managerRouter)
app.use('/helpdesk',helperRouter)



app.listen(PORT)

