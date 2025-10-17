export function HeroSection() {
  return (
    // Hero Section with Gradient
    <section
      className="py-20 px-6"
      style={{
        background: "linear-gradient(135deg, #9BC9FF, #4E96EA)",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Download Teaching Resources
        </h1>
        <div className="flex items-center justify-center space-x-2 text-white/90">
          <span>Home</span>
          <span>›</span>
          <span className="font-medium">Teaching Resources</span>
        </div>
      </div>
    </section>
  )
}
