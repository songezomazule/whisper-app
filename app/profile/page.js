"use client";

import Profile from "@/components/Profile";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const MyProfile = () => {
  const [mySecrets, setMySecrets] = useState([]);

  const { data: session } = useSession();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/secrets`);
      const data = await response.json();

      setMySecrets(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  return <Profile email={"luckymazule@gmail.com"} data={mySecrets} />;
};

export default MyProfile;
