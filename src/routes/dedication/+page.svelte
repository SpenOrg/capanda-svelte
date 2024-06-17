<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import dedicationImg from "$lib/assets/dedication.webp";
    import Panel from "$lib/Components/Panel.svelte";
    import PanelPlaceholder from "$lib/Components/PanelPlaceholder.svelte"
    import VisibilityHandler from "$lib/Components/VisibilityHandler.svelte"
    import BackgroundColorHandler from "../../lib/components/BackgroundColorHandler.svelte";
</script>

<BackgroundColorHandler/>

<Navbar/>

<PanelPlaceholder/>
<PanelPlaceholder/>

<Panel
  imageUrl={dedicationImg}
  header="Our Dedication"
  text={["Through the delivery of numerous corporate-level Federal Government requirements such as International Service Delivery, departmental Software Asset Management Program, and Product Management, Millions of dollars of savings to the tax-payer have been realized","Through our continuing focus and refinement, your organization will value from similar savings through our advice to your Solution & Program teams", "Beyond any of your immediate needs, and through concentration on Architecture and Solution Advisory services in support of sustainable Business-process automation, Object-Oriented Systems Design & Development, and corporate Program delivery, we are focused to help you establish a sustainable future"]}
  bgColorClass="bg-capanda-dark-grey"
  textColorClass="text-white"
/>

<VisibilityHandler/>

<PanelPlaceholder/>