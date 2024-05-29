<script>
    import { panelInstanceCount, panelVisibility, currentPanel } from '$lib/store.js';
    import { onMount, tick } from 'svelte';

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
        setPanelPositions();
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
                currentPanel.set(i);
                panel.show();
            } else {
                panel.hide();
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

    function handleScroll() {
        setVisibilityProperties();
        if (panelsInitialized) {
            panels.forEach((panel, i) => {
                if (panel.topVisible) {
                    switchToPanel(i);
                    return;
                }
            });
        } 
    }

    function handleResize() {
        handleScroll();
        setPanelPositions();
    }

    async function setPanelPositions() {
        if (panelsInitialized) {
            await tick();
            let panelBottomY = []
            panels.forEach((panel, i) => {
                let bottomRect = panel.element.querySelector(".panel-bottom").getBoundingClientRect();
                panelBottomY[i] = bottomRect.top;
                console.log(panelBottomY);
                
                if (i > 0) {
                    panel.element.style.top = `${panelBottomY[i-1]}px`
                }
            });
        }
    }

    onMount(() => {
        initializePanels();

        const debouncedHandleScroll = debounce(handleScroll, 10);
        const debouncedHandleResize = debounce(handleResize, 100);

        // Re-check if the panels are visible when the user scrolls or resizes
        document.addEventListener("scroll", debouncedHandleScroll);
        document.addEventListener("resize", debouncedHandleResize);

        // Clean up event listeners on component unmount
        return () => {
            document.removeEventListener("scroll", debouncedHandleScroll);
            document.removeEventListener("resize", debouncedHandleResize);
        };
    });

    // Re-initialize panels when panelCount changes
    $: if (panelCount > 0) {
        initializePanels();
    }
</script>
