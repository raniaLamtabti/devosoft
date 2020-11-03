<template>
  <div class="home">
    <div class="banner">
      <div class="contente">
        <h1
          v-resize-text="{
            ratio: 1.3,
            minFontSize: '20px',
            maxFontSize: '50px',
            delay: 200
          }"
        >
          Nous construisons des identité Web qui développent votre entreprise
        </h1>
        <p
          v-resize-text="{
            ratio: 1.5,
            minFontSize: '14px',
            maxFontSize: '28px',
            delay: 200
          }"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia em velit mollit. veniam consequat sunt nostrud
          amet.
        </p>
        <a href="">
          <!-- <span class="spn1">
            <img src="../assets/images/play.svg" alt="" />
          </span> -->
          <router-link to="/agency"><span class="spn2">Voir plus </span></router-link>
        </a>
      </div>
      <div class="image">
        <!-- <img src="../assets/images/Asset 141x.svg" alt="" /> -->
        <div class="social-icones">
          <ul type="none">
            <li>
              <a href=""><img src="../assets/images/facebook.svg" alt=""/></a>
            </li>
            <li>
              <a href=""><img src="../assets/images/instagram.svg" alt=""/></a>
            </li>
            <li>
              <a href=""><img src="../assets/images/linkedin.svg" alt=""/></a>
            </li>
            <li>
              <a href=""><img src="../assets/images/twitter.svg" alt=""/></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="why">
      <div>
        <span><img src="../assets/images/clock.svg" alt=""/></span>
        <h2>Temps</h2>
        <p>
          Development web, mobile et desktop avec une grand performence et sur
          tout les platform
        </p>
      </div>
      <div>
        <span><img src="../assets/images/star.svg" alt=""/></span>
        <h2>Qualite</h2>
        <p>
          Development web, mobile et desktop avec une grand performence et sur
          tout les platform
        </p>
      </div>
      <div>
        <span
          ><img
            src="../assets/images/circle-of-two-clockwise-arrows-rotation.svg"
            alt=""
        /></span>
        <h2>Continuation</h2>
        <p>
          Development web, mobile et desktop avec une grand performence et sur
          tout les platform
        </p>
      </div>
    </div>
    <div class="services">
      <div class="serv">
        <div class="content">
          <h2
            v-resize-text="{
              ratio: 1.3,
              minFontSize: '24px',
              maxFontSize: '50px',
              delay: 200
            }"
          >
            Development
          </h2>
          <p
            v-resize-text="{
              ratio: 1.3,
              minFontSize: '16px',
              maxFontSize: '24px',
              delay: 200
            }"
          >
            Id porttitor vitae sociis magna molestie hac risus, orci. Quam
            bibendum commodo, rhoncus sapien, consectetur habitant bibendum nec.
            Tellus dictum blandit purus pulvinar semper in.
          </p>
        </div>
        <img src="../assets/images/Asset 191x.svg" alt="" />
      </div>
      <div class="serv">
        <img class="img1" src="../assets/images/Asset 181x.svg" alt="" />
        <div class="content">
          <h2
            v-resize-text="{
              ratio: 1.3,
              minFontSize: '24px',
              maxFontSize: '50px',
              delay: 200
            }"
          >
            Design
          </h2>
          <p
            v-resize-text="{
              ratio: 1.3,
              minFontSize: '16px',
              maxFontSize: '24px',
              delay: 200
            }"
          >
            Id porttitor vitae sociis magna molestie hac risus, orci. Quam
            bibendum commodo, rhoncus sapien, consectetur habitant bibendum nec.
            Tellus dictum blandit purus pulvinar semper in.
          </p>
        </div>
        <img class="img2" src="../assets/images/Asset 181x.svg" alt="" />
      </div>
      <div class="serv">
        <div class="content">
          <h2
            v-resize-text="{
              ratio: 1.3,
              minFontSize: '24px',
              maxFontSize: '50px',
              delay: 200
            }"
          >
            Web Marketing
          </h2>
          <p
            v-resize-text="{
              ratio: 1.3,
              minFontSize: '16px',
              maxFontSize: '24px',
              delay: 200
            }"
          >
            Id porttitor vitae sociis magna molestie hac risus, orci. Quam
            bibendum commodo, rhoncus sapien, consectetur habitant bibendum nec.
            Tellus dictum blandit purus pulvinar semper in.
          </p>
        </div>
        <img src="../assets/images/Asset 151x.svg" alt="" />
      </div>
    </div>
    <!-- <div class="portfolio">
      <a href="https://cuisinebladis.com/" class="project">
        <div class="image">
          <img
            src="../assets/images/screencapture-cuisinebladis-2020-10-29-14_18_04.png"
            alt=""
          />
        </div>
        <h2>Cuisine bladi</h2>
      </a>
      <a href="#" class="project">
        <div class="image">
          <img src="../assets/images/attachment_121219843.png" alt="" />
        </div>
        <h2>project 2</h2>
      </a>
      <a href="#" class="project">
        <div class="image">
          <img
            src="../assets/images/screencapture-file-E-Work-sender-index-html-2020-09-24-00_48_09.png"
            alt=""
          />
        </div>
        <h2>project 3</h2>
      </a>
    </div> -->
    <!-- <div class="blog">
      <ArticleComponent
        v-bind:titel="'Article 1'"
        v-bind:brief="
          'Adipisci veritatis rerum cumque facere, voluptatibus quisquam consequuntur. rerum cumque facere, voluptatibus quisquam consequuntur.'
        "
        v-bind:picture_src="'../assets/images/104.jpg'"
      />
      <ArticleComponent
        v-bind:titel="'Article 2'"
        v-bind:brief="
          'Adipisci veritatis rerum cumque facere, voluptatibus quisquam consequuntur. rerum cumque facere, voluptatibus quisquam consequuntur.'
        "
        v-bind:picture_src="'../assets/images/download.jpg'"
      />
      <ArticleComponent
        v-bind:titel="'Article 2'"
        v-bind:brief="
          'Adipisci veritatis rerum cumque facere, voluptatibus quisquam consequuntur. rerum cumque facere, voluptatibus quisquam consequuntur.'
        "
        v-bind:picture_src="'../assets/images/2564.jpg'"
      />
      <div class="more">
        <a href="">See more</a>
      </div>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import ArticleComponent from '@/components/ArticleComponent.vue'

