export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>IP Grabber</h1>
      <a
        href="/api/youtube"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '18px',
        }}
      >
        Click here to grab IP and go to YouTube
      </a>
    </div>
  );
}
