<script>
    import { onMount } from 'svelte';
    import { panelInstanceCount, panelVisibility } from '$lib/store.js';

    export let imageUrl, header, text = [], bgColorClass, textColorClass, top, imageRight = false;
    let panelTop, panelBottom, topVisible, bottomVisible, panel, panelNumber;

    // const show = () => panel.style.opacity = 100;
    // const hide = () => panel.style.opacity = 0;

    function handleVisibilityChange(entries) {
        entries.forEach(entry => {
            switch(entry.target.className) {
                case "panel-top":
                    topVisible = entry.isIntersecting;
                    break;
                case "panel-bottom":
                    bottomVisible = entry.isIntersecting;
                    break;
            }
            panelVisibility[panelNumber].top = topVisible;
            panelVisibility[panelNumber].bottom = bottomVisible;
        });
    }

    onMount(() => {
        panelInstanceCount.update(n => panelNumber = n + 1);
        panelVisibility[panelNumber] = { top: false, bottom: false };

        const observer = new IntersectionObserver(handleVisibilityChange, {
            root: null, // Observes changes relative to the viewport
            threshold: 0.1 // 10% of the item is visible
        });

        observer.observe(panelTop);
        observer.observe(panelBottom);

        return () => {
            observer.unobserve(panelTop);
            observer.unobserve(panelBottom);
        };
    });
</script>

<div class="panel absolute min-h-screen w-screen {bgColorClass} {textColorClass} transition-opacity py-10" style="top:{top}px">
    <div class="relative mx-5 xl:m-auto max-w-6xl" style="top:100px">
        <div class="panel-top" bind:this={panelTop}></div>
        <div class="m-auto max-w-fit flex flex-col {imageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center">
            <img src={imageUrl} class="max-w-sm" alt=""/>
            <div class="mt-5 lg:ml-10 lg:mt-0 text-center lg:text-left">
                <h1 class="text-5xl font-bold">{header}</h1>
                <div class="pt-6">
                    {#each text as paragraph}
                        <p class="text-lg py-2">{paragraph}</p>
                    {/each}
                </div>
            </div>
        </div>
        <div class="panel-bottom" bind:this={panelBottom}></div>
    </div>
</div>
