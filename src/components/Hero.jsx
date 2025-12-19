"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const [prompt, setPrompt] = useState();
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    // Get user data from localStorage
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const userData = JSON.parse(user);
        setUserName(userData.name || "User");
      } catch (err) {
        console.error("Error parsing user data:", err);
      }
    }
  }, []);

  const onSearch = () => {
    console.log("Hero onSearch called with prompt:", prompt);
    if (prompt === undefined || prompt.trim() === "") {
      console.log("Prompt is empty, aborting search.");
      return; // do not proceed if prompt is empty
    }
    const q = encodeURIComponent(prompt.trim());
    console.log("Encoded query:", q);
    console.log("Navigating to:", `/search-results?q=${q}`);
    router.push(`/search-results?q=${q}`); // navigate to search results page with query param
  };

  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center p-8">
      <div className="flex flex-col w-full max-w-5xl">
        <div>
          <h1 className="font-semibold text-3xl text-gray-900">
            Hi {userName}, please describe the profile you're looking for.
          </h1>
          <h2 className="text-gray-500 mt-1">
            Find exactly who you're looking for, in seconds.
          </h2>
        </div>

        <div className="mt-6 bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="p-5">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full min-h-[120px] resize-none outline-none text-gray-800 placeholder-gray-400"
              placeholder="Software Engineers in Bangalore with 3+ years of experience, strong in React and Node.js, hands-on with REST APIs and AWS, and experience in a product-based tech company."
            />
          </div>
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
            <button className="inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-100">
              <span className="inline-block w-4 h-4 rounded-sm border border-gray-400" />
              Upload JD
            </button>
            <button
              onClick={onSearch}
              className="px-5 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-black"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
