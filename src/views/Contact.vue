<template>
  <div class="contact">
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.0495642273863!2d-9.216677485322519!3d32.31052211493245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdac21138cb413b7%3A0xc0a126eb4fe2a10b!2sDevosoft!5e0!3m2!1sen!2sma!4v1604147345354!5m2!1sen!2sma" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    <div class="contact-info">
      <div class="contact-element">
        <h1
          v-resize-text="{
            ratio: 1.3,
            minFontSize: '24px',
            maxFontSize: '32px',
            delay: 200
          }"
        >
          Contact Us
        </h1>
        <p
          v-resize-text="{
            ratio: 1.3,
            minFontSize: '18px',
            maxFontSize: '24px',
            delay: 200
          }"
        >
          <img src="../assets/images/phone-alt.svg" alt="" />+212 525-988911
        </p>
        <p
          v-resize-text="{
            ratio: 1.3,
            minFontSize: '18px',
            maxFontSize: '24px',
            delay: 200
          }"
        >
          <img
            src="../assets/images/envelope-square.svg"
            alt=""
          />contact@devosoft.ma
        </p>
      </div>
      <div class="contact-text">
        <h1
          v-resize-text="{
            ratio: 1.3,
            minFontSize: '24px',
            maxFontSize: '32px',
            delay: 200
          }"
        >
          Entrons en contact
        </h1>
        <p
          v-resize-text="{
            ratio: 1.3,
            minFontSize: '18px',
            maxFontSize: '24px',
            delay: 200
          }"
        >
          Nous restons disponibles pour vous rencontrer et étudier les
          possibilités de partenariat éventuelles au vu de la forte synergie
          entre nos activités respectives.
        </p>
      </div>
    </div>
    <div class="contact-form">
      <form action="http://localhost/mail/index.php" method="post">
        <input type="email" placeholder="You'r email" name="user_email" />
        <textarea
          name="user_message"
          id=""
          cols="30"
          rows="10"
          placeholder="You'r message"
        ></textarea>
        <input type="submit" class="btn" value="Envoyer" />
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
// @ is an alias to /src

export default {
  name: "Contact",
  methods: {
    sendEmail: e => {
      emailjs
        .sendForm(
          "default_service",
          "YOUR_TEMPLATE_ID",
          e.target,
          "YOUR_USER_ID"
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
          },
          error => {
            console.log("FAILED...", error);
          }
        );
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/sass/_main.scss";
.contact {
  // background-size: calc(max(500px, 50%)) calc(max(500px, 100%));
  // text-align: center;
  .map {
    width: 100%;
  }
  .contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    color: #fff;
    h1 {
      font-family: $font-one;
    }
    p {
      font-family: $font-two;
    }
    .contact-element {
      padding: 10%;
      background: url("../assets/images/contact path.svg") no-repeat;
      background-position: top -200px right -30px;
      background-size: auto 140%;
      overflow: visible;
      height: 40vh;
      text-align: center;
      img {
        width: 20px;
        margin-right: 10px;
      }
    }
    .contact-text {
      padding: 10%;
      text-align: center;
      line-height: 200%;
    }
  }
  .contact-form {
    form {
      margin: auto 7%;
      padding: 2%;
      background-color: white;
      -webkit-box-shadow: 0px 0px 0px 19px rgba(47, 128, 237, 0.38);
      box-shadow: 0px 0px 0px 19px rgba(47, 128, 237, 0.38);
      input {
        display: block;
        margin: 20px 0;
        width: 100%;
        height: 25px;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        &::placeholder {
          font-family: $font-two;
          color: $color-dark-blue;
          opacity: 50%;
          font-size: 12px;
        }
      }
      textarea {
        display: block;
        width: 100%;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        &::placeholder {
          font-family: $font-two;
          color: $color-dark-blue;
          opacity: 50%;
          font-size: 12px;
        }
      }
      .btn {
        padding: 0 20px;
        border-radius: 20px;
        height: 40px;
        background: $color-light-gradient;
        margin-top: 20px;
        font-size: 18px;
        font-family: $font-two;
        border: none;
        color: $color-dark-blue;
        font-weight: 500;
      }
    }
  }
}
</style>
