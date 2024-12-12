// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";

// export default function Github() {
//   const [data, setData] = useState([]);
//   const [contributions, setContributions] = useState([]);
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     // Fetch GitHub user data
//     fetch("https://api.github.com/users/sunilrathod098")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });

//     // Fetch events and calculate contributions
//     fetch("https://api.github.com/users/sunilrathod098/events/public")
//       .then((res) => res.json())
//       .then((events) => {
//         const contributionCounts = {
//           PushEvent: 0,
//           PullRequestEvent: 0,
//           IssuesEvent: 0,
//         };

//         events.forEach((event) => {
//           if (event.type in contributionCounts) {
//             contributionCounts[event.type] += 1;
//           }
//         });

//         const totalContributions = Object.values(contributionCounts).reduce(
//           (acc, val) => acc + val,
//           0
//         );
//         setContributions(totalContributions);

//         // Prepare data for the chart
//         setChartData({
//           labels: ["Push Events", "Pull Requests", "Issues"],
//           datasets: [
//             {
//               label: "Contributions",
//               data: Object.values(contributionCounts),
//               backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
//               borderWidth: 1,
//             },
//           ],
//         });
//       });
//   }, []);

//   if (!data || contributions === null || !chartData) {
//     return (
//       <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center bg-gray-600 text-white p-6">
//       {/* Avatar and Name Section */}
//       <div className="flex items-center justify-center mb-6">
//         {/* Avatar */}
//         <img
//           src={data.avatar_url}
//           alt={data.name}
//           className="rounded-full w-40 h-40 mr-8"
//         />
//         <div className="text-center">
//           <h2 className="text-3xl mb-2">{data.name}</h2>
//           <p>
//             <a
//               href={`https://github.com/${data.login}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-orange-500 text-lg flex-auto m-5"
//             >
//               @{data.login}
//             </a>
//           </p>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="flex justify-around w-full mb-4">
//         <div className="text-center">
//           <p className="text-lg">Followers</p>
//           <p className="text-4xl">{data.followers}</p>
//         </div>
//         <div className="text-center">
//           <p className="text-lg">Following</p>
//           <p className="text-4xl">{data.following}</p>
//         </div>
//         <div className="text-center">
//           <p className="text-lg">Repos</p>
//           <p className="text-4xl">{data.public_repos}</p>
//         </div>
//         <div className="text-center">
//           <p className="text-lg">Contributions</p>
//           <p className="text-4xl">{contributions}</p>
//         </div>
//       </div>

//       {/* Contributions Graph */}
//       <div className="w-full max-w-2xl mt-6">
//         <h3 className="text-center text-2xl mb-4">Contribution Breakdown</h3>
//         <Bar
//           data={chartData}
//           options={{
//             responsive: true,
//             plugins: {
//               legend: {
//                 position: "top",
//               },
//             },
//           }}
//         />
//       </div>
//     </div>
//   );
// }




import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Github() {
  const [data, setData] = useState([]);
  const [contributions, setContributions] = useState([]);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch GitHub user data
    fetch("https://api.github.com/users/sunilrathod098")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });

    // Fetch events and calculate contributions
    fetch("https://api.github.com/users/sunilrathod098/events/public")
      .then((res) => res.json())
      .then((events) => {
        const contributionCounts = {
          PushEvent: 0,
          PullRequestEvent: 0,
          IssuesEvent: 0,
        };

        events.forEach((event) => {
          if (event.type in contributionCounts) {
            contributionCounts[event.type] += 1;
          }
        });

        const totalContributions = Object.values(contributionCounts).reduce(
          (acc, val) => acc + val,
          0
        );
        setContributions(totalContributions);

        // Prepare data for the chart
        setChartData({
          labels: ["Push Events", "Pull Requests", "Issues"],
          datasets: [
            {
              label: "Contributions",
              data: Object.values(contributionCounts),
              backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
              borderWidth: 1,
            },
          ],
        });
      });
  }, []);

  if (!data || contributions === null || !chartData) {
    return (
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center  text-black p-6">
      {/* Avatar and Name Section */}
      <div className="flex items-center justify-center mb-6">
        {/* Avatar */}
        <img
          src={data.avatar_url}
          alt={data.name}
          className="rounded-full w-40 h-40 mr-8"
        />
        <div className="text-center">
          <h2 className="text-3xl mb-2 text-black">{data.name}</h2>
          <p>
            <a
              href={`https://github.com/${data.login}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 text-lg flex-auto m-5"
            >
              @{data.login}
            </a>
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-around w-full mb-4">
        <div className="text-center">
          <p className="text-lg">Followers</p>
          <p className="text-4xl text-black">{data.followers}</p>
        </div>
        <div className="text-center">
          <p className="text-lg">Following</p>
          <p className="text-4xl text-black">{data.following}</p>
        </div>
        <div className="text-center">
          <p className="text-lg">Repos</p>
          <p className="text-4xl text-black">{data.public_repos}</p>
        </div>
        <div className="text-center">
          <p className="text-lg">Contributions</p>
          <p className="text-4xl text-black">{contributions}</p>
        </div>
      </div>

      {/* Contributions Graph */}
      <div className="w-full max-w-2xl text-black mt-6">
        <h3 className="text-center text-2xl text-black mb-4">
          Contribution Breakdown
        </h3>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

