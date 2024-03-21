// lib/client.js

import { client } from './clientSanity';

export async function getPostBySlug(slug) {
  try {
    const post = await client.fetch(`
      *[_type == 'post' && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        "image": mainImage.asset->url,
        publishedAt,
        "body": pt::text(body),
        "author": *[_type == 'author' && _id == ^.author._ref][0]{
            _id,
            name,
            "slug": slug.current,
        },
        categories[]->{
            _id,
            name
        },
        "content": body,
      }
    `, { slug });

    return post;
  } catch (error) {
    console.error('Erro ao buscar o post pelo slug:', error);
    return null;
  }
}
