<script setup>
import { onMounted, inject } from 'vue';
import { safariHacker } from '../helper/safariHacker.js';
import { YTPlayer } from '../helper/YTPlayer.js';
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const setLoading = inject('setLoading');

onMounted(() => {
  console.log('mounted in the composition api!');
  setLoading(false);
  safariHacker(document.querySelector('#app'));
  const YTPlayerObj = new YTPlayer('player', '8_4JRK4QkqU');
  YTPlayerObj.onYouTubeIframeAPIReady();
  let scaleNum = document.querySelector('.kv').clientHeight / 280;
  document.querySelector('.kv__video').style.transform =
    'scale(' + scaleNum + ')';
});
</script>
<template>
  <div class="container">
    <div class="section kv">
      <div class="kv__content">
        <h1>
          <img class="kv__logo" src="../assets/logo.svg" alt="digiSalad" />
        </h1>
        <h2 class="kv__slogan">
          WE CREATE<br />
          AMAZING<br />
          DIGITAL EXPERIENCES
        </h2>
      </div>
      <div class="kv__video">
        <div id="player"></div>
      </div>
      <div class="kv__sideLine">
        <p>DIGITAL AGENCY</p>
      </div>
      <div class="kv__scroll-tips">
        <img src="../assets/scroll-tips.png" alt="TASTE US NOW!" />
        <p>TASTE US NOW!</p>
      </div>
    </div>
    <div class="section about">
      <div class="about__line"></div>

      <h3 class="title title--1">ABOUT DIGISALAD</h3>
      <div class="about__video">
        <iframe
          width="960"
          height="540"
          src="https://www.youtube.com/embed/IeIRJ9jZ5Ro"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="about__content">
        <p>
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
          Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
          Donec id dignissim nunc. Donec elit ante, eleifend a dolor et,
          venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem
          elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc
          leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis
          molestie faucibus.
        </p>
      </div>
      <div class="btn btn--more u-mt-2">
        <p>View More</p>
      </div>
    </div>
    <div class="section ingradient">
      <div class="awards">
        <div class="awards__left">
          <h3 class="title title--3">AWARDS</h3>
          <div class="awards__content">
            <p>
              Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
              ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
              porta. Nam condimentum vitae ligula vel ornare. Phasellus at
              semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl,
              vitae sagittis orci. Donec id dignissim nunc. Donec elit ante,
              eleifend a dolor et, venenatis facilisis dolor. In feugiat orci
              odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et
              vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros
              nec lacus. Cras lobortis molestie faucibus.
            </p>
          </div>
        </div>
        <div class="awards__right">
          <img src="../assets/sponsor.png" alt="digiSalad" />
          <img src="../assets/sponsor.png" alt="digiSalad" />
          <img src="../assets/sponsor.png" alt="digiSalad" />
          <img src="../assets/sponsor.png" alt="digiSalad" />
        </div>
      </div>
      <h3 class="title title--2">OUR INGRADIENTS</h3>
      <div class="ingradient__content">
        <p>
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
          Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
          Donec id dignissim nunc. Donec elit ante, eleifend a dolor et,
          venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem
          elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc
          leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis
          molestie faucibus.
        </p>
      </div>
      <div class="btn btn--more u-mt-2">
        <p>OUR SERVICES</p>
      </div>
      <div class="services">
        <div class="service">
          <h4 class="service__icon service__icon--1"></h4>
          <h4 class="service__title">UX Design</h4>
          <p class="service__content">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare.
          </p>
          <a href="javascript:;" class="service__btn">VIEW MORE</a>
        </div>
        <div class="service">
          <h4 class="service__icon service__icon--2"></h4>
          <h4 class="service__title">UX Design</h4>
          <p class="service__content">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare.
          </p>
          <a href="javascript:;" class="service__btn">VIEW MORE</a>
        </div>
        <div class="service">
          <h4 class="service__icon service__icon--3"></h4>
          <h4 class="service__title">UX Design</h4>
          <p class="service__content">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare.
          </p>
          <a href="javascript:;" class="service__btn">VIEW MORE</a>
        </div>
        <div class="service">
          <h4 class="service__icon service__icon--4"></h4>
          <h4 class="service__title">UX Design</h4>
          <p class="service__content">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare.
          </p>
          <a href="javascript:;" class="service__btn">VIEW MORE</a>
        </div>
        <div class="service">
          <h4 class="service__icon service__icon--5"></h4>
          <h4 class="service__title">UX Design</h4>
          <p class="service__content">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare.
          </p>
          <a href="javascript:;" class="service__btn">VIEW MORE</a>
        </div>
        <div class="service">
          <h4 class="service__icon service__icon--6"></h4>
          <h4 class="service__title">UX Design</h4>
          <p class="service__content">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare.
          </p>
          <a href="javascript:;" class="service__btn">VIEW MORE</a>
        </div>
        <div class="service">
          <h4 class="service__icon service__icon--7"></h4>
          <h4 class="service__title">UX Design</h4>
          <p class="service__content">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare.
          </p>
          <a href="javascript:;" class="service__btn">VIEW MORE</a>
        </div>
        <div class="service">
          <h4 class="service__icon service__icon--8"></h4>
          <h4 class="service__title">UX Design</h4>
          <p class="service__content">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare.
          </p>
          <a href="javascript:;" class="service__btn">VIEW MORE</a>
        </div>
        <div class="service">
          <h4 class="service__icon service__icon--9"></h4>
          <h4 class="service__title">UX Design</h4>
          <p class="service__content">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare.
          </p>
          <a href="javascript:;" class="service__btn">VIEW MORE</a>
        </div>
      </div>
      <a href="#" class="ingradient__link">VIEW MORE DIGISALAD’S INGRADIENTS</a>
      <div class="quote">
        <div class="quote__intro">
          <img class="quote__head" src="../assets/head.png" alt="head" />
          <h4>Tony Ng</h4>
          <p>Founder & Creative Director</p>
        </div>
        <div class="quote__content">
          <img class="quote__icon" src="../assets/quote.png" alt="quote" />
          <p>
            A great digital work isn’t about designing beautiful pages purely.
            It is about context - how do we deliver the
            <span class="highlight"
              >right experience to the right person at the right time</span
            >
            . The most important thing is that your work can engage customers at
            anytime, anywhere and let users experience an entire amazing digital
            journey.
          </p>
        </div>
      </div>
    </div>
    <div class="section about">
      <h3 class="title title--1">OUR BRAND EXPERIENCE</h3>
      <div class="about__content">
        <p>
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
          Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
          Donec id dignissim nunc. Donec elit ante, eleifend a dolor et,
          venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem
          elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc
          leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis
          molestie faucibus.
        </p>
      </div>
      <img class="" src="../assets/sponsors.png" alt="quote" />
    </div>
    <div class="section projects">
      <div class="projects__container">
        <Carousel>
          <Slide v-for="slide in 5" :key="slide">
            <div class="carousel__item">
              <div class="projects__img">
                <img src="../assets/projects.png" alt="projects" />
                <div class="btn btn--more">
                  <p>View Project</p>
                </div>
              </div>
              <div class="projects__content">
                <div class="projects__label">HIGHLIGHTED SHOWCASE</div>
                <h5 class="title projects__title">
                  <span>LP CLUB MOBILE APP</span>
                </h5>
                <p>
                  Cras quis nulla commodo, aliquam lectus sed, blandit augue.
                  Cras ullamcorper bibendum bibendum. Duis tincidunt urna non
                  pretium porta. Nam condimentum vitae ligula vel ornare.
                  Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at
                  condimentum nisl, vitae sagittis orci. Donec id dignissim
                  nunc. Donec elit ante, eleifend a dolor et, venenatis
                  facilisis dolor. In feugiat orci odio, sed lacinia sem
                  elementum quis. Aliquam consectetur, eros et vulputate
                  euismod, nunc leo tempor lacus, ac rhoncus neque eros nec
                  lacus. Cras lobortis molestie faucibus.
                </p>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
