<script lang="ts">
  import { notes, currentKeys } from "./keyPressStore";
  import Note from "@tonaljs/note";
  import { mapping } from "./keyMappings";
  import { onMount } from "svelte";
  import { play, stop } from "./keyPressStore";

  let keyDown = (e) => {
    const k = e.key;
    if ($currentKeys.indexOf(k) === -1) {
      const mappedNote = mapping.real[k];
      $currentKeys = [...$currentKeys, k];
      $notes = [...$notes, mappedNote].filter((n) => !!n);
      play(Note.freq(mappedNote));
    }
  };

  let keyUp = (e) => {
    const mappedNote = mapping.real[e.key];
    $currentKeys = [...$currentKeys.filter(() => !e.key)];
    $notes = [...$notes.filter(() => !mapping.real[e.key])].filter((n) => !!n);
    stop(Note.freq(mappedNote));
  };

  onMount(async () => {
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
  });
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
