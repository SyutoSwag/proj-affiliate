import { Router } from 'express';
const router = Router();

// GET /payments
router.get('/', (req, res) => {
  // TODO: Implement payment listing
  res.json({ message: 'Payments list endpoint' });
});

// POST /payments
router.post('/', (req, res) => {
  // TODO: Implement payment creation (admin)
  res.json({ message: 'Create payment endpoint' });
});

export default router; 