"use client";
import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/secret");
      const data = await response.json();

      setAllPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className="mt-10 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {allPosts.map((post, index) => (
          <Card key={index} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Feed;
