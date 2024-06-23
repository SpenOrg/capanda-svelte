<script>
    import valueImg from "$lib/assets/value.webp";
    import Panel from "$lib/components/Panel.svelte";
    import PanelPlaceholder from "$lib/components/PanelPlaceholder.svelte"
    import VisibilityHandler from "$lib/components/VisibilityHandler.svelte"
    import BackgroundColorHandler from "$lib/components/BackgroundColorHandler.svelte";
</script>

<BackgroundColorHandler/>

<PanelPlaceholder/>

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
  bgColorClass="bg-capanda-blue"
  textColorClass="text-white"
/>

<VisibilityHandler/>

<PanelPlaceholder/>
<PanelPlaceholder/>
<PanelPlaceholder/>