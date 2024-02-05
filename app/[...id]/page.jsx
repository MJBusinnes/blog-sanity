import '/styles/globals.css';
import { getPosts } from "/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const SingleBlogPost = async ({params}) => {
  const postID = params.id[0]
  const posts = await getPosts();
  //console.log(postID); Teste do return Page, para testar o link do post
  const singlePost = posts.find((post) => post._id === postID);
  
    return (
      <div className="flex space-y-8 my-8 flex-col lg:px-96 px-4 min-h-screen">
        <div className="w-full flex flex-col justify-center space-y-8 items-center">
          <h1 className="text-3xl text-primary-dark font-semibold drop-shadow-md">
            {singlePost && singlePost.title}
          </h1>
          <Image
          src={singlePost && singlePost.image}
          width={600}
          height={200}
          alt={singlePost && singlePost.title}
          className="backdrop-brightness-100"
          />
        </div>
        
        <div>
          <p className='leading-relaxed'>
            Por{" "}
            <span className="font-semibold text-primary-brand">
              {singlePost && singlePost.author && singlePost.author.name}
            </span>
          </p>
        </div>
        
        {singlePost && singlePost.content && (
  <PortableText
    value={singlePost.content}
    serializers={{
      types: {
        block: props =>
          // Check if we have an override for the “style”
          props.node.style === 'normal'
            ? // if normal, return a p with a className
              <p className="leading-relaxed">{props.children}</p>
            : // If not “normal”, fall back to the provided default
              <>{props.children}</>
      }
    }}
  />
)}
</div>
  )
  
};

export default SingleBlogPost