<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import panorama from "$lib/assets/panorama.webp";
  import logotext from "$lib/assets/logo-text.webp";
  import Panel from "$lib/Components/Panel.svelte";
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
</script>

<Navbar/>

<!-- First Panel -->
<div class="absolute min-h-screen w-screen text-center text-neutral-content py-10" style="background-image: url({panorama})">
  <div class="relative mx-5 xl:m-auto max-w-6xl" style="top:100px">
    <h1>
      <div class="text-7xl font-light">Build Sustainable Services with</div>
      <img class="my-5 mx-auto max-h-14" src={logotext} alt="CAPANDA">
    </h1>
    <p class="text-xl mb-5">Through hands-on Corporate leadership, CAPANDA will advance your Product, Program, Business-Process, and Software Asset Management needs by applying experience in sustainable digital architecture via service delivery principles & best practices</p>
    <button class="btn btn-secondary">Hire Us</button>
  </div>
</div>

<Panel
  imageUrl="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
  header="Box Office News!"
  text="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
  top={viewportHeight}
  bgColorClass="bg-capanda-blue"
  textColorClass="text-white"
/>

<Panel
  imageUrl="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
  header="Box Office News!"
  text="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
  top={viewportHeight*2}
  bgColorClass="bg-capanda-grey"
  textColorClass="text-black"
  imageRight=true
/>