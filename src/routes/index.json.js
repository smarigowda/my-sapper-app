import articles from "./_articles.js";

export function get(req, res) {
  console.log("index.json.js is called....");
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end(JSON.stringify(articles));
}
