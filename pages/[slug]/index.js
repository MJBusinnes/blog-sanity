import { getPostBySlug } from '../../lib/client';

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      post,
    },
  };
}

function Post({ post }) {
  // Renderiza o conteúdo do post
  return (
    <div>
      <h1>{post.title}</h1>
      {/* Renderizar outros dados do post */}
    </div>
  );
}

export default Post;