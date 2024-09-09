import { Fugaz_One } from "next/font/google";


const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const Card = ({ post }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-3 m-1">
      <h3 className={"text-lg font-semibold " + fugaz.className}>Anonymous</h3>
      <p className="text-sm text-gray-900 mt-2">{post.secret}</p>
      <p className="text-sm font-medium text-indigo-700 mt-2">#{post.tag}</p>
    </div>
  );
};

export default Card;
