<template>
  <div id="app">
    <!-- Banner Section -->
    <div class="site-banner h-screen flex flex-col items-center justify-center">
      <h1 class="text-5xl font-bold">Thirdfloor</h1>
      <p class="text-2xl">Chinimini ini bunny</p>
    </div>
    <!-- End Banner Section -->

    <!-- Simple About Team Section -->
    <!-- End Slogan Section -->

    <!-- Services Section -->
    <div class="services h-screen bg-gray-100 p-4 flex flex-col items-center justify-center">
      <p>We got lots of tools on our workbox, here are the finest:</p>Laravel, Vue, GraphQL, NodeJs, ReactJs, TailwindCss
      <p>Mobile or Web? We got you covered!</p>
    </div>
    <!-- End Services Section -->

    <!-- The Team Section -->
    <!-- End The Team Section -->

    <!-- Contact us Section -->
    <address class="address-links p-4 bg-gray-900 text-white not-italic">
      <a
        :href="`mailto:${contact.email}`"
        target="_blank"
        class="block font-bold"
      >{{ contact.email }}</a>
      <a :href="`tel:${contact.phone}`" target="_blank" class="block">{{ contact.phone }}</a>
      <a class="block pt-3">{{ contact.address }}</a>
    </address>
    <div class="social-media-links flex p-4 bg-gray-900 text-white">
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
      }
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
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23cbd5e0' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>
