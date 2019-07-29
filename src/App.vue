<template>
  <div id="app">
    <!-- Banner Section -->
    <div class="site-banner h-screen flex flex-col items-center justify-center p-10">
      <img class="w-10" src="@/assets/trd.png" />
      <h1 class="text-5xl font-bold">Thirdfloor</h1>
      <p
        class="text leading-snug font-medium text-center"
      >We help companies in achieving technological success through mobile and web</p>
      <!-- <p class="text-2xl leading-snug font-medium text-center">We bring ideas into reality.</p> -->

      <!-- <p
        class="text-center leading-snug"
      >Engage with us now, and let's start making your ideas into reality.</p>-->
      <a
        class="bg-blue-800 hover:bg-blue-900 text-white font-bold mt-10 py-2 px-4 rounded"
      >Partner with us</a>
    </div>
    <!-- End Banner Section -->

    <div class="px-8 py-10 flex flex-col text-left items-center">
      <p class="text-center text-2xl font-medium">We love to see you succeed</p>
      <div class="py-2 mt-3">
        <p
          class="mt-2"
        >The Quick brown fox jumps over the lazy dog.The Quick brown fox jumps over the lazy dog.The Quick brown fox jumps over the lazy dog.The Quick brown fox jumps over the lazy dog.</p>
      </div>
    </div>

    <!-- Simple About Team Section -->
    <!-- End Slogan Section -->

    <!-- Services Section -->
    <div class="services bg-gray-200 p-10 flex flex-col items-center justify-center">
      <p class="text-center text-2xl font-medium">Mobile or Web?</p>
      <img src="/undraw/undraw_web_devices_ad58.svg" />
      <p class="text-base font-medium pt-2 text-center">We got you covered!</p>
    </div>

    <div class="p-10 flex flex-col items-center justify-center">
      <p class="text-center text-2xl font-medium">Modern problems, modern solution</p>

      <img src="/undraw/undraw_user_flow_vr6w.svg" />
      <p class="text-base font-medium pt-2 text-center">
        Our team uses one of the best technologies on the wild,
        yet ensuring the right tool for the job.
      </p>
    </div>
    <div
      class="bg-gray-800 flex border-transparent px-3 py-4 flex-col items-center justify-center relative"
    >
      <p class="text-center text-2xl font-medium p-6 text-white">Sharpest tools from our shed</p>
      <div
        class="inline-block mt-3 rounded w-full p-6 bg-white flex items-center h-32 justify-between"
        v-for="(s,i ) in skillset"
        :key="i"
      >
        <p class="text-2xl font-medium">{{ s.title }}</p>
        <img class="w-24" style="fill: orange;" :src="s.logo" />
      </div>
    </div>

    <!-- <div class="services bg-whiteflex w-full flex-col items-center justify-center">
      <div class="flex flex-col w-full">
        <div
          v-for="(skill, i) in skillset"
          :key="i"
          class="flex flex-col bg-gray-100 items-center justify-center h-64 w-full border-b border-gray-300"
        >
          <img :src="skill.logo" class="w-32" />
          <a class="text-2xl pt-5 font-extrabold">{{ skill.title }}</a>
        </div>
      </div>
    </div>-->

    <!-- End Services Section -->

    <!-- <div class="bg-gray-900 px-8 py-10 flex flex-col text-left items-center">
      <p class="text-center text-gray-500 text-2xl font-medium">How can we help you</p>
      <div class="py-2 mt-3 ">
        <p  class="text-gray-500 font-semibold">Agency Partner</p>
        <p class="mt-2  text-white">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div class="py-2 text-left">
        <p class="text-gray-500 font-semibold">Development Team</p>
        <p class="mt-2  text-white">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>  
      </div>
      <div class="py-2 text-left">
        <p  class="text-gray-500 font-semibold">Fox One</p>
        <p class="mt-2  text-white">The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog.</p>
      </div>
    </!-->

    <div class="bg-gray-900 px-8 py-10 flex flex-col text-left items-center">
      <p class="text-center text-white text-2xl font-medium">Interested in working with us?</p>

      <div class="py-2 text-white text-center font-semibold">
        <p>Let's start the beginning of our long partnership in achieving success.</p>
      </div>
      <a
        class="bg-blue-800 hover:bg-blue-900 text-white font-bold mt-5 py-2 px-4 rounded"
      >Let's talk</a>
    </div>

    <!-- The Team Section -->
    <!-- End The Team Section -->

    <!-- Contact us Section -->
    <div class="footer bg-gray-900 text-white">
      <address class="address-links px-8 pt-8 pb-4 not-italic">
        <a
          :href="`mailto:${contact.email}`"
          target="_blank"
          class="block font-bold"
        >{{ contact.email }}</a>
        <a :href="`tel:${contact.phone}`" target="_blank" class="block">{{ contact.phone }}</a>
        <a class="block pt-3">{{ contact.address }}</a>
      </address>
      <div class="social-media-links flex pt-4 pb-8 px-8">
        <a :href="mediaLinks.github" target="_blank" class="w-8">
          <GitHubSVG />
        </a>
        <a :href="mediaLinks.facebook" target="_blank" class="w-8">
          <FacebookSVG />
        </a>
        <a :href="mediaLinks.linkedin" target="_blank" class="w-8">
          <LinkedInSVG />
        </a>
      </div>
    </div>
    <!-- End Contact us Section -->
  </div>
</template>

<script>
import GitHubSVG from "@/assets/icons/github.svg";
import FacebookSVG from "@/assets/icons/facebook.svg";
import LinkedInSVG from "@/assets/icons/linkedin.svg";

export default {
  name: "app",
  components: {
    GitHubSVG,
    FacebookSVG,
    LinkedInSVG
  },
  data() {
    return {
      company: "Thirdfloor",
      contact: {
        email: "thirdfloor.solutions@gmail.com",
        phone: "+639171698676",
        address:
          "Hillmand St. Catalunan, Davao City, Davao del Sur, 8000, Philippines"
      },
      mediaLinks: {
        linkedIn: "https://linkedin.com",
        facebook: "https://facebook.com",
        github: "https://github.com"
      },
      skillset: [
        {
          logo: "/logo/vue.svg",
          title: "Vue"
        },
        {
          logo: "/logo/laravel.svg",
          title: "Laravel"
        },
        {
          logo: "/logo/graphql.svg",
          title: "GraphQL"
        },
        {
          logo: "/logo/nodejs-1.svg",
          title: "NodeJS"
        },
        {
          logo: "/logo/react.svg",
          title: "React"
        },
        {
          logo: "/logo/apple-ios.svg",
          title: "Apple iOS"
        },
        {
          logo: "/logo/android.svg",
          title: "Android"
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.site-banner {
  background-color: #f7fafc;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23cbd5e0' fill-opacity='0.5' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
}

.h-screen-halves {
  height: 50vh;
}
.h-screen-quarter {
  height: 75vh;
}

.footer {
  position: relative;
}

.footer::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/undraw/undraw_connected_world_wuay.svg");
  background-size: 150%;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.075;
}
</style>
