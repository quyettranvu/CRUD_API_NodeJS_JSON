import express from 'express';
import fs from 'fs';
import accountRoutes from './account.js';


const router=express.Router();
router.use(accountRoutes);

export default router;