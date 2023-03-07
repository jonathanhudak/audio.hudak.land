import { writable } from "svelte/store";
import { onDestroy } from "svelte";
export const currentKeys = writable([]);
export const notes = writable([]);
