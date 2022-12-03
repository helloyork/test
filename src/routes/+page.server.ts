import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
    const r='hello';
	return {
		message: r+' world',
	};
};
