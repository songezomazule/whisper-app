"use client";
import CreatePostForm from "@/components/CreatePost";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CreatePostPage = () => {
  const [post, setPost] = useState({ secret: "", tag: "" });

  const router = useRouter();
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/secret/new", {
        method: "POST",
        body: JSON.stringify({
          secret: post.secret,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreatePostForm setPost={setPost} post={post} handleSubmit={handleSubmit} />
  );
};
export default CreatePostPage;
