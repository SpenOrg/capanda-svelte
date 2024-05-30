<script>
    import { onMount } from 'svelte';
    import { panelInstanceCount, panelVisibility } from '$lib/store.js';

    export let imageUrl, header, text = [], bgColorClass, textColorClass, imageRight = false;
    let panelTop, panelBottom, topVisible, bottomVisible, panel, panelNumber;

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
            panelVisibility[0].top = topVisible;
            panelVisibility[0].bottom = bottomVisible;
        });
    }

    onMount(() => {
        panelInstanceCount.update(n => panelNumber = n + 1);
        panelVisibility[0] = { top: false, bottom: false };

        const observer = new IntersectionObserver(handleVisibilityChange, {
            root: null, // Observes changes relative to the viewport
            threshold: 0.1 // 10% of the item is visible
        });

        setTimeout(() => {
            let panel = panelTop.closest(".panel");
            panel.style.opacity = 100;
        }, 10);

        observer.observe(panelTop);
        observer.observe(panelBottom);

        return () => {
            observer.unobserve(panelTop);
            observer.unobserve(panelBottom);
        };
    });
</script>

<!-- Panel starts out transparent for a smooth transition -->
<div class="panel min-h-screen w-screen {bgColorClass} {textColorClass} transition-opacity opacity-0 py-10">
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