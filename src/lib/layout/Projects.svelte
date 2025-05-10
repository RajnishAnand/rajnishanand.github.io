<script>
  const projects = [
    {
      title: 'Glitchi',
      description: 'An Open Source Discord Bot featuring developer tools and utility.',
      stack: ['TypeScript'],
      github: 'https://github.com/rajnishanand/glitchi',
    },
    {
      title: 'Mobile Paint Webapp',
      description: 'A paint web app for mobile devices.',
      stack: ['HTML/CSS', 'JS', 'JQuery'],
      github: 'https://github.com/rajnishanand/paint',
      live: 'https://rajnishanand.github.io/paint/',
    },
    {
      title: 'Quick Chat',
      description: 'Scocial Chatting web based platform.\n(under-development)',
      stack: ['HTML/CSS', 'JS', 'NodeJs', 'Socket.io', 'Express'],
      // github: 'https://github.com/rajnishanand/quick-chat',
    },
    {
      title: 'Archive: MiniProjects',
      description: 'A collection of old-mini web based projects, designed for mobiles.',
      stack: ['HTML/CSS', 'JS'],
      // github: ''
      live: "https://rajnishanand.github.io/miniprojects/",
    }
  ];
</script>


<section id="projects">
  <h2 class="section-title"> &gt projects</h2>
  <div class="project-list">

    {#each projects as project}
      <div class="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div class="tags">
          {#each project.stack as tech}
            <span class="tag">{tech}</span>
          {/each}
        </div>
        <div class="links">
          {#if project.github}
            <a href={project.github} target="_blank" rel="noopener">GitHub ↗</a>
          {/if}
          {#if project.live}
            <a href={project.live} target="_blank" rel="noopener">Live ↗</a>
          {/if}
        </div>
      </div>
    {/each}

  </div>
</section>


<style>
  #projects {
    padding: 2rem;
    background-color: var(--bg-color);
    color: var(--text-primary);
    max-width: min-max(100%, 900px);
    margin: 0 auto;
  }
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  
  .project-list {
    display: grid;
    gap: 1.5rem;
  }

  @media (min-width: 600px) {
    .project-list {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
  
  .project-card {
    background-color: var(--code-bg);
    padding: 1.25rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
  }
  
  .project-card h3 {
    font-weight: 400;
    margin-bottom: 0.5rem;
    color: var(--accent-color);
  }
  
  .tags {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  
  .tag {
    display: inline-block;
    background-color: var(--border-color);
    padding: 0.2rem 0.6rem;
    font-size: 0.85rem;
    border-radius: 4px;
    color: var(--text-secondary);
  }
  
  .links {
    margin-top: 1rem;
  }

  .links a {
    margin-right: 1rem;
    font-size: 0.9rem;
    color: var(--accent-color);
  }
  
</style>
