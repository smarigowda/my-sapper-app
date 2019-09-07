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
  console.log('--- Articles ---');
  console.log(articles);
  import Button from "../components/Button.svelte";
  import Article from "../components/Article.svelte";
</script>

<style>
  h2 {
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
  }
  h3 {
    margin: 0;
    font-weight: 700;
    font-family: "Libre Baskerville", serif;
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
  img {
    max-width: 100%;
    display: block;
  }
  .entry .content {
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
  }
  .content span {
    color: #db008d;
  }
  @media (min-width: 480px) {
    .entry {
      flex: 0 0 calc(50% - 1rem);
    }
  }
  @media (min-width: 768px) {
    .entry {
      flex: 0 0 calc(33.3% - 1rem);
    }
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
  <link rel="stylesheet" href="css/styles.css" />
</svelte:head>

<div class="container">
  <h2>Latest Entries</h2>
  <main class="main-content">
	<Article />
    <article class="entry">
      <img src="img/01.jpg" alt="entry image" />
      <div class="content">
        <h3>Tips for Saving Money in your Next Travel</h3>
        <p>
          Published on:
          <span>July 19th, 2019</span>
        </p>
        <p>
          By:
          <span>The Travel Blog</span>
        </p>
        <Button />
      </div>
    </article>
    <article class="entry">
      <img src="img/02.jpg" alt="entry image" />
      <div class="content">
        <h3>The Complete Guide for Traveling</h3>
        <p>
          Published on:
          <span>July 19th, 2019</span>
        </p>
        <p>
          By:
          <span>The Travel Blog</span>
        </p>
        <Button />
      </div>
    </article>
    <article class="entry">
      <img src="img/03.jpg" alt="entry image" />
      <div class="content">
        <h3>Ultimate Guide to Take the best Pictures</h3>
        <p>
          Published on:
          <span>July 19th, 2019</span>
        </p>
        <p>
          By:
          <span>The Travel Blog</span>
        </p>
        <Button />
      </div>
    </article>
    <article class="entry">
      <img src="img/04.jpg" alt="entry image" />
      <div class="content">
        <h3>Checklist for your next Travel</h3>
        <p>
          Published on:
          <span>July 19th, 2019</span>
        </p>
        <p>
          By:
          <span>The Travel Blog</span>
        </p>
        <Button />
      </div>
    </article>
    <article class="entry">
      <img src="img/05.jpg" alt="entry image" />
      <div class="content">
        <h3>Best Places to visit next Autumn</h3>
        <p>
          Published on:
          <span>July 19th, 2019</span>
        </p>
        <p>
          By:
          <span>The Travel Blog</span>
        </p>
        <Button />
      </div>
    </article>
    <article class="entry">
      <img src="img/06.jpg" alt="entry image" />
      <div class="content">
        <h3>Best Places to Visit with Mountains</h3>
        <p>
          Published on:
          <span>July 19th, 2019</span>
        </p>
        <p>
          By:
          <span>The Travel Blog</span>
        </p>
        <Button />
      </div>
    </article>
  </main>
</div>
<!--.content-->
