<script lang="ts">
  import { mapping } from "./keyMappings";
  import { onMount } from "svelte";

  let currentKeys = [];
  let notes = [];
  let keyDown = (e) => {
    const k = e.key;
    if (currentKeys.indexOf(k) === -1) {
      currentKeys = [...currentKeys, k];
      notes = [...notes, mapping.real[k]].filter((n) => !!n);
    }
  };

  let keyUp = (e) => {
    currentKeys = [...currentKeys.filter(() => !e.key)];
    notes = [...notes.filter(() => !mapping.real[e.key])].filter((n) => !!n);
  };

  onMount(async () => {
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
  });
</script>

<div>
  <strong>
    {#each currentKeys as key}
      {key}&nbsp;
    {/each}
  </strong>

  <strong>
    {#each notes as note}
      {note}&nbsp;
    {/each}
  </strong>
</div>

<style>
  strong {
    padding: 0.5rem;
    font-size: 4rem;
    background-color: #1a1a1a;
    white-space: nowrap;
  }
</style>
