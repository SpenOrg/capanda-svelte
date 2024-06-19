<script>
    import { onMount } from 'svelte';
    import { panelInstanceCount, panelVisibility } from '$lib/store.js';

    export let imageUrl, imageUrl2 = "", imageUrl2Alt = "", header, text = [], bgColorClass = "", textColorClass = "", imageRight = false, topPanel = false;
    let panelTop, panelBottom, topVisible, bottomVisible;

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

{#if topPanel}
    <div class="panel absolute min-h-screen w-screen text-center text-neutral-content py-10" style="background-image: url({imageUrl})">
        <div class="relative mx-5 xl:m-auto max-w-6xl" style="top:100px">
            <div class="panel-top" bind:this={panelTop}></div>
            <h1>
                <div class="text-7xl font-light">{header}</div>
                <img class="my-5 mx-auto max-h-14" src={imageUrl2} alt={imageUrl2Alt}>
            </h1>
            <p class="text-xl mb-5">{text}</p>
            <div class="panel-bottom" bind:this={panelBottom}></div>
        </div>
    </div>
{:else}
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
{/if}