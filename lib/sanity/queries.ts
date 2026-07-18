import { defineQuery } from 'next-sanity';

export const postsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    publishedAt,
    "author": author->{ name, image },
    "categories": categories[]->{ title, "slug": slug.current }
  }
`);

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    body,
    publishedAt,
    "author": author->{ name, image, bio },
    "categories": categories[]->{ title, "slug": slug.current },
    seo
  }
`);

export const postSlugsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    publishedAt
  }
`);
