<script>
    import focusImg from "$lib/assets/focus.webp";
    import Panel from "$lib/components/Panel.svelte";
    import PanelPlaceholder from "$lib/components/PanelPlaceholder.svelte"
    import VisibilityHandler from "$lib/components/VisibilityHandler.svelte"
    import BackgroundColorHandler from "$lib/components/BackgroundColorHandler.svelte";
</script>

<BackgroundColorHandler/>

<PanelPlaceholder/>
<PanelPlaceholder/>
<PanelPlaceholder/>
<PanelPlaceholder/>

<Panel
  id="focus"
  imageUrl={focusImg}
  header="Advanced Focus"
  text={["Through further corporate focus, and as witnessed throughout numerous Public & Private sector organizations, you will realize value from our extensive experience to resolve ongoing Software Asset Management challenges", "Whether challenges involve effective policy enactment or advanced program delivery, real-world experience will be applied to advance your organization’s maturity","By continuing to apply hands-on experience, we are focused to help you:","• Establish Centres of Expertise through industry best practices;", "• Save organization & tax-payer dollars by promoting component reuse and data sharing utilizing environment models for the consolidation of Application layer services; and", "• Deliver advanced presentation/leadership direction to your organization’s Senior Management, IT groups, and Public Forums"]}
  bgColorClass="bg-capanda-grey"
  textColorClass="text-black"
  imageRight=true
/>

<VisibilityHandler/>