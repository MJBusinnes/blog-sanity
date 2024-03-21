// /lib/isUniqueAcrossAllDocuments.js

// /lib/isUniqueAcrossAllDocuments.js

import { client } from './clientSanity'; // Importa o cliente do Sanity

export async function isUniqueAcrossAllDocuments(slug, context) {
  console.log('Slug recebido:', slug); // Depuração: Verifica se o slug está sendo passado corretamente
  
  const { document } = context;
  console.log('Documento atual:', document); // Depuração: Verifica o contexto do documento
  
  const id = document._id.replace(/^drafts\./, '');
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
  };
  const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`;
  
  try {
    const result = await client.fetch(query, params);
    console.log('Resultado da consulta:', result); // Depuração: Verifica o resultado da consulta
    return result;
  } catch (error) {
    console.error('Erro ao verificar unicidade do slug:', error);
    return false;
  }
}

