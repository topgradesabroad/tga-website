export default function TestimonialSection() {
  return (
    <>
      <div className="relative -mt-24 h-24 bg-gradient-to-t from-lightgrey via-lightgrey/80 to-transparent hidden md:block" />
      <section className="w-full bg-lightgrey py-16 md:mt-0 mt-[-1px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-800 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-600">Student, USA</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-800 mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="font-semibold">Jane Smith</p>
                  <p className="text-sm text-gray-600">Student, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}