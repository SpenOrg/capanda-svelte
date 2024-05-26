<script>
    import { onMount } from 'svelte';

    export let imageUrl;
    export let header;
    export let text = [];
    export let bgColorClass;
    export let textColorClass;
    export let top;
    export let imageRight = false;

    let panelTop;
    let panelBottom;
    let topVisible;
    let bottomVisible;

    function handleVisibilityChange(entries) {
        entries.forEach(entry => {
        let panelDiv = entry.target.closest(".panel");
        if (entry.isIntersecting) {
            if (entry.target.className == "panel-top") {
                topVisible = true;
            }
            if (entry.target.className == "panel-bottom") {
                bottomVisible = true;
            }

            if (topVisible && bottomVisible) {
                console.log(`Both top and bottom of ${header} visible`);
            }
        } else {
            if (entry.target.className == "panel-top") {
                topVisible = false;
            }
            if (entry.target.className == "panel-bottom") {
                bottomVisible = false;
            }

            if (!topVisible && !bottomVisible) {
                console.log(`Both top and bottom of ${header} NOT visible`);
            }            
        }
        });
    }

    onMount(() => {
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


<div class="panel absolute min-h-screen w-screen {bgColorClass} {textColorClass} py-10" style="top:{top}px">
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
