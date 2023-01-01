import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (params.slug == 'awa') {
    return {
      title: 'Hello world!',
      content: 'Welcome to user page'
    };
  }
 
  throw error(404, 'Not found');
}