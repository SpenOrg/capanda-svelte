<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import panorama from "$lib/assets/panorama.webp";
  import valueImg from "$lib/assets/value.webp";
  import leadershipImg from "$lib/assets/leadership.webp";
  import focusImg from "$lib/assets/focus.webp";
  import dedicationImg from "$lib/assets/dedication.webp";
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
  imageUrl={valueImg}
  header="Our Value"
  text={[
    "Sustainability is our Mantra",
    "Whether through the delivery of proven digital architectures, or via Organizational Change Management practices (including everything in-between), sustainable practices will ensure long-term value for your organization",
    "Through the delivery of proven forward-looking practices, your organization will recognize the value by eliminating the typical cycle of repeating itself",
    "Don’t relive your old ways by seeking heroes to keep your head above water – True value comes from sustainable & proven architectural practices that bind themselves to your organization’s DNA",
    "Digital transformation is more than just changing or upgrading, true value is the result of applying proven practices towards sustainable services that remain nimble to adapt to the ever-changing digital world"
  ]}
  top={viewportHeight}
  bgColorClass="bg-capanda-blue"
  textColorClass="text-white"
/>

<Panel
  imageUrl="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
  header="Box Office News!"
  text={["Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."]}
  top={viewportHeight*2}
  bgColorClass="bg-capanda-grey"
  textColorClass="text-black"
  imageRight=true
/>