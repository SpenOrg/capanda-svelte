import { writable } from 'svelte/store';

export const panelInstanceCount = writable(-1); //Start at -1 so the first panel starts at 0
export const panelVisibility = writable({});
export const currentPanel = writable(0);
export const transitionColor = writable("rgb(14, 44, 87)");