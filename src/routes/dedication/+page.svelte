<script>
    import dedicationImg from "$lib/assets/dedication.webp";
    import Panel from "$lib/components/Panel.svelte";
    import PanelPlaceholder from "$lib/components/PanelPlaceholder.svelte"
    import VisibilityHandler from "$lib/components/VisibilityHandler.svelte"
    import BackgroundColorHandler from "$lib/components/BackgroundColorHandler.svelte";
</script>

<BackgroundColorHandler/>

<PanelPlaceholder/>
<PanelPlaceholder/>
<PanelPlaceholder/>

<Panel
  id="dedication"
  imageUrl={dedicationImg}
  header="Our Dedication"
  text={["Through the delivery of numerous corporate-level Federal Government requirements such as International Service Delivery, departmental Software Asset Management Program, and Product Management, Millions of dollars of savings to the tax-payer have been realized","Through our continuing focus and refinement, your organization will value from similar savings through our advice to your Solution & Program teams", "Beyond any of your immediate needs, and through concentration on Architecture and Solution Advisory services in support of sustainable Business-process automation, Object-Oriented Systems Design & Development, and corporate Program delivery, we are focused to help you establish a sustainable future"]}
  bgColorClass="bg-capanda-dark-grey"
  textColorClass="text-white"
/>

<VisibilityHandler/>

<PanelPlaceholder/>