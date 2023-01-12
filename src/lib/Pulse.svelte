<script lang="ts">
  let audioCtx = new AudioContext();
  let pulseTime = 1;
  export let pulseHz;
  let osc;

  function play() {
    if (osc) {
      osc.stop();
    }
    osc = audioCtx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(pulseHz, audioCtx.currentTime);

    let amp = audioCtx.createGain();
    amp.gain.value = 0.5;

    osc.connect(amp);

    osc.connect(audioCtx.destination);
    osc.start();
  }

  function stop() {
    osc.stop();
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
  on:mousedown={play}
  on:mouseup={stop}
  on:keydown={keyPlay}
  on:keyup={keyStop}><slot /></button
>

<style>
  button:active {
    background-color: gold;
    color: black;
  }
</style>
