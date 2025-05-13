import { Router } from 'express';
const router = Router();

// GET /links
router.get('/', (req, res) => {
  // TODO: Implement link listing
  res.json({ message: 'Links list endpoint' });
});

// POST /links
router.post('/', (req, res) => {
  // TODO: Implement link creation
  res.json({ message: 'Create link endpoint' });
});

export default router; 