import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getPublicProfile, getSuggestedConnections, updateProfile } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/suggestions', protectRoute, getSuggestedConnections);
router.get('/:name', protectRoute, getPublicProfile);
router.put('/profile', protectRoute, updateProfile);

export default router;