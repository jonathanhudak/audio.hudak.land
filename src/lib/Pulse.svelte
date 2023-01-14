<script lang="ts">
  export let audioCtx;
  export let pulseHz;
  let osc;
  let playing = false;

  function play() {
    if (osc) {
      osc.stop();
    }
    osc = audioCtx.createOscillator();
    osc.type = "sine";

    osc.frequency.setValueAtTime(pulseHz, audioCtx.currentTime);

    osc.connect(audioCtx.destination);
    osc.start();
    playing = true;
  }

  function stop() {
    if (osc) {
      osc.stop();
      playing = false;
    }
  }

  function keyPlay(e) {
    if (e.key === "Enter") {
      play();
    }
  }

  function keyStop(e) {
    if (e.key === "Enter") {
      stop();
    }
  }
</script>

<button
  class:playing
  on:mousedown={play}
  on:mouseup={stop}
  on:keydown={keyPlay}
  on:keyup={keyStop}
  on:touchstart={play}
  on:touchend={stop}><slot /></button
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
