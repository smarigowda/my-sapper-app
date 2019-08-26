import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

export function get(req, res) {
	console.log('index.json.js is called....');
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}