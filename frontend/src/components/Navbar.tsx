import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ background: '#222', color: '#fff', padding: '1rem' }}>
      <Link href="/" style={{ color: '#fff', marginRight: '1rem', textDecoration: 'none' }}>Home</Link>
      <Link href="/register" style={{ color: '#fff', marginRight: '1rem', textDecoration: 'none' }}>Register</Link>
      <Link href="/login" style={{ color: '#fff', marginRight: '1rem', textDecoration: 'none' }}>Login</Link>
      <Link href="/dashboard" style={{ color: '#fff', marginRight: '1rem', textDecoration: 'none' }}>Dashboard</Link>
      <Link href="/admin" style={{ color: '#fff', marginRight: '1rem', textDecoration: 'none' }}>Admin</Link>
    </nav>
  );
} 