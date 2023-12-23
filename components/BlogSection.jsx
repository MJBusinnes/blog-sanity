import React from 'react';
import BlogCard from './BlogCard';

const BlogSection = () => {
  return (
    <div className='flex flex-col lg:px-40 px-4'>
      <div className='flex justify-center my-4'>
        <h1 className='capitalize text-5xl font-semibold'>ARTIGOS RECENTES</h1>
      </div>
      <ul className='flex flex-row flex-wrap justify-between space-y-8'>
        <li className='mt-8'><BlogCard /></li>
        <li className=''><BlogCard /></li>
        <li className=''><BlogCard /></li>
        <li className=''><BlogCard /></li>
        <li className=''><BlogCard /></li>
      </ul>
    </div>
  )
};

export default BlogSection;