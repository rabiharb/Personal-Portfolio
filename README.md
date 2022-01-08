<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Merriweather:wght@300;700&family=Poppins:wght@300;700&family=Rock+3D&display=swap"
      rel="stylesheet"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script
      src="https://kit.fontawesome.com/c18ac3383c.js"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="index.css" />
    <title>Rabih Harb - Portfolio</title>
  </head>
  <body>
    <header>
      <div id="themeBtn">
        <i class="fas fa-sun" id="themeIcon"></i>
      </div>
      <div class="header-cont">
        <nav>
          <div class="logo-cont">
            <img src="my_images/me_cartoon.png" alt="" class="image-logo" />
          </div>
          <ul class="nav-cont">
            <li class="nav-item">
              <a href="#about"> About </a>
            </li>
            <li class="nav-item">
              <a href="#work">Work</a>
            </li>
            <li class="nav-item">
              <a href="#contact" id="contactTag">Contact</a>
            </li>
          </ul>
        </nav>
        <div class="title-cont">
          <img src="my_images/cloud.png" alt="cloud-image" class="top-cloud" />
          <h1>I'm Rabih.</h1>
          <h3>A Web Developer / Designer.</h3>
          <img src="my_images/mountain.png" class="mount-img" />
          <img
            src="my_images/cloud.png"
            alt=""
            alt="cloud-image"
            class="bottom-cloud"
          />
        </div>
      </div>
    </header>
    <section id="about">
      <div class="about-cont section-cont">
        <h1 class="about-icon icon-cont">
          <i class="fas fa-info-circle"></i>
        </h1>
        <h2 class="about-title section-title">My Equation</h2>
        <p class="about-text">
          Self-motivated fresh graduate with a bachelor's degree in Computer
          Science.
          <br />
          <span style="font-size: 2rem; font-weight: 900">+</span>
          <br />
          Gained certificates in both Web Development and Python Programming
          Language.
          <br />
          <span style="font-size: 2rem; font-weight: 100">**</span>
          <br />
          Daily Practice
        </p>
      </div>
    </section>
    <section id="skills">
      <div class="skills-cont section-cont">
        <h1 class="skills-icon icon-cont">
          <i class="fas fa-laptop-code"></i>
        </h1>
        <h2 class="skills-title section-title">Ingredients</h2>
        <div class="flex-skills-cont">
          <div class="skill-item">
            <span class="key">HTML</span>
            <span class="value">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </span>
          </div>
          <div class="skill-item">
            <span class="key">CSS</span>
            <span class="value">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </span>
          </div>
          <div class="skill-item">
            <span class="key">JS</span>
            <span class="value">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </span>
          </div>
          <div class="skill-item">
            <span class="key">Python</span>
            <span class="value">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </span>
          </div>
          <div class="skill-item">
            <span class="key">Fast-Typing</span>
            <span class="value">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </span>
          </div>
          <div class="skill-item">
            <span class="key">Git</span>
            <span class="value">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </span>
          </div>
          <div class="skill-item">
            <span class="key">Relational DB</span>
            <span class="value">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </span>
          </div>
          <div class="skill-item">
            <span class="key">React</span>
            <span class="value">
              <i class="fas fa-star"></i>
            </span>
          </div>
          <div class="skill-item">
            <span class="key">Java</span>
            <span class="value">
              <i class="fas fa-star"></i>
            </span>
          </div>
          <div class="skill-item">
            <span class="key">C#</span>
            <span class="value">
              <i class="fas fa-star"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
    <section id="work">
      <div class="work-cont section-cont">
        <h1 class="work-icon icon-cont">
          <i class="fas fa-briefcase"></i>
        </h1>
        <h2 class="work-title section-title">( *^-^) > (*╯^╰)</h2>
        <p class="work-text">
          So far my work experience is the
          <a
            href="https://github.com/rabiharb"
            class="projects-link"
            target="_blank"
            >projects I built personally.</a
          >
          Still I'm motivated and available immediately.
        </p>
      </div>
    </section>
    <section id="contact">
      <div class="contact-cont section-cont">
        <h1 class="contact-icon icon-cont">
          <i class="fas fa-envelope"></i>
        </h1>
        <h2 class="contact-title section-title">Contact Me</h2>
        <div class="contact-form">
          <label for="message" id="messageLabel">Message: </label>
          <textarea
            name="message"
            id="messageArea"
            cols="30"
            rows="10"
          ></textarea>
          <a id="contactSubmit"> SEND MESSAGE </a>
        </div>
      </div>
    </section>
    <footer>
      <div class="footer-cont">
        <ul class="social-cont">
          <li class="social-item">
            <a
              href="https://www.linkedin.com/in/rabih-harb-514931218"
              class="social-link"
              target="_blank"
              >Linked In</a
            >
          </li>
          <li class="social-item">
            <a
              href="https://twitter.com/rabiharb1?t=exaotcx55p5l1yfEglUuMg&s=09"
              class="social-link"
              target="_blank"
              >Twitter</a
            >
          </li>
        </ul>
        <div class="copy-cont">
          <p class="copy-text">Rabih Harb &COPY; 2021</p>
        </div>
      </div>
    </footer>
    <script src="index.js"></script>
  </body>
</html>
