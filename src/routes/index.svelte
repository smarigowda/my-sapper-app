<script context="module">
  export function preload({ params, query }) {
    // index.json ==> index.json.js
    return this.fetch(`index.json`)
      .then(r => r.json())
      .then(articles => {
        console.log(articles);
        return { articles };
      });
  }
</script>

<script>
  export let articles;
  import Button from "../components/Button.svelte";
  import Articles from "../containers/Articles.svelte";
</script>

<style>
  h2 {
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
  }
  .main-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>

<svelte:head>
  <title>title: Sapper project template</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Cards Flexbox</title>
  <link
    rel="stylesheet"
    href="https://necolas.github.io/normalize.css/8.0.0/normalize.css" />
  <link
    href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700"
    rel="stylesheet" />
</svelte:head>

<div class="container">
  <h2>Latest Entries</h2>
  <main class="main-content">
    <Articles {articles} />
  </main>
</div>
<!--.content-->
