'use client';

import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the emerging trends in web development that are shaping the digital landscape in 2024.',
    date: 'April 15, 2024',
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'How to Choose the Right Tech Stack for Your Project',
    excerpt: 'Selecting the right technologies for your project can be challenging. Here is a guide to help you make the best choice.',
    date: 'April 8, 2024',
    category: 'Technology',
  },
  {
    id: 3,
    title: 'The Importance of User Experience in Software Design',
    excerpt: 'Learn why user experience should be at the forefront of your software design process.',
    date: 'March 30, 2024',
    category: 'UI/UX Design',
  },
  {
    id: 4,
    title: 'Building Scalable Applications with Modern Frameworks',
    excerpt: 'Discover strategies for building applications that can grow with your business needs.',
    date: 'March 22, 2024',
    category: 'Software Architecture',
  },
];

export default function Blog() {
  return (
    <MainLayout pageTitle="BLOG">
      <div className="blogContainer block m-auto w-full md:w-[75%]">
        <h1 className="text-center text-3xl font-bold mb-8">OUR BLOG</h1>

        <p className="text-center mb-8">
          Stay updated with the latest insights, trends, and tips in software development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card bg-white p-6 rounded-lg shadow-md">
              <div className="mb-2">
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="mx-2">•</span>
                <span className="text-sm text-[#4a5fc1]">{post.category}</span>
              </div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="mb-4 text-gray-700">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`}>
                <span className="text-[#4a5fc1] font-bold hover:underline">Read More →</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Want to stay updated with our latest articles and insights?
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-64"
            />
            <button className="px-6 py-2 bg-[#4a5fc1] text-white font-bold rounded-lg hover:bg-[#3a4fb1] transition-colors w-full md:w-auto">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
