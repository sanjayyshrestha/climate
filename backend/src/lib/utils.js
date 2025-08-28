
import jwt from 'jsonwebtoken'

export const generateToken=(userId,res)=>{
const token=jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'7d'})

res.cookie('token',token,{
  maxAge:7*1000*24*60*60,
  httpOnly:true,//prevent xss attacks cross-site scripting attacks,
  sameSite:"strict",
  secure:process.env.NODE_ENV!="development"
})

return token
}