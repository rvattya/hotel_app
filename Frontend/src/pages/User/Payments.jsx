import React, { useState } from "react";

const Payments = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const paymentOptions = [
    {
      category: "UPI",
      options: ["Google Pay", "PhonePe", "PayTM", "Apps & UPI"],
    },
    {
      category: "Cards",
      options: ["Visa", "MasterCard", "RuPay"],
    },
    {
      category: "Netbanking",
      options: ["ICICI", "HDFC", "Axis", "SBI"],
    },
    {
      category: "EMI",
      options: ["Bajaj Finserv", "HDFC EMI"],
    },
    {
      category: "Wallet",
      options: ["PayTM Wallet", "Freecharge"],
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded-lg w-full max-w-lg">
        {/* Header Section */}
        <div className="bg-blue-600 text-white text-lg p-4 flex justify-between items-center rounded-t-lg">
          <div>
            <h1 className="font-semibold">Hotel Booking </h1>
            <span className="text-sm">Razorpay Trusted Business</span>
          </div>
          <div className="bg-blue-800 p-2 rounded-full text-white">
            A
          </div>
        </div>

        {/* Saved Payment Options */}
        <div className="p-4">
          <h2 className="text-gray-700 text-lg mb-4">Saved Payment Methods</h2>
          <div className="space-y-2">
            <button className="w-full text-left bg-gray-100 p-3 rounded-lg flex justify-between items-center hover:bg-gray-200">
              <span>ICICI Credit Card • 8008</span>
              <span>➔</span>
            </button>
            <button className="w-full text-left bg-gray-100 p-3 rounded-lg flex justify-between items-center hover:bg-gray-200">
              <span>Freecharge Wallet</span>
              <span>➔</span>
            </button>
          </div>
        </div>

        {/* All Payment Options */}
        <div className="p-4">
          <h2 className="text-gray-700 text-lg mb-4">All Payment Options</h2>
          {paymentOptions.map((payment, index) => (
            <div key={index} className="mb-4">
              {/* Category Header */}
              <button
                onClick={() =>
                  setSelectedOption(
                    selectedOption === payment.category ? "" : payment.category
                  )
                }
                className="w-full text-left bg-gray-100 p-3 rounded-lg flex justify-between items-center hover:bg-gray-200"
              >
                <span>{payment.category}</span>
                <span>{selectedOption === payment.category ? "▲" : "▼"}</span>
              </button>

              {/* Dropdown Options */}
              {selectedOption === payment.category && (
                <div className="mt-2 space-y-2 pl-4">
                  {payment.options.map((option, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left p-2 bg-gray-50 rounded-lg hover:bg-gray-100"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="p-4 bg-gray-100 flex justify-between items-center rounded-b-lg">
          <span className="text-gray-700 font-semibold text-lg">₹7,000</span>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
