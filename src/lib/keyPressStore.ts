import { writable, derived } from "svelte/store";
import Note from "@tonaljs/note";
export const currentKeys = writable([]);
export const notes = writable([]);
export const playedFrequencies = derived(notes, ($notes) =>
  $notes.map(Note.freq)
);

export const audioCtx = new AudioContext();

const Z_DISTANCE = 20;
const NOTE_LENGTH = 0;

const oscMap = new Map();

export function play(frequency) {
  stop(frequency);
  try {
    const osc = audioCtx.createOscillator();
    oscMap.set(frequency, osc);
    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    osc.addEventListener("ended", stop);
    osc.type = "sine";

    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
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
  } catch (e) {
    console.info(e);
    stop(frequency);
  }
}

export function stop(frequency) {
  if (oscMap.has(frequency)) {
    oscMap.get(frequency).stop();
    oscMap.delete(frequency);
  }
}
