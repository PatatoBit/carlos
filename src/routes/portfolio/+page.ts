import projects from '$lib/data/projects.json';
import activities from '$lib/data/activities.json';
import certificates from '$lib/data/certificates.json';

export function load() {
	return {
		status: 200,
		body: { projects, activities, certificates }
	};
}
