export default function Loading() {
  return (
    <div className="container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="loader-container" style={{ textAlign: 'center' }}>
        <div 
          style={{ 
            width: '40px', 
            height: '40px', 
            border: '3px solid var(--border)', 
            borderTopColor: 'var(--accent)', 
            borderRadius: '50%', 
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem'
          }} 
        />
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
          Optimizing Experience...
        </p>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}} />
      </div>
    </div>
  );
}
