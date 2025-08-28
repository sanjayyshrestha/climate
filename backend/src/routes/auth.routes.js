import express from 'express'

import { protectRoute } from '../middleware/user.auth.js'

const router=express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)
router.get('/check',protectRoute,checkAuth);

export default router