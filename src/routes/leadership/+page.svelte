<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import leadershipImg from "$lib/assets/leadership.webp";
    import Panel from "$lib/components/Panel.svelte";
    import PanelPlaceholder from "$lib/components/PanelPlaceholder.svelte"
    import VisibilityHandler from "$lib/components/VisibilityHandler.svelte"
    import BackgroundColorHandler from "$lib/components/BackgroundColorHandler.svelte";
</script>

<BackgroundColorHandler/>

<Navbar/>

<PanelPlaceholder/>
<PanelPlaceholder/>

<Panel
  imageUrl={leadershipImg}
  header="We Lead the Way"
  text={["Through recognition that demonstrates hands-on experience & results, real-world delivery has proven that we are more than just words","Through all aspects of the system development & product lifecycle, and via extensive experience in the development of corporate architecture, systems, solutions, & programs, your organization can harness the value of sustainability", "Via hands-on expertise throughout the systems development lifecycle, your organization can reap the reward of senior Project Leadership, Human Resource Management, Financial Management, Change Management, and a wealth of additional key experience"]}
  bgColorClass="bg-capanda-grey"
  textColorClass="text-black"
  imageRight=true
/>

<VisibilityHandler/>

<PanelPlaceholder/>
<PanelPlaceholder/>