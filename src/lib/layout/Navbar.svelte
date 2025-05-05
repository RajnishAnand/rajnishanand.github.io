<script>
  const base = import.meta.env.BASE_URL;
</script>

<nav class="navbar">
  <img src="{base}/icon.svg" alt="icon" />
  <span class="navbar-gap"></span>
  <a href="#skills">#skills</a>
  <a href="#projects">#projects</a>
  <a href="#certifications">#certifications</a>
  <a href="#contact">#contact</a>
  <a href="#gh">🡕GitHub</a>
</nav>


<style>
  .navbar {
    display: flex;
    color: var(--text-primary);
    /* border-bottom: 1px solid var(--border-color); */
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    font-family: 'JetBrains Mono', monospace;
    gap: 20px;
  }
  
  .navbar-gap {
    border-top:solid 1.5px var(--border-color);
    flex-grow: 1;
  }
  
  .navbar a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  .navbar a:hover {
    color: var(--text-primary);
  }
</style>
