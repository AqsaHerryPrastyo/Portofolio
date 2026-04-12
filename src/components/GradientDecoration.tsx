export function GradientDecoration() {
  return (
    <>
      {/* Top Purple Gradient Blur */}
      <div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(139, 92, 246, 0.3) 40%, transparent 70%)'
        }}
      />
      
      {/* Right Purple Gradient Blur */}
      <div 
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-25 blur-[100px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)'
        }}
      />
      
      {/* Bottom Left Blue-Purple Gradient */}
      <div 
        className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full opacity-20 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(139, 92, 246, 0.3) 50%, transparent 70%)'
        }}
      />

      {/* Center Accent Purple */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-15 blur-[90px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(139, 92, 246, 0.2) 60%, transparent 80%)'
        }}
      />
    </>
  );
}
