<script>
  import panorama from "$lib/assets/panorama.webp";
  import logotext from "$lib/assets/logo-text.webp";
  import Panel from "$lib/components/Panel.svelte";
  import PanelPlaceholder from "$lib/components/PanelPlaceholder.svelte";
  import BackgroundColorHandler from "$lib/components/BackgroundColorHandler.svelte";
  import VisibilityHandler from "$lib/components/VisibilityHandler.svelte";
</script>

<BackgroundColorHandler />

<Panel
  topPanel=true
  imageUrl={panorama}
  imageUrl2={logotext}
  imageUrl2Alt="CAPANDA"
  header="Build Sustainable Services with"
  text={["Through hands-on Corporate leadership, CAPANDA will advance your Product, Program, Business-Process, and Software Asset Management needs by applying experience in sustainable digital architecture via service delivery principles & best practices"]}
/>


<PanelPlaceholder/>
<PanelPlaceholder/>
<PanelPlaceholder/>
<PanelPlaceholder/>

<VisibilityHandler/>