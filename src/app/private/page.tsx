"use client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((data) => setQuote(data.quote))
      .catch((error) => console.error("Error fetching the quote:", error));
  }, []);

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col gap-16 items-center justify-center text-center text-xl h-screen">
      <div className="mt-[-50px]">
        <div>"{quote}"</div>
        <div>- Kanye West</div>
      </div>
      <div className="flex flex-row gap-4">
        {" "}
        <button
          className="bg-gray-300 px-4 py-2 hover:-translate-y-1 hover:bg-gray-400 rounded"
          onClick={reload}
        >
          Refresh
        </button>
        <Link href="/">
          <button className="bg-gray-300 px-4 py-2 hover:-translate-y-1 hover:bg-gray-400 rounded">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
