<script>
    import { panelInstanceCount, panelVisibility } from '$lib/store.js';
    import { onMount } from 'svelte';

    let panelCount = 0;
    let panels = [];
    let panelsInitialized = false;

    $: panelCount = $panelInstanceCount;

    //Create an array with an element representing each panel
    function initializePanels() {
        panels = [];
        const panelElements = document.querySelectorAll(".panel");
        
        for (let i = 0; i < panelCount; i++) {
            panels[i] = {
                element: panelElements[i],
                topVisible: false, //See setVisibilityProperties()
                bottomVisible: false
            };
        }
        panelsInitialized = true;
        setVisibilityProperties();
    }

    function setVisibilityProperties() {
        if (panelsInitialized) {
            panels.forEach((panel, i) => {
                panel.topVisible = panelVisibility[i].top;
                panel.bottomVisible = panelVisibility[i].bottom;
            });
        }
    }

    onMount(() => {
        initializePanels();

        //Re-check if the panels are visible when the user scrolls or resizes
        document.addEventListener("scroll", () => {
            if (panelsInitialized) {
                setVisibilityProperties();
            }
        });

        document.addEventListener("resize", () => {
            if (panelsInitialized) {
                setVisibilityProperties();
            }
        });
    });

    // Re-initialize panels when panelCount changes
    $: if (panelCount > 0) {
        initializePanels();
    }

</script>