<script>
  // const base = import.meta.env.BASE_URL;
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner:wght@400..700&display=swap');

  /* <weight>: Use a value from 400 to 700 */
  /* <uniquifier>: Use a unique and descriptive class name */
  .edu-qld-beginner-h2 {
    font-family: "Edu QLD Beginner", cursive;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }

  .profile {
    position: relative;
    height: 85vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .profile-text {
    width: 100%;
    max-width: 30em;
    padding:1em 2em;
    background-color: #000000c0;
    margin-top:10vh;
    font-size: .9em;
    border-top:solid 1.5px var(--text-primary);
    border-bottom:solid 1.5px var(--text-primary);
  }

  .profile-text h2 {
    color: var(--accent-color);
  }
  .profile-text p {
    color: var(--text-secondary);
  }

  .profile-image{
    position: absolute;
    height: 100%;
    z-index: -1;
  }
  .profile-image img {
    height: 100%;
    position: relative;
    animation: slide-in 2s ease-out forwards;
  }

  @keyframes slide-in {
    0% { 
      left: -50%;
      opacity: 0;
    }
    30%{ opacity: 1; }
    100% { left: 0; }
  }

  @media (min-width: 600px) {
    .profile-image{
      position: relative;
    }
    .profile-text{ 
      background-color: transparent;
      font-size: initial;
      align-self: initial;
      margin-top: initial;
      border:0;
    }
  }

</style>




<div class="profile">
  <div class="profile-image">
    <img
      src="/images/noir.png" 
      alt="Rajnish Anand - Web Systems Developer"
    />
  </div>
  
  <div class="profile-text">
    <h1>Rajnish Anand </h1>
    <h2 class="edu-qld-beginner-h2">— A Web systems Developer</h2>
    <p>
      A Fullstack Web Developer, ongoing exploration in fields of Machine learning and Cybersecurity.
    </p>
  </div>

</div>
