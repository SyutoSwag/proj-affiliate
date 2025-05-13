import { Router } from 'express';
const router = Router();

// GET /affiliates
router.get('/', (req, res) => {
  // TODO: Implement affiliate listing
  res.json({ message: 'Affiliate list endpoint' });
});

// GET /affiliates/:id
router.get('/:id', (req, res) => {
  // TODO: Implement affiliate detail
  res.json({ message: `Affiliate detail for ${req.params.id}` });
});

export default router; 