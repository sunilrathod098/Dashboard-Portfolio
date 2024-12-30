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

// here er register the necessary Chart.js components of showing daily events on github
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Github() {
  const [data, setData] = useState(null);
  const [contributions, setContributions] = useState(0);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // fetch GitHub user data by github url
    fetch("https://api.github.com/users/sunilrathod098")
      .then((res) => res.json())
      .then((data) => {
        setData(data); //holding user profile data or information in a setData state variable
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    // we fetch events and calculate contributions by using github url
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
      })
      .catch((error) => {
        console.error("Error fetching events data:", error);
      });
  }, []);

  if (!data || contributions === null || !chartData) {
    return (
      <div className="text-center m-4 bg-orange-600 text-white p-4 text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center text-white p-8">
      {/* Avatar and Name Section */}
      <div className="flex items-center justify-center mb-6">
        {/* Avatar */}
        <img
          src={data.avatar_url}
          alt={data.name}
          className="rounded-full w-40 h-40 mr-8"
        />
        <div className="text-center">
          <h2 className="text-3xl mb-2 text-white font-bold">{data.name}</h2>
          <p>
            <a
              href={`https://github.com/${data.login}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 text-lg flex-auto m-5"
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
          <p className="text-4xl text-white font-bold">{data.followers}</p>
        </div>
        <div className="text-center">
          <p className="text-lg">Following</p>
          <p className="text-4xl text-white font-medium">{data.following}</p>
        </div>
        <div className="text-center">
          <p className="text-lg">Repos</p>
          <p className="text-4xl text-white font-medium">{data.public_repos}</p>
        </div>
        <div className="text-center">
          <p className="text-lg">Contributions</p>
          <p className="text-4xl text-white font-medium">{contributions}</p>
        </div>
      </div>

      {/* Contributions Graph */}
      <div className="w-full max-w-2xl text-white mt-10">
        <h3 className="text-center text-2xl text-white mb-10 font-medium">
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
