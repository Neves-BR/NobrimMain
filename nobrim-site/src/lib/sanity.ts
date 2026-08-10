// Dublê do Sanity (Mock) para destravar o site institucional
// Nenhuma biblioteca real está sendo importada aqui.

export const sanityClient = {
  fetch: async () => {
    return []; // Retorna sempre vazio, não importa quem chame
  }
};

export async function getPosts() {
  return [];
}
