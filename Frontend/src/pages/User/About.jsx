import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className=" text-blue-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl">
            Your trusted partner for seamless hotel and room bookings.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* About the Platform */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 text-lg">
              At <strong>Book Hotel Room</strong>, we specialize in offering an
              easy and convenient way to book your ideal stay. Whether you're
              traveling for leisure or business, we provide you with access to
              thousands of hotels, ensuring comfort, luxury, and affordability.
            </p>
            <p className="text-gray-600 text-lg mt-4">
              Our platform brings together the best deals, user-friendly search
              options, and detailed property information to ensure that you
              have a seamless booking experience. We also value transparency,
              offering customer reviews and ratings to help you make an informed
              decision.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://www.gingerhotels.com/resourcefiles/hotelprofile/udaipur-0.jpg?version=12132024054545"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg">
            To simplify travel experiences by connecting travelers with
            high-quality accommodations at unbeatable prices.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75a3 3 0 015.5 0M15 10.5V12m0 0v6.75M9 12V10.5m0 0V9a3 3 0 013-3m-3 6.75v6.75"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">
                Wide Selection
              </h3>
              <p className="text-gray-600 mt-2">
                Explore thousands of hotels and rooms across destinations
                worldwide.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75c.156.444.417.845.77 1.17M12 21.75a7.5 7.5 0 01-6.138-3.334m0 0A7.463 7.463 0 0112 4.5m0 0a7.5 7.5 0 016.138 3.334m0 0A7.463 7.463 0 0112 21.75m0-17.25v.014c0 .007.012.021.026.04M3 3l18 18"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">
                Affordable Pricing
              </h3>
              <p className="text-gray-600 mt-2">
                Get the best value for your money with our competitive rates.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 6.75v10.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V6.75M3.375 9h17.25"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">
                Secure Payments
              </h3>
              <p className="text-gray-600 mt-2">
                Enjoy peace of mind with our safe and secure payment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Journey With Us Today
          </h2>
          <p className="text-lg mb-6">
            Explore endless possibilities and make your stay unforgettable.
          </p>
          <a
            href="/hotels"
            className="px-6 py-3 bg-white text-blue-900 font-bold rounded-full shadow-lg hover:bg-gray-200"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
