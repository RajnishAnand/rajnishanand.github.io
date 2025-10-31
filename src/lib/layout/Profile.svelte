<script>
  // const base = import.meta.env.BASE_URL;
  const profile = {
    name: "Rajnish Anand",
    subtext: "Web Systems Developer",
    description:
      "A curious individual with multiple years of experience in full-stack web development, currently exploring the fields of machine learning and cybersecurity."
  };

</script>


<div class="profile">
  <div class="profile-image">
    <img src="/images/specs.jpeg" alt="Rajnish Anand - Web Systems Developer"/>
  </div>
  
  <div class="profile-text">
    <h1>{profile.name}</h1>
    <h2>{profile.subtext}</h2>
    <p>{profile.description}</p>
  </div>

</div>

<style>
  .profile *{
    /* outline: solid 1px #00ff0055; */
    outline-offset: 5px;
   }
  .profile{
    display: grid;
    grid-template-rows: auto auto;
    margin: 2em;
    font-size: .8em;
    /* outline: solid 1px red; */
    max-width: 50em;
    border-radius: 1em;
    overflow: hidden;
    background: #222d3d80;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 20px 0px #00000050;
    transition: 1s ease;
  }

  .profile-image img{
    height: 100%;
    width: 100%;
  }

  .profile-text{
    position: relative;
    padding: 1em 1.5em;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .profile-text h2{
    color: var(--text-secondary);
  }
  .profile-text p{
    color: var(--text-secondary);
  }

  @media (min-width: 600px){
    .profile{
      height: 20em;
      grid-template-rows: auto;
      grid-template-columns: auto auto;
      align-self: center;
    }
  }
  @media(min-width: 700px){
    .profile{
      margin: auto;
    }
  }

</style>


