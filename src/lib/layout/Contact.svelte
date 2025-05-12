<script lang="ts">
  let name = '';
  let email = '';
  let message = '';
  let files: File[] = [];
  let anonymous = false;
  let submitted = false;
  let fileError = '';

  async function handleSubmit(e: Event){
    e.preventDefault();
    fileError = '';
    submitted = true;
    await send(
      name||"noname",
      email||"noame@nomail.com", 
      message,
      files
    ).catch(err=>alert(err?.message));
  }

  function handleFileChange(event:any) {
    files = event.target.files;
    fileError = "";
  }

  async function send(name:string, email:string, message="", attachments: File[]){
    const url = "https://discord.com/api/webhooks/1197755062680834158/tOV-mJfvBoBqoCV-bNuPNUZf0r3EoThIU8wpuhIfQPFR-51NZVIBCD3UI7XWdbXfyF8Q";

    const formData = new FormData();
    formData.append("payload_json",
      JSON.stringify({
        username: name+ " <"+email+">",
        content: message,
      })
    );

    for(let i = 0; i<attachments.length; i++)formData.append(`file${i+1}`,attachments[i]);
    return await fetch(url,{
      method: "POST",
      body: formData
    })
  }
</script>

<section id="contact" class="contact-section">
  <div class="contact-container">
    <div class="contact-info">
      <h2>Let’s Connect</h2>
      <p>I’m open to freelance work, collaborations or just a chat. Drop a message, and I’ll get back to you! <br><br>Wanna stay mysterious? Send it anonymously.</p>
    </div>
    <form class="contact-form" on:submit={handleSubmit}>
      <label class="anon-toggle">
        <input type="checkbox" bind:checked={anonymous} />
        Send anonymously
      </label>
      {#if submitted}
        <p class="success-msg">✅ Message sent! I'll get back to you shortly.</p>
      {:else}
        {#if !anonymous}
          <input type="text" placeholder="Your Name" bind:value={name} required />
          <input type="email" placeholder="Your Email" bind:value={email} required />
        {/if}
        <textarea placeholder="Your Message" bind:value={message} rows="5" required></textarea>
        <input type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" on:change={handleFileChange} />
        {#if fileError}<p class="error">{fileError}</p>{/if}
        <button type="submit">Send Message</button>
      {/if}
    </form>
  </div>
</section>



<style>
  .contact-section {
    background: var(--text-primary);
    padding: 4rem 1rem;
    display: flex;
    justify-content: center;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 960px;
    width: 100%;
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  .contact-info {
    flex: 1;
  }

  .contact-info h2 {
    color: var(--text-primary);
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .contact-info p {
    font-size: 1rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
  }

  input,
  textarea {
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-family: inherit;
  }

  input[type="file"] {
    border: none;
    padding-left: 0;
  }

  .anon-toggle {
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
  }

  button {
    padding: 0.75rem;
    background-color: #4f46e5;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  button:hover {
    background-color: #3730a3;
  }

  .success-msg {
    color: green;
    font-weight: bold;
  }

  .error {
    color: red;
    font-size: 0.85rem;
  }

  @media (min-width: 768px) {
    .contact-container {
      flex-direction: row;
    }

    .contact-info,
    .contact-form {
      width: 50%;
    }
  }
</style>
