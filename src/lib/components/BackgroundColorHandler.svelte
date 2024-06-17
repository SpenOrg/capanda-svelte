<script>
    import { onMount } from 'svelte';
    import { transitionColor } from "$lib/store.js";

    let panel;
    let previousColor;

    onMount(() => {
        transitionColor.subscribe(value => {
            previousColor = value;
        })

        setTimeout(() => {
            document.body.style.backgroundColor = previousColor; //Set background color to previous panel's colour

            panel = document.querySelectorAll(".panel")[0];
            setBodyColor();
        }, 10);
    });

    function setBodyColor() {
        if (typeof document === 'undefined') return; // Ensure this runs only in the browser

        const compStyle = window.getComputedStyle(panel);
        const currentColor =  compStyle.getPropertyValue("background-color");
        transitionColor.set(currentColor);

        document.body.style.backgroundColor = currentColor;
    }
</script>

<style>
    :global(body) {
        /* same as .transition-colors from tailwind */
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }
</style>
  