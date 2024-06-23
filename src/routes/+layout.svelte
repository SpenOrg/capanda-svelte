<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import { afterNavigate } from '$app/navigation';
  import { onMount, tick } from 'svelte';
  import { page } from '$app/stores';
  import { get } from 'svelte/store';


  //Scroll to the specific Panel if the user clicks on a link in the header

  let navigatedByLink = false;

  const handleLinkClick = () => navigatedByLink = true;

  afterNavigate(async () => {
    if (navigatedByLink) {
      await tick();

      setTimeout(() => {
        //Get the id of the target element from the URL
        const currentPage = get(page);
        const path = currentPage.url.pathname.split('/').pop(); // Get the last segment of the path
        const targetElementId = path ? `#${path}` : '#'; // Construct the target element id
        const targetElement = document.querySelector(targetElementId);

        if (targetElement) {
          // Calculate the position to scroll to
          const elementRect = targetElement.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.scrollY;
          const middleOfScreen = window.innerHeight / 2;
          const offsetPosition = absoluteElementTop - middleOfScreen + (elementRect.height / 2);

          //Scroll into position
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        navigatedByLink = false;
      }, 100);
    }
  });

  onMount(() => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });
  });
</script>

<Navbar/>

<slot />