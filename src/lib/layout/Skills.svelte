<script>
  const skills = [
    "typescript", 
    "javascript",
    "svelte",
    "react",
    "nodejs",
    "cplusplus",
    "python",

    "html5",
    "css3",
    "sass",
    
    "firebase",
    "mongodb",

    "git",
    "vscode",
    "neovim",
    "lua",
    "bash",
    "powershell",

    "archlinux",
    "canva",
  ];

  // Duplicate the skills array to create a seamless loop
  const duplicatedSkills = [...skills, ...skills];
  document.documentElement.style.setProperty('--skill-length', ""+skills.length);
</script>

<!-- Include DevIcon CSS -->
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
</svelte:head>

<div class="skills-container">
  <div class="skills-track">
    {#each duplicatedSkills as skill}
      <div class="skill-item">
        <i class="devicon-{skill}-plain"></i>
      </div>
    {/each}
  </div>
</div>

<div class="skills-container">
  <div class="skills-track animation-reverse">
    {#each duplicatedSkills as skill}
      <div class="skill-item">
        <i class="devicon-{skill}-plain"></i>
      </div>
    {/each}
  </div>
</div>



<style>
  .skills-container {
    width: 100%;
    background-color: var(--code-bg-transparency);
    /* background-color: var(--code-bg); */
    padding: 10px 0;
    overflow-x: hidden;
    margin: 10px 0;
  }
  .skills-track {
    display: flex;
    position: relative;
    animation: scroll 20s linear infinite;
    /* padding: 1rem 0; */
  }
  .animation-reverse {
    animation: scroll 20s linear infinite reverse;
  }
  .skill-item {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    /* height: 70px; */
    aspect-ratio: 1;
    margin: 0 1rem;
    /* background-color: var(--code-bg); */
    /* background-color: #ffffff10; */
    /* background-color: var(--code-bg-transparency); */
    /* border-radius: 8px; */
    /* border: 1px solid var(--border-color); */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .skill-item i {
    font-size: 2rem;
    color: white;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-40px * var(--skill-length) - 2rem * var(--skill-length)));
    }
  }
</style>
