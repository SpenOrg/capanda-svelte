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
	import VisibilityHandler from "../lib/components/VisibilityHandler.svelte";

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
  imageUrl={leadershipImg}
  header="We Lead the Way"
  text={["Through recognition that demonstrates hands-on experience & results, real-world delivery has proven that we are more than just words","Through all aspects of the system development & product lifecycle, and via extensive experience in the development of corporate architecture, systems, solutions, & programs, your organization can harness the value of sustainability", "Via hands-on expertise throughout the systems development lifecycle, your organization can reap the reward of senior Project Leadership, Human Resource Management, Financial Management, Change Management, and a wealth of additional key experience"]}
  top={viewportHeight*2}
  bgColorClass="bg-capanda-grey"
  textColorClass="text-black"
  imageRight=true
/>

<Panel
  imageUrl={dedicationImg}
  header="Our Dedication"
  text={["Through the delivery of numerous corporate-level Federal Government requirements such as International Service Delivery, departmental Software Asset Management Program, and Product Management, Millions of dollars of savings to the tax-payer have been realized","Through our continuing focus and refinement, your organization will value from similar savings through our advice to your Solution & Program teams", "Beyond any of your immediate needs, and through concentration on Architecture and Solution Advisory services in support of sustainable Business-process automation, Object-Oriented Systems Design & Development, and corporate Program delivery, we are focused to help you establish a sustainable future"]}
  top={viewportHeight*3}
  bgColorClass="bg-capanda-dark-grey"
  textColorClass="text-white"
/>

<Panel
  imageUrl={focusImg}
  header="Advanced Focus"
  text={["Through further corporate focus, and as witnessed throughout numerous Public & Private sector organizations, you will realize value from our extensive experience to resolve ongoing Software Asset Management challenges", "Whether challenges involve effective policy enactment or advanced program delivery, real-world experience will be applied to advance your organization’s maturity","By continuing to apply hands-on experience, we are focused to help you:","• Establish Centres of Expertise through industry best practices;", "• Save organization & tax-payer dollars by promoting component reuse and data sharing utilizing environment models for the consolidation of Application layer services; and", "• Deliver advanced presentation/leadership direction to your organization’s Senior Management, IT groups, and Public Forums"]}
  top={viewportHeight*4}
  bgColorClass="bg-capanda-grey"
  textColorClass="text-black"
  imageRight=true
/>

<VisibilityHandler/>