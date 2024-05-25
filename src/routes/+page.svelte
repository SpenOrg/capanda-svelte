<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import panorama from "$lib/assets/panorama.webp";
  import logotext from "$lib/assets/logo-text.webp";
  import {onMount} from "svelte";

  let viewportHeight = 0;

  function updateviewportHeight() {
    viewportHeight = window.innerHeight;
  }

  // Use onMount to get the initial viewport size
  onMount(() => {
    updateviewportHeight();
    // Add event listener to update size on window resize
    window.addEventListener('resize', updateviewportHeight);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', updateviewportHeight);
    };
  });

  $: console.log(viewportHeight);
</script>

<Navbar/>

<!-- First Panel -->
<div class="absolute min-h-screen w-screen text-center text-neutral-content py-10" style="background-image: url({panorama});">
  <h1>
    <div class="text-7xl font-light">Build Sustainable Services with</div>
    <img class="my-5 mx-auto max-h-14" src={logotext} alt="CAPANDA">
  </h1>
  <p class="text-xl mb-5">Through hands-on Corporate leadership, CAPANDA will advance your Product, Program, Business-Process, and Software Asset Management needs by applying experience in sustainable digital architecture via service delivery principles & best practices</p>
  <button class="btn btn-secondary">Hire Us</button>
</div>

<!-- Second Panel -->
<div class="absolute min-h-screen w-screen bg-capanda-blue text-white py-10" style="top:{viewportHeight * 1}px">
  <div class="m-auto max-w-fit flex flex-col lg:flex-row items-center">
    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" />
    <div class="mt-5 lg:ml-10 lg:mt-0 text-center lg:text-left">
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>