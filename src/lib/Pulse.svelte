<script lang="ts">
  import { derived } from "svelte/store";
  export let pulseHz;
  import { play, stop, playedFrequencies } from "./keyPressStore";

  function stopPulse() {
    stop(pulseHz);
  }

  function playPulse() {
    play(pulseHz);
  }

  function keyPlay(e: { key: string }) {
    if (e.key === "Enter") {
      playPulse();
    }
  }

  function keyStop(e: { key: string }) {
    if (e.key === "Enter") {
      stopPulse();
    }
  }
</script>

<button
  class:playing={$playedFrequencies.includes(pulseHz)}
  on:mousedown={playPulse}
  on:mouseup={stopPulse}
  on:keydown={keyPlay}
  on:keyup={keyStop}
  on:touchstart={playPulse}
  on:touchend={stopPulse}><slot /></button
>

<style>
  button:hover {
    background-color: purple;
  }
  button.playing {
    background-color: gold;
    color: black;
  }
  button {
    user-select: none;
    -webkit-user-select: none;
  }
</style>
