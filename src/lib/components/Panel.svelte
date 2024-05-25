<script>
    export let imageUrl;
    export let header;
    export let text;
    export let top;
</script>

<div class="absolute min-h-screen w-screen bg-capanda-blue text-white py-10" style="top:{top}px">
    <div class="relative mx-5 xl:m-auto max-w-6xl" style="top:100px">
        <div class="m-auto max-w-fit flex flex-col lg:flex-row items-center">
        <img src={imageUrl} class="max-w-sm rounded-lg shadow-2xl" />
        <div class="mt-5 lg:ml-10 lg:mt-0 text-center lg:text-left">
            <h1 class="text-5xl font-bold">{header}</h1>
            <p class="py-6">{text}</p>
            <button class="btn btn-primary">Get Started</button>
        </div>
        </div>
    </div>
</div>