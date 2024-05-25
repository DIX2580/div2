// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 md:px-20 py-6">
      <Head>
        <title>Reviews</title>
      </Head>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-yellow-400">We Love Your Reviews</h1>
        <h2 className="text-4xl font-bold mb-10">What People Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ReviewCard
            title="Great and Timely Content!"
            content="Glad to see that this podcast addresses staying on top of market changes, trends and best practices from forward thinkers! Thanks for the continued great content!"
          />
          <ReviewCard
            title="Great guests with fantastic and varied insight into the future of building and remodeling!"
            content="Great listen on the way to the job site."
          />
          <ReviewCard
            title="Super relevant"
            content="Great listen on the way to the job site."
          />
          <ReviewCard
            title="Great variety and forward thinking"
            content="It's good to see a podcast dedicated to those who are serious about the future of construction. So far the guests have covered great topics including the subject of change, building science and safety, and new product development. Looking forward to future episodes and learning more about what's to come in construction."
          />
        </div>
        <button className="mt-10 bg-yellow-400 text-black py-2 px-6 rounded-full">Load More</button>
      </div>
    </div>
  );
}

function ReviewCard({ title, content }) {
  return (
    <div className=" p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <StarRating />
      </div>
      <h3 className="text-sm font-Poppins  font-bold mb-2">{title}</h3>
      <p className='text-sm font-Poppins font-bold'>{content}</p>
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-yellow-400"
        >
          <path d="M9.049.325a1 1 0 011.902 0l1.86 5.7a1 1 0 00.95.69h6.027c.969 0 1.371 1.24.588 1.81l-4.89 3.558a1 1 0 00-.364 1.118l1.86 5.7c.303.926-.755 1.696-1.54 1.118L10 14.347l-4.49 3.252c-.784.578-1.842-.192-1.539-1.118l1.86-5.7a1 1 0 00-.364-1.118L.575 8.525C-.207 7.955.196 6.715 1.165 6.715h6.027a1 1 0 00.95-.69L9.049.325z" />
        </svg>
      ))}
    </div>
  );
}
