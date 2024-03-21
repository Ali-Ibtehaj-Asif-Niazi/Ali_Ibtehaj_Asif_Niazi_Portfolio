'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import PromptCard from './PromptCard'


const PromptCardList = ({data, handleTagClick}) => {
    return (
      <div className="mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    );
  };

const UserPost = () => {
    const [allPosts, setAllPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch("/api/prompt");
        const data = await response.json();
    
        setAllPosts(data);
      };

      useEffect(() => {
        fetchPosts();
      }, []);


  return (
    <>
        <span className="logo-container">
            <img
                src="/assets/images/facebook.jpg"
                alt="hugging"
                width={40}
                height={40}
            />
            <p className="ml-10"></p>
            <p className="logo-text">
                <p>Posts Made by users</p>  
                <p className="ml-5">Sign In to Post!</p>
            </p>
            <p className="ml-7"></p>
            <Link href="/prompts" className="flex gap-2 flex-center">
                <button className="text-[#00aaff] p-2 border border-[#00aaff] rounded-lg disabled:text-blue-100 
                    disabled:cursor-not-allowed disabled:bg-gray-500 hover:scale-110 hover:bg-[#00aaff] hover:text-black duration-300 transition-all">Sign In</button>
            </Link>
        </span>
        <PromptCardList data={allPosts} handleTagClick={() => {}} />
    </>
    );
};

export default UserPost;