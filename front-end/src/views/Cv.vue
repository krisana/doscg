<template>
  <div>
    <div class="mb-4">
      <h1 class="cv-title">Krisana Malaseeta</h1>
      <small> <i>Software developer</i> </small>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <i class="mb-3 d-block"
          >Started first programming experience at 6 years old.</i
        >
        <h6>DATE OF BIRTH</h6>
        <p>September 11, 1989</p>
        <h6>ADDRESS</h6>
        <p>189 Sukantharam 29 | Suan Chitlada | Dusit | Bangkok 10300</p>
        <h6>PHONE</h6>
        <p>+66 902761182</p>
        <h6>EMAIL</h6>
        <p>krisana.malaseeta@gmail.com</p>
        <h6>WEBSITE</h6>
        <p>https://krisana.me</p>
        <h6>LANGUAGES</h6>
        <p class="mb-0">Thai: Native</p>
        <p>English: Intermediate</p>
        <h6>HOBBIES</h6>
        <p>Game, Movie, Travel, Photography, Video making, Music</p>
      </div>
      <div class="col-sm-8">
        <p class="text-secondary">
          <i>
            Employment in challenging and rewarding upper-level position in a
            growth-oriented organization, which offers diverse job
            responsibility in programmer and will fully utilize both my
            technical and managerial abilities
          </i>
        </p>
        <div class="my-5">
          <h5>EDUCATION</h5>
          <div class="row">
            <div class="col-sm-2">
              <p class="text-info">2010-2013</p>
            </div>
            <div class="col-sm-8">
              Bachelor of Computer Engineering, Rajamangala University of
              Technology Isan Khonkaen Campus, Khonkaen
            </div>
          </div>
        </div>
        <div class="my-5">
          <h5>EXPERIENCED PROGRAMING LANGUAGE</h5>
          <p><i>PHP, HTML, CSS3, Javascript</i></p>
        </div>
        <div class="my-5">
          <h5>EXPERIENCED STACK & TOOLS</h5>
          <p>
            <i>
              React.js, Next.js, React Native, Vue.js, Nuxt.js, Bootstrap,
              HTML5, Jquery, Linux, Git, Laravel 5-7, Composer, Wordpress,
              OpenCart, npm, Gulp, Jade, Scss, DigitalOcean, AWS, EC2, S3, RDS,
              Google Cloud, Cloudflare, Docker, Mysql, Nginx, Apache2
            </i>
          </p>
        </div>
        <div class="my-5">
          <h5>WORK EXPERIENCES</h5>
          <div>
            <div class="mb-3">
              <h5 class="text-primary mb-0">
                Tencent (Thailand) Company Limited (March 2019- Nov 2019)
              </h5>
              <small class="text-warning">Full-stack developer</small>
            </div>
            <p class="my-3">
              Work with Topspace digital agency team in Tencent Thailand.
              Topspace team create and enhance Pruksa website. Work and enhance
              Sanook application.
            </p>
            <div>
              <span class="text-success">Stack & Tools:</span> EE, PHP, HTML5,
              CSS3, Android, Kotlin, JAVA, XML, Gitlab, Jira, Bootstrap
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Cv",
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response));
  },
};
</script>

<style scoped>
.cv-title {
  margin-bottom: 0;
}
.cv-position {
  font-style: italic;
  font-size: 14px;
}
h6 {
  margin-bottom: 0px;
  font-weight: bold;
}
</style>