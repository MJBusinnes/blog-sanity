import BlogCard from './BlogCard';
import { getPosts } from '/lib/client';


const BlogSection = async () => {
  const posts = await getPosts();
 // console.log(posts); Não é mais necessário este console.log porque adicionamos {posts.map} acima das listas de artigos
  return (
    <div className='flex flex-col lg:px-40 px-4'>
      <div className='flex justify-center my-4'>
        <h1 className='capitalize text-5xl font-semibold'>ARTIGOS RECENTES</h1>
      </div>
      <ul className='flex flex-row flex-wrap justify-between space-y-8'>
        {posts.map((post) =>(
          <li key={post.Id} className='mt-8'>
          <BlogCard postData={post} />
          </li>
        ))}
      </ul>
    </div>
  )
};

export default BlogSection;