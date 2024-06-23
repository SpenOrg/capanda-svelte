<script>
    import { base } from '$app/paths';
    import { onMount, tick } from 'svelte';
    import { goto } from "$app/navigation";
    import { panelVisibility } from "$lib/store.js";

    let panel;
    let panelOrder = [`${base}/value`, `${base}/leadership`, `${base}/dedication`, `${base}/focus`];

    let currentPanelIndex;

    function initializePanel() {
        currentPanelIndex = panelOrder.indexOf(window.location.pathname);

        panel = {
            element: document.querySelector(".panel"),
            topVisible: false, // See setVisibilityProperties()
            bottomVisible: false,
        };
        setVisibilityProperties();
    }

    // Function to set visibility properties of panels
    async function setVisibilityProperties() {
        await tick();
        panel.topVisible = panelVisibility[0].top;
        panel.bottomVisible = panelVisibility[0].bottom;

    }

    // Debounce function to limit the rate of function calls
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    async function handleScrollResize() {
        await setVisibilityProperties();

        currentPanelIndex = panelOrder.indexOf(window.location.pathname);

        if (!panel.topVisible && panel.bottomVisible && panelOrder[currentPanelIndex+1] !== undefined) {
            goto(panelOrder[currentPanelIndex+1], {noScroll: true, replaceState: true});
        } else if (!panel.topVisible && !panel.bottomVisible && panelOrder[currentPanelIndex-1] !== undefined) {
            goto(panelOrder[currentPanelIndex-1], {noScroll: true, replaceState: true});
        }
    }

    onMount(() => {
        initializePanel();

        const debouncedHandleScrollResize = debounce(handleScrollResize, 1);

        // Re-check if the panels are visible when the user scrolls or resizes
        document.addEventListener("scroll", debouncedHandleScrollResize);
        document.addEventListener("resize", debouncedHandleScrollResize);

        // Clean up event listeners on component unmount
        return () => {
            document.removeEventListener("scroll", debouncedHandleScrollResize);
            document.removeEventListener("resize", debouncedHandleScrollResize);
        };
    });
</script>
