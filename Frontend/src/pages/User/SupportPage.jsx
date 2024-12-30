import React from "react";

const SupportPage = () => {
  const supportArticles = [
    "customized role",
    "employment letter",
    "payment method",
  ];

  const topics = [
    {
      title: "Using Our Service",
      description:
        "Learn how to use our platform for hotel bookings and manage your reservations easily.",
      icon: "🏨",
    },
    {
      title: "Pricing & Payments",
      description:
        "Understand pricing, payment methods, and how to manage your invoices.",
      icon: "💳",
    },
    {
      title: "Customer Support",
      description:
        "Get help with issues related to bookings, cancellations, and refunds.",
      icon: "🛎️",
    },
    {
      title: "Global Assistance",
      description:
        "We provide global support for our customers to ensure smooth experiences.",
      icon: "🌍",
    },
    {
      title: "User Profiles",
      description:
        "Manage your account, preferences, and contact details easily.",
      icon: "👤",
    },
    {
      title: "FAQs",
      description: "Find answers to the most frequently asked questions.",
      icon: "❓",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen text-white">
      {/* Header Section */}
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl text-cyan-700 font-bold">Hi, how can we help?</h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search using keywords..."
            className="w-full md:w-1/2 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="mt-4">
          <p className="text-sm text-black">
            Explore support articles:
            {supportArticles.map((article, index) => (
              <span
                key={index}
                className="ml-2 text-purple-800 underline cursor-pointer hover:text-purple-300"
              >
                {article}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg"
          >
            <div className="text-4xl mb-4">{topic.icon}</div>
            <h3 className="font-semibold text-lg">{topic.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{topic.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="container mx-auto text-center mt-10 p-6">
        <p className="text-sm text-purple-800">
          Some key articles are locked for signed-in users. To access all
          articles available, please{" "}
          <span className="underline cursor-pointer hover:text-purple-800">
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SupportPage;
