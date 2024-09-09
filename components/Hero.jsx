import { Fugaz_One } from "next/font/google";
import Feed from "./Feed";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  return (
    <section className="mt-10 px-5 sm:px-10">
      <h1
        className={
          "text-4xl font-bold text-center text-gray-900 " + fugaz.className
        }
      >
        <span className="text-indigo-700">Whisper</span> & Share <br />
        Your Secrets in Confidence
      </h1>
      <p className="text-center font-inter mt-2">
        Welcome to Whisper where your secrets find a safe home and your thoughts
        can echo freely.
      </p>
      <Feed />
    </section>
  );
};

export default Hero