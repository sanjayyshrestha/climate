import {create} from 'zustand'
import { axiosInstance } from '../lib/axios'
import { toast } from 'react-toastify'

export const useAuthStore=create((set,get)=>({
authUser:null,
isSigningUp:false,
isLoggingIn:false,
isCheckingAuth:true,
checkAuth : async()=>{
  try {
    const res=await axiosInstance.get('/auth/check')
    set({authUser:res.data})
  } catch (error) {
    console.log(!get().authUser)
    console.log(error.response.data.message)
    console.log('Error in checkAuth : ',error)
    set({authUser:null})
  }finally{
    set({isCheckingAuth:false})
  }
},

signup : async (data)=>{
  set({isSigningUp:true})
  try {
    const res=await axiosInstance.post('/auth/signup',data);
    set({authUser:res.data})
    toast.success("Account create successfully")
  } catch (error) {
    console.log(error.response.data.message)
    toast.error(error.response.data.message[0])
  }finally{
    set({isSigningUp:false})
  }
},

login : async (data)=>{
  set({isLoggingIn:true})
  try {
   const res= await axiosInstance.post('/auth/login',data)
   set({authUser:res.data})
   toast.success('Login successfull')
  } catch (error) {
    toast.error(error.response.data.message)
  }finally{
    set({isLoggingIn:false})
  }
},

logout: async ()=>{
  try {
    await axiosInstance.post('/auth/logout')
    set({authUser:null})
  } catch (error) {
    toast.error(error.response.data.message)
  }
},


}))