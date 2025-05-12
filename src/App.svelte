<script lang="ts">
    import MidWave from './components/MidWave.svelte';
  import Topwave from './components/Topwave.svelte';
  import Certifications from './lib/layout/Certifications.svelte';
  import Contact from './lib/layout/Contact.svelte';
  import Footer from './lib/layout/Footer.svelte';
  import Navbar from './lib/layout/Navbar.svelte';
  import Profile from './lib/layout/Profile.svelte';
  import Projects from './lib/layout/Projects.svelte';
  import Skills from './lib/layout/Skills.svelte';
</script>



<div class="container">

  <header>
    <Topwave />
    <Navbar/>
    <Profile/>
  </header>

  <main>
    <MidWave/>
    <Projects/>
    <Skills/>
    <!-- <Certifications/> -->
    <Contact/>
  </main>

  <Footer/>
  
</div>

