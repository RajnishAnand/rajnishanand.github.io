<script>
  let showMenu = false;
  function toggleMenu() {
    showMenu = !showMenu;
  }
</script>


<nav class="navbar">
  <img src="/icon.svg" alt="icon" />
  <span class="navbar-gap"></span>
  <button class="navbar-menu-icon material-symbols-outlined" on:click={toggleMenu}> segment </button>
  <div class="menu" class:menu-visible={showMenu} >
    <button class="navbar-menu-icon-close material-symbols-outlined" on:click={toggleMenu}> close </button>
    <a href="#projects">#projects</a>
    <a href="#contact">#contact</a>
    <a href="https://github.com/rajnishanand/rajnishanand.github.io">↗GitHub</a>
  </div>
</nav>


<style>
  .navbar {
    display: flex;
    color: var(--text-primary);
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    font-family: 'JetBrains Mono', monospace;
    gap: 20px;
  }
 
  .navbar-gap {
    border-top:solid 1.5px var(--text-secondary);
    flex-grow: 1;
    visibility: hidden;
  }
 
  .menu{
    display: none;
    z-index: 2;

    gap: 20px;
    position: fixed;
    top: 5px ;
    right:5px;
    flex-direction: column;
    background-color: var(--bg-color);
    border: solid 1px var(--border-color);
    padding: 50px 25px;
  }

  .menu-visible{ 
    display: flex;
    /* animation: slide-in 0.2s ease-in-out; */
  }
  @keyframes slide-in {
    0% { transform: translateX(100%); }
    100% { transform: translateX(0); }
  }

  .navbar-menu-icon{
    background-color: inherit;
    border:0;
    outline:0;
  }
  .navbar-menu-icon-close{
    background-color: inherit;
    position: absolute;
    right: 10px;
    top: 10px;
    border: solid 1px var(--border-color);
    /* z-index: 3; */
  }

  @media (min-width: 350px) {
    .menu {
      display: flex;
      position: initial;
      flex-direction: row;
      background-color: transparent;
      padding: 0;
      border:0;
    }
    .navbar-gap{visibility: visible;}
    .navbar-menu-icon, .navbar-menu-icon-close{
      display: none;
    }
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
