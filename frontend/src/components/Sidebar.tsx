import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside style={{ width: 200, background: '#f4f4f4', padding: '1rem', minHeight: '100vh' }}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link href="/dashboard" style={{ textDecoration: 'none', color: '#222' }}>Overview</Link>
        <Link href="/dashboard/links" style={{ textDecoration: 'none', color: '#222' }}>Links</Link>
        <Link href="/dashboard/creatives" style={{ textDecoration: 'none', color: '#222' }}>Creatives</Link>
        <Link href="/dashboard/payments" style={{ textDecoration: 'none', color: '#222' }}>Payments</Link>
        <Link href="/dashboard/profile" style={{ textDecoration: 'none', color: '#222' }}>Profile</Link>
      </nav>
    </aside>
  );
} 