export default {
  name: 'Home',
  components: {
    // ArticleComponent
  }
}
</script>

<style lang="scss">
@import '../assets/sass/_main.scss';
.home {
  .banner {
    margin-top: -100px;
    padding: 100px 7% 7% 7%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    background: url('../assets/images/Banner Path.svg') no-repeat;
    background-position: right bottom 100%;
    background-size: calc(max(500px, 50%)) calc(max(500px, 100%));
    overflow: visible;
    .contente {
      color: #fff;
      h1 {
        font-family: $font-one;
        // font-size: 40px;
        line-height: 140%;
        font-weight: 700;
      }
      p {
        font-family: $font-two;
        // font-size: 24px;
        line-height: 140%;
        color: #d8e3f4;
        margin-bottom: 50px;
      }
      a {
        font-family: $font-two;
        font-size: 20px;
        text-decoration: none;
        .spn1 {
          display: inline-flex;
          box-shadow: 0px 0px 18px #5bb4f5;
          border-radius: 50%;
          padding: 10px;
          background: $color-light-gradient;
          img {
            width: 20px;
            height: 20px;
          }
        }
        .spn2 {
          color: #fff;
          // margin-left: 20px;
          background: $color-light-gradient;
          box-shadow: 0px 0px 18px #5bb4f5;
          border-radius: 25px;
          padding: 10px;
        }
      }
    }
    .image {
      background: url('../assets/images/Asset 141x.svg') no-repeat;
      background-position: right;
      display: flex;
      .social-icones {
        margin-left: auto;
        margin-top: auto;
        ul {
          margin-bottom: 0px;
          li {
            margin-top: 20px;
            a {
              border: 1px solid #fff;
              display: flex;
              justify-content: center;
              padding: 10px 10px;
              border-radius: 50%;
              img {
                height: 20px;
              }
            }
          }
        }
      }
    }
  }
  .why {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 50px;
    grid-row-gap: 20px;
    padding: 10%;
    padding-top: 0%;
    div {
      background-color: $color-dark-blue;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      padding: 20px;
      span {
        background-color: palevioletred;
        border-radius: 50%;
        padding: 20px;
        img {
          height: 50px;
          width: 50px;
        }
      }
      h2 {
        font-family: $font-one;
        font-size: 24px;
        font-weight: bold;
      }
      p {
        font-family: $font-two;
        font-size: 20px;
        line-height: 140%;
        font-weight: 100;
        text-align: center;
      }
    }
  }
  .services {
    padding: 10%;
    padding-top: 0%;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 50px;
    .serv {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-template-rows: 1fr;
      justify-content: center;
      color: #fff;
      .content {
        h2 {
          font-family: $font-one;
          // font-size: 50px;
          font-weight: bold;
        }
        p {
          font-family: $font-two;
          // font-size: 24px;
          line-height: 140%;
          font-weight: 100;
        }
      }
      .img2 {
        display: none;
      }
      img {
        max-height: 400px;
        min-height: 200px;
      }
    }
  }
  .portfolio {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 50px;
    grid-row-gap: 20px;
    padding: 10%;
    padding-top: 0%;
    color: #fff;
    .project {
      text-decoration: none;
      color: #fff;
      .image {
        overflow: hidden;
        height: 400px;
        border-radius: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      h2 {
        text-decoration: none;
      }
    }
  }
  .blog {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 50px;
    grid-row-gap: 20px;
    padding: 10%;
    padding-top: 0%;
    background: url('../assets/images/Blog path.svg') no-repeat;
    align-items: center;
    // background-position: right bottom 100%;
    background-size: auto calc(max(90%, 100%));
    padding-top: 130px;
    padding-bottom: 110px;
    .more {
      a {
        display: flex;
        align-items: center;
        font-size: 24px;
        color: #fff;
        font-family: $font-two;
        .plus-icone {
          height: 30px;
          margin-left: 5px;
        }
      }
    }
  }
  @media screen and (max-width: 425px) {
    .services {
    .serv {
      .img1 {
        display: none;
      }
      .img2 {
        display: block;
      }
    }
    }
  }
}
@media screen and (max-width: 768px) {
  .social-icones {
    display: none;
  }
  .banner {
    background-size: 500px;
    background-position: top 620px;
  }
}
@media screen and (max-width: 1024px) {
  .social-icones {
    ul {
      display: flex;
      margin: auto;
      li {
        margin-left: 20px;
      }
    }
  }
}
</style>
