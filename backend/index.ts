import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import affiliateRoutes from './routes/affiliates';
import linkRoutes from './routes/links';
import creativeRoutes from './routes/creatives';
import paymentRoutes from './routes/payments';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Affiliate Management Platform Backend API');
});

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/affiliates', affiliateRoutes);
app.use('/links', linkRoutes);
app.use('/creatives', creativeRoutes);
app.use('/payments', paymentRoutes);

// TODO: Add authentication, user, affiliate, creative, and payment routes

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
}); 