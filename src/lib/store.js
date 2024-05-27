import { writable } from 'svelte/store';

export const panelInstanceCount = writable(0);
export const panelVisibility = writable({});