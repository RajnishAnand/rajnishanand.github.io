<script>
  // const base = import.meta.env.BASE_URL;
</script>


<style>
  .profile {
    user-select: none;
    pointer-events: none;
    margin-top: 2em;
    position: relative;
    height: 85vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .profile-text {
    position: relative;
    background: var(--bg-color);
    width: 100%;
    max-width: 30em;
    padding:0em 2em;
    margin-top:10vh;
    font-size: .9em;
    filter: blur(.3px);
    box-shadow: inset 0 0 0 9px black, inset 0 0 .2px 10px white;
    overflow: hidden;
  }
  .profile-text h1{
    /* font-weight: 100; */
    text-transform: uppercase;
    margin-top: .5em;
  }
  .profile-text h2 {
    color: var(--accent-color);
    font-weight: 100;
  }
  .profile-text p {
    color: var(--text-secondary);
  }

  .profile-image{
    height: 100%;
    z-index: -1;
    filter:opacity(.85) blur(.3px);
  }
  .profile-image img {
    height: 100%;
    /* max-width:100%; */
    position: relative;
  }

  @keyframes boxopen {
    0%{ height: 0; }
    30%{
      height: 0;
      box-shadow: inset 0 0 0 9px black, inset 0 0 0 10px white;
    }
  }
  @keyframes boxopen2 {
    0%{width: calc(100% + 4em) ;}
    100%{width: 0;}
  }

  @media (max-width: 600px){
    .profile-text{
      position: absolute;
      height: 12.5em;
      top: 50%;
      transform: translateY(-50%);
      transition: ease;
      animation: boxopen 1s 1;
    }
  }
  @media (max-width: 1200px) and (min-width: 601px){
    .profile-image{
      position: relative;
      left: 4em;
    }
    .profile-text{ 
      font-size: initial;
      box-shadow: inset 0 0 0 1px white;
      padding:0 2em 2em 2em;
      left: -4em;
    }
    .profile-text::before{
      content: "";
      background: black;
      display: block;
      position: absolute;
      right: -4em;
      height: 100%;
      z-index: 3;
      transition: ease-in-out;
      animation: boxopen2 3s 1;
      box-shadow: -1px 0 10px white;
    }
  }
  @media (min-width: 1200px){
    .profile-text{
      font-size: 1.2em;
      padding:0 2em 2em 2em;
    }
  }

</style>


<div class="profile">
  <div class="profile-image">
    <img
      src="/images/mr44.png" 
      alt="Rajnish Anand - Web Systems Developer"
    />
  </div>
  
  <div class="profile-text">
    <h1>Rajnish Anand </h1>
    <h2 class="edu-qld-beginner-h2">a web systems developer</h2>
    <p>
      A Fullstack Web Developer, ongoing exploration in fields of Machine learning and Cybersecurity.
    </p>
  </div>

</div>
