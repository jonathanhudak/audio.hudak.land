<script lang="ts">
  export let audioCtx;
  export let amp;
  export let initialGain;

  amp.gain.setValueAtTime(initialGain, audioCtx.currentTime);

  function handleChange(e) {
    let nextGainValue = e.target.value / 100;
    console.log("nextGainValue", nextGainValue);
    amp.gain.setValueAtTime(nextGainValue, audioCtx.currentTime);
  }
</script>

<label for="gain">Gain</label>
<input
  id="gain"
  type="range"
  on:change={handleChange}
  value={amp.gain.value * 100}
/>

<style>
</style>
