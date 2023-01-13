<script lang="ts">
  import Pulse from "./lib/Pulse.svelte";
  import Note from "@tonaljs/note";
  let ctx = new AudioContext();
  let notes = "CDEFGAB".split("");
  let octaves = [0, 1, 2, 3, 4, 5, 6];
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
        <Pulse pulseHz={f} audioCtx={ctx}>{name}</Pulse>
      </li>
    {/each}
  </ol>
</main>

<style>
  ol {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 0;
    padding: 0;
  }

  @media (min-width: 500px) {
    /* ol {
      grid-template-columns: repeat(7, min-content);
    } */
  }
</style>
