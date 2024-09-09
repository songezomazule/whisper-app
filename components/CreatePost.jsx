const CreatePostForm = ({setPost, handleSubmit, post}) => {
 

  return (
    <section className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold mb-4">Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="tweetContent"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Tweet:
          </label>
          <textarea
            id="tweetContent"
            onChange={(e) => setPost({ ...post, secret: e.target.value })}
            rows="4"
            cols="50"
            placeholder="What's on your mind?"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="hashtags"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Tags:
          </label>
          <input
            id="hashtags"
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#tag1 #tag2"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="flex justify-end items-center gap-4">
          <button className="font-inter">Cancel</button>
          <button
            type="submit"
            className=" py-1 px-4 bg-indigo-700 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Post
          </button>
        </div>
      </form>
    </section>
  );
}; 

export default CreatePostForm;
