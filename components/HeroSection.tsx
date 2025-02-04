export default function HeroSection() {
  return (
    <section className="bg-lightgrey h-[90vh] flex flex-col md:flex-row">
      {/* Left Column (Text) */}
      <div className="relative w-full md:w-1/2 h-full px-8 md:px-16 flex flex-col justify-center bg-lightgrey">
        <h1 className="text-4xl pt-12 md:text-[42px] font-semibold font-sans text-black leading-[1]">
          Over 90%+ of our students secured admission in their dream universities
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-[16px] text-justify text-gray-800 max-w-xl">
        From selecting the right programs and crafting strong applications to test preparation and visa support, we offer end-to-end assistance tailored to each student's goals, ensuring a smooth and successful study abroad journey.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 text-md font-normal text-white bg-black hover:bg-transparent border hover:text-black border-black
           rounded-lg mr-4">
            Book Free Consultation
          </button>
          <button className="px-12 py-3 text-md font-normal text-black border border-black bg-transparent hover:bg-black hover:text-white rounded-lg mr-4">
            WhatsApp
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





