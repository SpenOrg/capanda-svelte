<script>
    import { panelInstanceCount, panelVisibility } from '$lib/store.js';
    import { onMount } from 'svelte';

    let panelCount = 0;
    let panels = [];
    let panelsInitialized = false;

    $: panelCount = $panelInstanceCount;

    // Create an array with an element representing each panel
    function initializePanels() {
        panels = [];
        const panelElements = document.querySelectorAll(".panel");
        
        for (let i = 0; i <= panelCount; i++) {
            panels[i] = {
                element: panelElements[i],
                topVisible: false, // See setVisibilityProperties()
                bottomVisible: false,
                show() {
                    this.element.style.opacity = 100
                },
                hide() {
                    this.element.style.opacity = 0
                }
            };
        }
        panelsInitialized = true;
        setVisibilityProperties();
    }

    // Function to set visibility properties of panels
    function setVisibilityProperties() {
        if (panelsInitialized) {
            panels.forEach((panel, i) => {
                panel.topVisible = panelVisibility[i].top;
                panel.bottomVisible = panelVisibility[i].bottom;
            });
        }
    }

    function switchToPanel(panelIndex) {
        panels.forEach((panel, i) => {
            if (i === panelIndex) {
                panel.show();
            } else {
                panels.hide();
            }
        });
    }

    // Debounce function to limit the rate of function calls
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    onMount(() => {
        initializePanels();

        const debouncedSetVisibilityProperties = debounce(setVisibilityProperties, 100);

        // Re-check if the panels are visible when the user scrolls or resizes
        document.addEventListener("scroll", debouncedSetVisibilityProperties);
        document.addEventListener("resize", debouncedSetVisibilityProperties);

        // Clean up event listeners on component unmount
        return () => {
            document.removeEventListener("scroll", debouncedSetVisibilityProperties);
            document.removeEventListener("resize", debouncedSetVisibilityProperties);
        };
    });

    // Re-initialize panels when panelCount changes
    $: if (panelCount > 0) {
        initializePanels();
    }
</script>
