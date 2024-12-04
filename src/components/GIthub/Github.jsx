import React, { useEffect, useState } from "react";

export default function Github() {
  const [data, setData] = useState([]);
  const [contributions, setContributions] = useState();

  useEffect(() => {
    // here fetch the gitHub user data
    fetch("https://api.github.com/users/sunilrathod098")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });

    // here events and contr GitHub events and calculate contributions
    fetch("https://api.github.com/users/sunilrathod098/events/public")
      .then((res) => res.json())
      .then((events) => {
        let totalContributions = 0;

        events.forEach((event) => {
          if (event.type === "PushEvent") {
            totalContributions += 1;
          } else if (
            event.type === "PullRequestEvent" || event.type === "IssuesEvent"
          ) {
            totalContributions += 1;
          }
        });

        setContributions(totalContributions); //  contributions count set
      });
  }, []);

  if (!data || contributions === null) {
    return (
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-gray-600 text-white p-6">
      {/* Avatar and Name Section */}
      <div className="flex items-center justify-center mb-6">
        {/* Avatar */}
        <img
          src={data.avatar_url}
          alt={data.name}
          className="rounded-full w-40 h-40 mr-8"
        />
        <br />
        <br />
        {/* User Details */}
        <div className="text-center">
          <h2 className="text-3xl mb-2">{data.name}</h2> <br />
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

      <br />
      <br />
      {/* Stats Section */}
      <div className="flex justify-around w-full mb-4">
        {/* Followers, Following, Repos */}
        <div className="text-center">
          <p className="text-lg">Followers</p>
          <p className="text-4xl">{data.followers}</p>
        </div>
        <div className="text-center">
          <p className="text-lg">Following</p>
          <p className="text-4xl">{data.following}</p>
        </div>
        <div className="text-center">
          <p className="text-lg">Repos</p>
          <p className="text-4xl">{data.public_repos}</p>
        </div>

        {/* Contributions Section */}
        <div className="text-center">
          <p className="text-lg">Contributions</p>
          <p className="text-4xl">{contributions}</p>
        </div>
      </div>
      <br />
    </div>
  );
}


