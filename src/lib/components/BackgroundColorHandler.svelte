<script>
    import { onMount } from 'svelte';

    let panel;

    onMount(() => {
        panel = document.querySelectorAll(".panel")[0];
        setBodyColor();
    });

    function setBodyColor() {
        if (typeof document === 'undefined') return; // Ensure this runs only in the browser

        const compStyle = window.getComputedStyle(panel);
        const currentColor =  compStyle.getPropertyValue("background-color");

        document.body.style.backgroundColor = currentColor;
    }
</script>

<style>
    :global(body) {
        /* same as .transition-opacity from tailwind */
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }
</style>
  