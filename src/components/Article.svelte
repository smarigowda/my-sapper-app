<script>
  import Button from "../components/Button.svelte";
  export let article;
</script>

<style>
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
  h3 {
    margin: 0;
    font-weight: 700;
    font-family: "Libre Baskerville", serif;
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

<article class="entry">
  <img src={article.imageSource} alt="entry image" />
  <div class="content">
    <h3>{article.contentHeading}</h3>
    <p>
      Published on:
      <span>{article.publishedOn}</span>
    </p>
    <p>
      By:
      <span>{article.publishedBy}</span>
    </p>
    <Button />
  </div>
</article>
