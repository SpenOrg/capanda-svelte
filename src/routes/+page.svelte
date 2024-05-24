<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import panorama from "$lib/assets/panorama.webp";
  import logotext from "$lib/assets/logo-text.webp";
</script>

<Navbar/>

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