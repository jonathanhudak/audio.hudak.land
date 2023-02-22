<script lang="ts">
  export let audioCtx;
  export let pulseHz;
  let osc;
  let playing = false;
  const Z_DISTANCE = 20;

  function play(NOTE_LENGTH: number = 5) {
    if (osc) {
      osc.stop();
    }
    osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    osc.addEventListener("ended", stop);
    osc.type = "sine";

    osc.frequency.setValueAtTime(pulseHz, audioCtx.currentTime);
    const panner = new PannerNode(audioCtx);
    panner.refDistance = 1;

    panner.positionZ.setValueAtTime(
      audioCtx.currentTime,
      audioCtx.currentTime + NOTE_LENGTH
    );
    panner.positionZ.linearRampToValueAtTime(
      Z_DISTANCE,
      audioCtx.currentTime + NOTE_LENGTH
    );

    osc.connect(panner).connect(audioCtx.destination);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + NOTE_LENGTH);
    playing = true;
  }

  function stop() {
    if (osc) {
      // osc.stop();
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
  on:mousedown={() => play()}
  on:mouseup={stop}
  on:keydown={keyPlay}
  on:keyup={keyStop}
  on:touchstart={() => play()}
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
