<template>
  <div>
    <footer class="footer-container">
      <div class="footer-wrapper">
        <p class="footer-paragraph">
          <img class="footer-icon" src="../assets/icon-envelope.svg" />
          E-mail:
          <a
            class="footer-link"
            href="mailto:mikulew@gmail.com"
            target="_blank"
          >Email me</a>
        </p>
        <p class="footer-paragraph">
          <img class="footer-icon" src="../assets/icon-github.svg" />
          GitHub:
          <a
            class="footer-link"
            href="https://github.com/Mikulew/vue-countries"
            target="_blank"
          >Repository</a>
        </p>
        <p class="footer-paragraph">
          <img class="footer-icon" src="../assets/icon-copyright.svg" />Mikolaj Lewandowski 2017
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #242424;
  width: 100%;
  min-height: 100px;
}

.footer-wrapper {
  color: #dddddd;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  margin: 10px 0;
}

.footer-paragraph {
  display: flex;
  align-content: center;
  align-items: center;
  margin: 10px 0;
}

.footer-paragraph > svg {
  margin: 0 10px 0 0;
}

.footer-link {
  color: #dddddd;
  margin-left: 10px;
  transition: all 0.2s ease-in-out;
  text-decoration: underline;
}

.footer-link:hover {
  color: #ffffff;
}

.footer-icon {
  margin: 0 10px 0 0;
}
</style>
