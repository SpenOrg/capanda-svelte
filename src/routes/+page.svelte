<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import panorama from "$lib/assets/panorama.webp";
  import logotext from "$lib/assets/logo-text.webp";


</script>

<Navbar/>

<!-- First Panel -->
<div class="hero min-h-screen" style="background-image: url({panorama});">
  <div class="hero-overlay row-auto bg-opacity-0"></div>
  <div class="hero-content text-center text-neutral-content">
    <div>
      <h1>
        <div class="text-7xl font-light">Build Sustainable Services with</div>
        <img class="my-5 mx-auto max-h-14" src={logotext} alt="CAPANDA">
      </h1>
      <p class="text-xl mb-5">Through hands-on Corporate leadership, CAPANDA will advance your Product, Program, Business-Process, and Software Asset Management needs by applying experience in sustainable digital architecture via service delivery principles & best practices</p>
      <button class="btn btn-secondary">Hire Us</button>
    </div>
  </div>
</div>

<!-- Second Panel -->
<div class="hero min-h-screen bg-capanda-blue text-white">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>