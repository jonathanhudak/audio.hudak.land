<script lang="ts">
  import Pulse from "./lib/Pulse.svelte";
  import CurrentKey from "./lib/CurrentKey.svelte";
  import Gain from "./lib/Gain.svelte";
  import Note from "@tonaljs/note";
  let audioCtx = new AudioContext();
  let amp = audioCtx.createGain();
  let initialValues = {
    gain: 0.2,
  };

  let source: MediaStreamAudioSourceNode;

  if (navigator.mediaDevices.getUserMedia) {
    // Disabled because it's annoying to have to allow microphone access
    // navigator.mediaDevices
    //   .getUserMedia({
    //     audio: true,
    //   })
    //   .then((stream) => {
    //     console.log(stream);
    //     source = audioCtx.createMediaStreamSource(stream);
    //     source.connect(amp);
    //   });
  } else {
    console.error("getUserMedia not supported on your browser!");
  }

  amp.connect(audioCtx.destination);

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
  <CurrentKey />
  <!-- <Gain {audioCtx} {amp} initialGain={initialValues.gain} /> -->
  <ol>
    {#each frequencies as [name, f]}
      <li>
        <Pulse pulseHz={f} {audioCtx}>{name}</Pulse>
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
