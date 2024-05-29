<script>
  import logo from "$lib/assets/logo.webp";
</script>

<div class="navbar fixed z-10 bg-capanda-light-grey 2xl:px-56 xl:px-28 lg:px-10">
  <div class="navbar-start">
    <a data-sveltekit-replacestate href="/"><img src={logo} alt="CAPANDA logo" width="248px" height="72px"></a>
  </div>
  <div class="navbar-center">
    <ul class="menu menu-horizontal max-lg:hidden lg:text-xl">
      <li class="hover:text-capanda-red"><a data-sveltekit-replacestate href="/value">Value</a></li>
      <li class="hover:text-capanda-red"><a data-sveltekit-replacestate href="/leadership">Leadership</a></li>
      <li class="hover:text-capanda-red"><a data-sveltekit-replacestate href="/dedication">Dedication</a></li>
      <li class="hover:text-capanda-red"><a data-sveltekit-replacestate href="/focus">Focus</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <ul class="pr-2 text-right max-sm:hidden">
      <li><a class="cursor-pointer">613-831-7630</a></li>
      <li><a class="cursor-pointer">info@capanda.ca</a></li>
    </ul>
    <a class="btn btn-error text-base">Contact Us</a>
  </div>
</div>