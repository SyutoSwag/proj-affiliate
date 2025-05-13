import { Router } from 'express';
const router = Router();

// GET /creatives
router.get('/', (req, res) => {
  // TODO: Implement creative listing
  res.json({ message: 'Creatives list endpoint' });
});

// POST /creatives
router.post('/', (req, res) => {
  // TODO: Implement creative upload
  res.json({ message: 'Upload creative endpoint' });
});

export default router; 