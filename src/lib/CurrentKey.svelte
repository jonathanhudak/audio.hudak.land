<script lang="ts">
  import { notes } from "./keyPressStore";
</script>

<div>
  <strong>
    {#each $notes as note}
      {note}&nbsp;
    {/each}
  </strong>
</div>

<style>
  div {
    margin: 1rem 0;
    height: 6rem;
  }
  strong {
    padding: 0.5rem;
    font-size: 4rem;
    background-color: #1a1a1a;
    white-space: nowrap;
    display: inline-block;
    padding: 1rem;
  }
</style>
