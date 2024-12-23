import React, { useState } from 'react'
import '../../Css/Admindash.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, ArcElement, Legend } from 'chart.js'


// Register Chart.js components
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const Admindashboard = () => {
  console.log("inside deshboard");
  
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales Data',
        data: [100, 200, 150, 300, 250],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monthly Sales Chart' },
    },
  };

  // chart 2 data
  // Chart data
  const data2 = {
    labels: ["Red", "Blue", "Yellow"], // Labels for chart
    datasets: [
      {
        label: "Data",
        data: [50, 25, 25], // Percentage or values for each section
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Colors
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Chart options
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Positions the legend at the top
      },
    },
  };


  return (
    <>
      <div className=" flex admin-dashboard w-[100%]">


        
        <div className=" admin-main-dashboard m-4 w-[100%]">
          {/* <div className="admin-header"> <Adminheader /> </div> */}

          <div className="bg-gray-100  p-6 w-[100%] h-[100vh]">
            {/* Card Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Card 1 */}
              <div className="bg-red-500 text-white rounded-lg shadow-md p-4 flex flex-col items-center">
                <h2 className="text-2xl font-bold">60.5k</h2>
                <p className="text-2xl">Available Hotels</p>
                <div className="mt-2 text-3xl">👁️</div>
              </div>

              {/* Card 2 */}
              <div className="bg-emerald-900 text-white rounded-lg shadow-md p-4 flex flex-col items-center">
                <h2 className="text-2xl font-bold">150</h2>
                <p className="text-2xl">Available Rooms</p>
                <div className="mt-2 text-3xl">👍</div>
              </div>

              {/* Card 3 */}
              <div className="bg-blue-900 text-white rounded-lg shadow-md p-4 flex flex-col items-center">
                <h2 className="text-2xl font-bold">320</h2>
                <p className="text-2xl">Booked Rooms</p>
                <div className="mt-2 text-3xl">💬</div>
              </div>

              {/* Card 4 */}
              <div className="bg-purple-500 text-white rounded-lg shadow-md p-4 flex flex-col items-center">
                <h2 className="text-2xl font-bold">70</h2>
                <p className="text-2xl">Total Sales</p>
                <div className="mt-2 text-3xl">📚</div>
              </div>
            </div>


            <div className="admin-chart flex gap-[10px] ">
              <div style={{ width: '400px', margin: 'auto' }} className=''>
                <h2 className="text-center mb-4 font-bold">Sales Updates</h2>
                {/* Bar Chart */}
                <Bar data={data} options={options} />
              </div>
              <div className="w-[300px] mx-auto">
                <h2 className="text-center mb-4 font-bold">User Updates</h2>
                <Doughnut data={data2} options={options2} />
              </div>

            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Admindashboard