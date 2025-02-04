export default function HeroSection() {
    return (
      <section className="bg-lightgrey h-[86vh] flex flex-col md:flex-row">
        {/* Left Column (Text) */}
        <div className="relative bg-lightgrey w-full md:w-1/2 h-full px-8 md:px-16 flex flex-col justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Your Catchy Headline
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-200 max-w-xl">
            A compelling description about your services or brand. A longer text that works well
            within the hero section.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg mr-4">
              Get Started
            </button>
            <button className="px-6 py-3 text-lg font-semibold text-white bg-transparent border border-white hover:bg-white hover:text-black rounded-lg">
              Learn More
            </button>
          </div>
        </div>
  
        {/* Right Column (Image) */}
        <div className="relative w-full md:w-1/2 h-full">
          <img 
            src="/hero-students.png"
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover object-right"
          />
        </div>
      </section>
    );
  }
  




