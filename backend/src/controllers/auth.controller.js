import bcrypt from 'bcrypt'
import User from '../models/user.model.js'
import { generateToken } from '../lib/utils.js'
import { validatePassword } from '../lib/validate-password.js'

const signup=async (req,res)=>{
  const {userName,email,password}=req.body
  console.log(userName,email,password)
 try {
    //hash password
    if(!userName || !email || !password){
      return res.status(400).json({message:"All fields are required"})
    }

    const result=validatePassword(password)

    if(!result.valid){
      return res.status(400).json({valid:false,message:result.messages})
    }

    const user=await User.findOne({email})
    if(user) return res.status(400).json({message:"Email already exists"})
    const hashedPassword=await bcrypt.hash(password,10);

    const newUser=new User({
      userName,
      email,
      password:hashedPassword
    })
   
    if(newUser){
      await newUser.save()
      generateToken(newUser._id,res)
      res.status(201).json({
        _id:newUser._id,
        fullName:newUser.userName,
        email:newUser.email,
      })
    }else{
      res.status(400).json({message:"Invalid user data"})
    }
 } catch (error) {

  console.log(error.message)
  res.status(500).json({message:"Internal sever error"})
 }
}

const login=async (req,res)=>{
  const{email,password}=req.body;
  console.log(email,password)
  try {
    if(!email || !password){
      return res.status(400).json({message:"All fields are required"})
    }
    const user=await User.findOne({email});

    if(!user) return res.status(400).json({message:"Invalid credential"})

    const isPasswordCorrect=await bcrypt.compare(password,user.password);

    if(!isPasswordCorrect){
      return res.status(400).json({message:"Invalid credential"})
    }
    generateToken(user._id,res)

    res.status(200).json({
      _id:user._id,
        userName:user.userName,
        email:user.email,
    })
    
  } catch (error) {
    console.log(error.message)
  res.status(500).json({message:"Internal sever error"})
  }
}

const logout=(req,res)=>{
 try {
   res.cookie('token','',{maxAge:0})
  res.status(200).json({message:"Logout successfully"})
 } catch (error) {
   console.log(error.message)
  res.status(500).json({message:"Internal sever error"})
 }
}


const checkAuth=(req,res)=>{
  try {
    res.status(200).json(req.user)
  } catch (error) {
     console.log(error.message)
  res.status(401).json({message:"Unauthorized"})
  }
}

export {
  signup,
  login,
  logout,
  checkAuth
}