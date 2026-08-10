import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'SEU_PROJECT_ID',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  useCdn: false, // false para garantir dados frescos no build time (SSG)
  apiVersion: '2024-03-01', 
  token: import.meta.env.SANITY_API_TOKEN,
});

// Exemplo de função utilitária para buscar posts
export async function getPosts(lang: string = 'pt-BR') {
  const query = `*[_type == "post" && language == $lang] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt
  }`;
  
  return await sanityClient.fetch(query, { lang });
}
