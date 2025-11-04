export default function Blog() {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ marginTop: '10px', marginBottom: '10px' }}>
      <div 
        className="w-1/2 bg-black border border-[#00ff41]/30"
        style={{
          opacity: 0.2, // 80% transparent (20% opacity)
          minHeight: 'calc(100vh - 20px)', // Full height minus margins
        }}
      >
        {/* Blog content goes here */}
      </div>
    </div>
  );
}

