<footer>
  <div class="white-saperator"></div>
  <div class="footer-container">
    <div class="social-links">
      <a href="https://github.com/rajnishanand" target="_blank" aria-label="GitHub" class="social-icon">
        <i class="devicon-github-original"></i>
      </a>
      <a href="https://linkedin.com/in/absolutezero" target="_blank" aria-label="LinkedIn" class="social-icon">
        <i class="devicon-linkedin-plain"></i>
      </a>
    </div>
    <p>&copy;2025 Rajnish Anand. All rights reserved.</p>
  </div>
</footer>


<style>
  footer {
    background-color: var(--bg-color);
    color: white;
    text-align: center;
    padding: 2rem 0 ;
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .social-links {
    display: flex;
    justify-content: center;
    margin-bottom:1em;
    gap: 1.5rem;
  }

  .social-icon i {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
  }

  .social-icon{
    text-decoration: none;
    color: white;
  }

  .social-icon:hover i {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    footer{
      padding: 2em 0 1em 0;
    }
    .footer-container {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
