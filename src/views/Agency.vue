<template>
  <div class="agency">
    <div class="defenition">
      <h1>DEVOSOFT</h1>
      <p>Spécialisée dans la création, le suivi et la maintenance de sites vitrine, sites ecommerce, et des sites sur-mesure, notre entreprise assure, dans son intégralité, le pilotage de projets divers confiés par nos clients.</p>
    </div>
    <div class="storie">
      <div class="information left">
        <h2>Notre histoire</h2>
        <p>Née de l'union entre un ingénieur informaticien et un diplômé D'OFPPT, la société DEVOSOFT est présente sur le marché des nouvelles technologies depuis 2017.</p>
      </div>
      <div class="information right">
        <h2>Notre domaine d'activité</h2>
        <p>La société intervient dans les domaines de développement d'application web et mobile et tout ce qui concerne le web marketing.</p>
      </div>
      <div class="information left">
        <h2>Notre engagements</h2>
        <p>DEVOSOFT s'engage dans le développement informatique et choisi de travailler avec les dernière téchnologies utilisée car le monde du travail a changé et cela du fait des nouvelles technologies. En effet, ces dernières sont une réponse sûre pour l’amélioration des conditions de travail.</p>
      </div>
      <div class="information right">
        <h2>Notre récompenses</h2>
        <p>C'est ainsi qu'en 2020 le jury de la Fondation OCP lui a décerné le deuxième prix des entreprises digitale les plus innovantes.</p>
      </div>
      <div class="information left">
        <h2>Notre résultats</h2>
        <p>Fort de ces succès et d'une croissance de 20% par an, la société compte 35 collaborateurs et prévoit d'en embaucher 10 supplémentaires d'ici les 3 prochaines années.</p>
      </div>
    </div>
    <div class="storie-mobile">
      <div class="information">
        <h2></h2>
        <p></p>
      </div>
      <div class="information right">
        <br />
        <h2></h2>
        <p></p>
      </div>
      <div class="information">
        <br />
        <h2></h2>
        <p></p>
      </div>
      <div class="information right">
        <br />
        <h2></h2>
        <p></p>
      </div>
      <div class="information">
        <br />
        <h2></h2>
        <p></p>
      </div>
    </div>
    <div class="competance">
      <div class="text">
        <h1>Nos competences</h1>
        <p>
          Lorem ipsum dolor sit amet ultricies lacus amet risus mauris. Et metus
          sapien nibh at nulla. Magna erat id posuere mau ris nunc.
        </p>
      </div>
      <div class="icons">
        <img src="../assets/images/html5.png" alt="" />
        <img src="../assets/images/css3-alt.png" alt="" />
        <img src="../assets/images/js-square.png" alt="" />
        <img src="../assets/images/vuejs.png" alt="" />
        <img src="../assets/images/react.png" alt="" />
        <img src="../assets/images/php.png" alt="" />
        <img src="../assets/images/wordpress.png" alt="" />
        <img src="../assets/images/laravel.png" alt="" />
        <img src="../assets/images/symfony.png" alt="" />
        <img src="../assets/images/sql-server 1.png" alt="" />
        <img src="../assets/images/figma.png" alt="" />
        <img src="../assets/images/experience.png" alt="" />
        <img src="../assets/images/adobe-illustrator.png" alt="" />
        <img src="../assets/images/adobe-photoshop-logo.png" alt="" />
        <img src="../assets/images/after-effects.png" alt="" />
      </div>
    </div>
    <div class="team">
      <div class="member down">
        <img class="avatar" src="../assets/images/Layer 1.png" alt="" />
        <h2>member 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta rerum
          at id qui consequuntur impedit quibusdam vitae? Nam, fugit dolores,
          eaque praesentium vero totam temporibus deserunt autem cumque
          distinctio fugiat!
        </p>
        <div class="social">
          <a href=""><img src="../assets/images/facebook-team.svg" alt=""/></a>
          <a href=""><img src="../assets/images/instagram-team.svg" alt=""/></a>
          <a href=""><img src="../assets/images/twitter-team.svg" alt=""/></a>
        </div>
      </div>
      <div class="member">
        <img class="avatar" src="../assets/images/Layer 2.png" alt="" />
        <h2>member 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta rerum
          at id qui consequuntur impedit quibusdam vitae? Nam, fugit dolores,
          eaque praesentium vero totam temporibus deserunt autem cumque
          distinctio fugiat!
        </p>
        <div class="social">
          <a href=""><img src="../assets/images/facebook-team.svg" alt=""/></a>
          <a href=""><img src="../assets/images/instagram-team.svg" alt=""/></a>
          <a href=""><img src="../assets/images/twitter-team.svg" alt=""/></a>
        </div>
      </div>
      <div class="member down">
        <img class="avatar" src="../assets/images/Layer 3.png" alt="" />
        <h2>member 3</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta rerum
          at id qui consequuntur impedit quibusdam vitae? Nam, fugit dolores,
          eaque praesentium vero totam temporibus deserunt autem cumque
          distinctio fugiat!
        </p>
        <div class="social">
          <a href=""><img src="../assets/images/facebook-team.svg" alt=""/></a>
          <a href=""><img src="../assets/images/instagram-team.svg" alt=""/></a>
          <a href=""><img src="../assets/images/twitter-team.svg" alt=""/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Agency'
}
</script>
<style lang="scss">
@import '../assets/sass/_main.scss';
.agency {
  .defenition {
    text-align: center;
    color: #fff;
    padding: 2% 10%;
    h1 {
      font-size: 34px;
      font-family: $font-one;
    }
    p {
      font-size: 28px;
      line-height: 160%;
      font-weight: initial;
      font-family: $font-two;
    }
  }
  .storie {
    padding: 2% 10%;
    .information {
      padding: 0 3%;
      margin: 0;
      h2 {
        margin-top: 0px;
        font-size: 30px;
        font-family: $font-one;
        color: #783ab7;
      }
      p {
        margin-bottom: 0px;
        font-size: 24px;
        font-family: $font-two;
        color: #fff;
      }
    }
    .left {
      margin-right: 50%;
      position: relative;
      text-align: right;
      &::after {
        content: '';
        height: 100%;
        width: 20px;
        background: $color-purpel-gradient;
        position: absolute;
        right: -10px;
        top: 0;
      }
    }
    .right {
      margin-left: 50%;
      position: relative;
      &::before {
        content: '';
        height: 110%;
        width: 20px;
        background: $color-purpel-gradient;
        position: absolute;
        left: -10px;
        top: -5px;
      }
    }
  }
  .storie-mobile {
    display: none;
    padding: 2% 10%;
    .information {
      padding: 0 3%;
      margin: 0;
      position: relative;
      &::before {
        content: '';
        height: 110%;
        width: 10px;
        background: $color-purpel-gradient;
        position: absolute;
        left: -10px;
        top: -5px;
      }
      h2 {
        margin-top: 0px;
        font-size: 24px;
        font-family: $font-one;
        color: #783ab7;
      }
      p {
        margin-bottom: 0px;
        font-size: 18px;
        font-family: $font-two;
        color: #fff;
      }
    }
  }
  .competance {
    padding: 300px 3%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-column-gap: 50px;
    grid-row-gap: 20px;
    background: url('../assets/images/Group 1 (4).svg') no-repeat;
    background-position: center;
    background-size: auto 100%;
    // padding-top: 150px;
    // padding-bottom: 150px;
    .text {
      h1 {
        font-size: 34px;
        font-family: $font-one;
        color: #fff;
        font-weight: 700;
      }
      p {
        font-size: 28px;
        font-family: $font-two;
        color: rgb(214, 214, 214);
        // font-weight: 700;
      }
    }
    .icons {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      img {
        width: 100%;
      }
    }
  }
  .team {
    padding: 7%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 100px;
    grid-row-gap: 20px;
    .member {
      margin-bottom: 100px;
      text-align: center;
      background-color: #fff;
      padding: 20px;
      padding-top: 0px;
      border-radius: 20px;
      .avatar {
        width: 150px;
        border-radius: 50%;
        margin-top: -75px;
      }
      h2 {
        font-size: 28px;
        font-family: $font-one;
        font-weight: 600;
        color: $color-light-blue;
      }
      p {
        font-size: 20px;
        font-family: $font-two;
        color: $color-dark-blue;
      }
      .social {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
    // .down {
    //   margin-top: 100px;
    //   margin-bottom: 0;
    // }
  }
  @media screen and (max-width: 425px) {
    .storie-mobile {
      display: block;
    }
    .storie {
      display: none;
    }
  }
}
</style>
