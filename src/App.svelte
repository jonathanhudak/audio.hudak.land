<script lang="ts">
  import Pulse from "./lib/Pulse.svelte";
  import Note from "@tonaljs/note";
  let notes = "CDEFGAB".split("");
  let octaves = [2, 3, 4];
  let frequencies = octaves
    .map((o) =>
      notes.map((n) => {
        let noteName = `${n}${o}`;
        return [noteName, Note.freq(noteName)];
      })
    )
    .reduce((acc, r) => [...acc, ...r], []);
</script>

<main>
  <ol>
    {#each frequencies as [name, f]}
      <li>
        <Pulse pulseHz={f}>{name}</Pulse>
      </li>
    {/each}
  </ol>
</main>

<style>
  ol {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(7, min-content);
    gap: 4px;
  }
</style>
