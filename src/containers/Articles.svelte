<script>
  import Button from "../components/Button.svelte";
  import Article from "../components/Article.svelte";
  export let articles;
</script>

{#each articles as article}
  <Article {article} />
{/each}
