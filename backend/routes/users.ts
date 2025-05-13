import { Router } from 'express';
const router = Router();

// GET /users
router.get('/', (req, res) => {
  // TODO: Implement user listing (admin only)
  res.json({ message: 'User list endpoint' });
});

export default router; 