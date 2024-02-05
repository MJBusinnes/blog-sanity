import Markdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";

Link

const BlogCard = ({postData}) => {
  return (
    <Link href={`/${postData._id}`}>
    <div className='flex flex-col space-y-2 bg-primary-bg w-72 hover:scale-105 transition-transform duration-200 ease-out rounded overflow-hidden'>
        <Image src={postData.image} 
               alt="creators-content"
               width={300}
               height={50}
               />
        <div className="flex flex-col">
        <p className="font-semibold text-sm text-dark-accent">
            {postData.author.name}, {Date(postData.publishedAt).substring(0,10)}
        </p>
        <p className="font-semibold text-sm text-light-accent">
            Redator
        </p>
        </div>
        <div>
        <h1 className="text-xl font-bold text-primary-brand">
          {postData.title}
        </h1>    
        </div>
        
        <div>
        <p className="line-clamp-2 text-primary-dark mb-8 mt-8">
        {postData.body}
        </p>
        </div> 
        <div className="flex flex-row flex-wrap space-x-2">
          {postData.categories.map((category) => (
            <p key={category._id} 
            className="border bg-primary-dark text-primary-bg py-1 px-2 text-xs rounded-full">
              {category.name}
            </p>
            
          ))}
          
        </div>
            
    </div>
    </Link>
  )
};

export default BlogCard;