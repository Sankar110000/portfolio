import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import GitHubCalendar from 'react-github-calendar';
import { motion } from "framer-motion";

const EVENT_ICONS = {
  PushEvent: "",
  PullRequestEvent: "🔀",
  IssuesEvent: "❗",
  IssueCommentEvent: "💬",
  ForkEvent: "🍴",
  WatchEvent: "⭐",
  CreateEvent: "🆕",
};

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

export default function GithubActivity({ username }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}/events/public`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch GitHub activity");
        return res.json();
      })
      .then((data) => {
        setEvents(data.slice(0, 2));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  if (loading)
    return (
      <div className="text-gray-500 dark:text-gray-400">
        Loading GitHub activity...
      </div>
    );
  if (error) return <div className="text-red-500">{error}</div>;
  if (!events.length)
    return (
      <div className="text-gray-500 dark:text-gray-400">
        No recent activity found.
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="border-s-2 border-amber-50 p-2 sm:p-6  ms-4 lg:ms-0 w-[85%] lg:w-auto"
    >
      <div >
      <h1 className="sm:text-3xl font-semibold text-blue-500 mb-2 text-xl"><FaGithub className="inline -translate-y-1"/> Github Activity</h1>
      <div className="border-b-2 border-blue-500 mb-4"></div>
      <h2 className="pb-0.5 border-b-2 text-blue-400 text-sm sm:text-lg">Latest Activity</h2>
      <ul className="space-y-2 mt-1">
        {events.map((event) => (
          <li key={event.id} className="flex items-center gap-2 text-sm text-white">
            <span className="text-xl">{EVENT_ICONS[event.type] || ""}</span>
            <span className="font-medium">{event.repo.name}</span>
            <span className="text-gray-500 dark:text-gray-400">
              {event.type.replace(/Event$/, "")}
            </span>
            <span className="ml-auto text-xs text-gray-400">
              {formatDate(event.created_at)}
            </span>
          </li>
        ))}
      </ul>
      <div className="text-white mt-4 w-full" id="github-activity">
        <h2 className="pb-0.5 border-b-2 text-blue-400">Github Contributions</h2>
        <GitHubCalendar username="sankar110000"/>
      </div>
    </div>
    </motion.div>
    
  );
}
