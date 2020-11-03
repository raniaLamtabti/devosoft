<template>
  <div class="footer">
    <div class="footer-top">
      <div class="devosoft">
        <img src="../assets/images/logo-long-white.svg" alt="" />
        <p>
          agence web spécialisée dans le domaine du développement des applications WEB, mobiles, référencement et solutions OPEN SOURCE
        </p>
      </div>
      <!-- <div class="visite">
        <h2>Visité nous</h2>
        <p>N 14 Rue 153 Qu El Massira Safi, Maroc</p>
      </div> -->
      <div class="blog">
        <a class="blog-link" href="">Lien</a>
        <ul type="none">
          <li><router-link to="/">Accuiel</router-link></li>
          <li><router-link to="/agency">Agence</router-link></li>
          <!-- <li><router-link to="/pricing">Prix</router-link></li> -->
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <div class="news">
        <h2>NEWESLETTRE</h2>
        <span>Abonnez-nous à la newsletter</span>
        <form action="http://localhost/mail/storMail.php" method="post">
          <input type="text" placeholder="Enter votre email" name="email"/><br />
          <button type="submit">Abonnez</button>
        </form>
      </div>

      <!-- <div class="instagram">
        <a href="">G</a>
        <div class="images">
          <span>{{ images }}</span>
          <div v-for="image in images" :key="image.media_url">
            <img  :src="image.media_url"  alt="" /> 
            <span>{{ image.media_url }}</span>
          </div>
          <img src="../assets/images/02 (1).png" alt="" />
          <img src="../assets/images/03 (1).png" alt="" />
          <img src="../assets/images/4 (1).png" alt="" />
          <img src="../assets/images/5 (1).png" alt="" />
          <img src="../assets/images/6 (1).png" alt="" /> 
        </div>
      </div> -->
    </div>
    <div class="footer-bottom">
      <p>Copyright © Devosoft 2020</p>
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
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      images: [],
      token: "0a7dda8f72d1b9975755b349afc14b04",
      num_photos: 4,
      userid: 3534269623299742
    }
  },
  created() {
    axios
      .get("https://api.instagram.com/v1/users/" + this.userid + "/media/recent"+ this.token, {
        access_token: this.token,
        count: this.num_photos
      })

      .then(response => {
        this.images = response.data;
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/sass/_main.scss";
.footer {
  margin-top: 100px;
  background: url("../assets/images/Group 21.svg") no-repeat;
  background-position: right bottom;
  background-size: auto 100%;
  .footer-top {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 50px;
    grid-row-gap: 20px;
    padding: 2% 10%;
    .devosoft {
      img {
        width: 150px;
      }
      p {
        color: rgb(233, 233, 233);
        font-size: 24px;
        font-family: $font-two;
      }
    }
    .visite {
      h2 {
        color: #fff;
        font-size: 30px;
        font-family: $font-one;
        margin-top: 0px;
        font-weight: 800;
      }
      p {
        color: rgb(233, 233, 233);
        font-size: 20px;
        font-family: $font-two;
      }
    }
    .blog {
      .blog-link {
        color: #fff;
        text-decoration: none;
        font-size: 30px;
        font-family: $font-one;
        font-weight: 800;
      }
      ul {
        padding: 0;
        li {
          margin-bottom: 10px;
          a {
            color: rgb(233, 233, 233);
            text-decoration: none;
            font-size: 24px;
            font-family: $font-two;
          }
        }
      }
    }
    .news {
      h2 {
        color: #fff;
        font-size: 30px;
        font-family: $font-one;
        margin-top: 0px;
        font-weight: 800;
      }
      span {
        color: rgb(233, 233, 233);
        font-size: 20px;
        font-family: $font-two;
      }
      input {
        padding: 0 20px;
        border-radius: 50%;
        margin-top: 20px;
        height: 50px;
        width: 90%;
        border-radius: 25px;
        border: none;
        &::placeholder {
          color: $color-dark-blue;
          opacity: 50%;
          font-size: 18px;
        }
      }
      button {
        padding: 0 20px;
        border-radius: 20px;
        height: 40px;
        background: $color-light-gradient;
        margin-top: 20px;
        font-size: 24px;
        font-family: $font-two;
        border: none;
        color: $color-dark-blue;
        font-weight: 500;
      }
    }
    .instagram {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 30px;
        font-family: $font-one;
        font-weight: 800;
      }
      .images {
        padding-top: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
  }
  .footer-bottom {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 50px;
    grid-row-gap: 20px;
    padding: 2% 10%;
    p {
      font-family: $font-two;
      font-size: 20px;
      color: #fff;
      text-align: center;
    }
    ul {
      display: flex;
      justify-content: space-around;
      padding: 0;
      margin: 0;
      li {
        margin-top: 20px;
        a {
          img {
            height: 20px;
          }
        }
      }
    }
  }
}
</style>
