import Link from 'next/link';

export default function ManagerDashboard() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🛠️ Store Manager</h1>
      <p>Welcome! Select an area to manage your platform:</p>
      
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
        <Link 
          href="/manager/products" 
          style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', textDecoration: 'none', color: 'inherit', width: '250px' }}
        >
          📦 <strong>Manage Products & FAQs</strong>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Add digital products, prices, and FAQs.</p>
        </Link>

        <Link 
          href="/manager/payments" 
          style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', textDecoration: 'none', color: 'inherit', width: '250px' }}
        >
          💳 <strong>Verify Payments</strong>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Review customer Transaction IDs and send download links.</p>
        </Link>
      </div>
    </div>
  );
}
