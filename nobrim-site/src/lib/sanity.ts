import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  // String falsa temporária. O SDK só precisa que isso não seja vazio para não quebrar o build.
  projectId: '12345678', 
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-01',
});

// Retorna uma array vazia para não quebrar nenhuma página que por acaso tente rodar essa função
export async function getPosts(lang: string = 'pt-BR') {
  return []; 
}
