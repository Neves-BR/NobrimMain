import { createClient } from '@sanity/client';

// Busca nas variáveis do Astro (import.meta) ou direto no servidor Node da Vercel (process.env)
const projectId = 
  import.meta.env.PUBLIC_SANITY_PROJECT_ID || 
  import.meta.env.SANITY_PROJECT_ID || 
  (typeof process !== 'undefined' ? process.env.PUBLIC_SANITY_PROJECT_ID : undefined) ||
  (typeof process !== 'undefined' ? process.env.SANITY_PROJECT_ID : undefined);

const dataset = 
  import.meta.env.PUBLIC_SANITY_DATASET || 
  import.meta.env.SANITY_DATASET || 
  (typeof process !== 'undefined' ? process.env.PUBLIC_SANITY_DATASET : undefined) ||
  (typeof process !== 'undefined' ? process.env.SANITY_DATASET : undefined) || 
  'production';

// Trava de segurança para avisar você no log caso as variáveis realmente não estejam na Vercel
if (!projectId) {
  throw new Error("\n❌ ERRO CRÍTICO: SANITY_PROJECT_ID não foi encontrado!\nVerifique se a variável foi cadastrada e salva na aba 'Environment Variables' do painel da Vercel.\n");
}

export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn: false, // false para garantir dados frescos no build SSG
  apiVersion: '2024-03-01',
});

// Funções utilitárias
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
