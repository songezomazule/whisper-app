import { Fugaz_One } from "next/font/google";
import React from "react";
import Card from "./Card";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const Profile = ({ email, data }) => {
  return (
    <section className="mt-10 px-4 sm:px-10">
      <div className="max-w-md w-full bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">My Profile</h1>
        <p className={"text-indigo-400 mb-3 " + fugaz.className}>
          luckymazulemazule@gmail.com
        </p>
        <p className="text-gray-700 leading-relaxed">
          Welcome to your profile page! Here you can edit or delete your
          secrets.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10">
        {data.map((secret, index) => (
          <Card key={index} post={secret} />
        ))}
      </div>
    </section>
  );
};

export default Profile;
