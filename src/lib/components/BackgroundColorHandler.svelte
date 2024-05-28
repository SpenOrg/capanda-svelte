<script>
	import { onMount, tick } from 'svelte';
    import { currentPanel } from "$lib/store.js";

    let lastPanel;

    onMount(() => {
        const panelElements = document.querySelectorAll(".panel")
        const lastPanelIndex = panelElements.length - 1;
        lastPanel = panelElements[lastPanelIndex];
        setBodyHeight();
    });

    //Set the height of the body so it reaches the bottom of the page
    async function setBodyHeight() {
        await tick(); //Wait for all elements to be rendered
        let rect = lastPanel.getBoundingClientRect();
        let pageBottom = rect.top + rect.height;

        document.body.style.height = `${pageBottom}px`;
    }

    function setBodyColor(panelIndex) {
        if (typeof document === 'undefined') return; // Ensure this runs only in the browser

        const currentPanel = document.querySelectorAll(".panel")[panelIndex];
        const compStyle = window.getComputedStyle(currentPanel);
        const currentColor = compStyle.getPropertyValue("background-color");

        document.body.style.backgroundColor = currentColor;
    }

    $: setBodyColor($currentPanel);

</script>

<style>
    :global(body) {
        /* same as .transition-opacity from tailwind */
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }
</style>
  