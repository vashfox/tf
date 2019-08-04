<template>
  <div id="app">
    <!-- Banner Section -->
    <div class="site-banner h-screen flex flex-col items-center justify-center px-10">
      <img class="tf-image w-64" src="/img/67412323_495283111250152_9004867031664689152_n.png" />
      <h1 class="text-5xl font-black">ThirdFloor</h1>
      <h2 class="text-2xl font-bold -mt-5 mb-3 have-some-space">solutions</h2>
      <p
        class="text-gray-700 leading-snug font-medium text-center"
      >A fast and growing software company, that build fast, elegant and high quality products.</p>
      <!-- <p class="text-2xl leading-snug font-medium text-center">We bring ideas into reality.</p> -->

      <!-- <p
        class="text-center leading-snug"
      >Engage with us now, and let's start making your ideas into reality.</p>-->
      <a
        @click="showDialog = true"
        class="bg-yellow-500 text-yellow-100 font-bold uppercase shadow mt-10 py-3 px-8 rounded cursor-pointer"
      >Partner with us</a>
    </div>
    <!-- End Banner Section -->

    <div class="bg-white">
      <div class="container mx-auto px-8 py-10 flex flex-col text-left items-center">
        <p class="text-center text-2xl font-medium">We love to see you succeed</p>
        <div class="sm:flex sm:my-5 sm:justify-center sm:items-center">
          <img class="my-5 sm:w-64 sm:mr-6 md:w-1/2 lg:w-1/3" src="/undraw/undraw_business_deal_cpi9.svg" />
          <div class="py-2 mt-3">
            <p
              class="mt-2 text-gray-600 text-center md:text-lg"
            >From showing you how easy it is to connect with us, to answering any concerns you may have, we are there to assist in every way necessary.</p>
            <p
              class="mt-2 text-gray-600 text-center md:text-lg"
            >Our team are extremely reliable due to our carefully honed processes. Most of the service calls and emails we attend to are related to the partnership you can trust – and we’ll do the best way possible as desired.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Simple About Team Section -->
    <!-- End Slogan Section -->

    <!-- Services Section -->
    <div class="services bg-gray-200">
      <div class="container mx-auto p-10 flex flex-col items-center justify-center">
        <p class="text-center text-2xl font-medium">Mobile or Web?</p>
        <div class="sm:flex flex-row-reverse sm:my-5 sm:justify-center sm:items-center">
          <img class="my-5 sm:w-64 sm:ml-6 md:w-1/2 lg:w-1/3" src="/undraw/undraw_web_devices_ad58.svg" />
          <p
            class="text-base text-gray-600 font-medium pt-2 text-center md:text-lg"
          >Our bread and butter is the responsive web design. We create 100% web design that is completely custom to cater to your businesses exact message and needs. A great experience that your website is vital for your visitors no matter what device they’re on.</p>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="container mx-auto p-10 flex flex-col items-center justify-center">
        <p class="text-center text-2xl font-medium">Modern problems, modern solution</p>
        <div class="sm:flex sm:my-5 sm:justify-center sm:items-center">
          <img class="my-5 sm:w-64 sm:mr-6  md:w-1/2 lg:w-1/3" src="/undraw/undraw_user_flow_vr6w.svg" />
          <p class="text-base text-gray-600 font-medium pt-2 text-center md:text-lg">
            Our team uses one of the best technologies on the wild,
            yet ensuring the right tool for the job.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-gray-100">
      <div class="container mx-auto  p-10 flex flex-col items-center justify-center">
        <p class="text-center text-2xl font-medium">Teamwork and Collaboration</p>
        <div class="sm:flex flex-row-reverse sm:my-5 sm:justify-center sm:items-center">
          <img class="my-5 sm:w-64 sm:ml-6  md:w-1/2 lg:w-1/3" src="/undraw/undraw_co-working_825n.svg" />
          <p
            class="text-base text-gray-600 font-medium pt-2 text-center md:text-lg"
          >Your product will start taking shape and rapid prototyping. Through collaborative and integrated process and development enables us to make quick, pursuit adjustments based on user and clients feedback software product that people love to use and that delivers clear business outcomes.</p>
        </div>
      </div>
    </div>

    <div
      class="bg-gray-200"
    >
      <div class="container mx-auto flex border-transparent px-3 py-4 flex-col items-center justify-center relative">
        <p class="text-center text-2xl font-medium p-6 pb-0">Sharpest tools from our shed</p>
        <p
          class="text-base px-6 pb-3 text-gray-600 font-medium pt-2 text-center md:text-lg"
        >We use modern technologies to create impactful and engaging experiences for website and mobile. Your website is a living entity and requires care.</p>
        <div class="flex flex-col w-full mt-5 lg:flex-row">
          <div
          class="m-2 inline-block shadow-md overflow-hidden rounded p-6 bg-white flex items-center h-32 justify-between relative lg:h-300 lg:w-64 lg:flex-col lg:flex-col-reverse lg:content-start lg:justify-around "
         
          v-for="(s,i ) in skillset"
          :key="i"
        >
          <span class="pr-20 lg:pr-0">
            <p class="text-2xl font-medium lg:text-center" :class="s.custom_class">{{ s.title }}</p>
            <p class="text-base text-gray-500 leading-tight lg:text-center">{{ s.description }}</p>
          </span>
          <img class="w-24 absolute -right-24 lg:h-24 lg:right-auto lg:static lg:flex-shrink-0" :src="s.logo" />
        </div>
        </div>
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

    <DevelopersSection/>
    <div class="bg-gray-900">
      <div class="container mx-auto px-8 py-10 flex flex-col text-left items-center">
        <p class="text-center text-white text-2xl font-medium">Ready to get started?</p>
        <div class="py-2 mt-3 text-gray-200 text-center">
          <p>Let's start the beginning of our long and fruitful relationship.</p>
        </div>
        <a
          @click="showDialog = true"
          class="bg-blue-500 cursor-pointer text-blue-200 font-bold uppercase shadow mt-10 py-3 px-8 rounded"
        >Let's talk</a>
      </div> 
    </div>

    <!-- The Team Section -->
    <!-- End The Team Section -->

    <!-- Contact us Section -->
    <div class="footer bg-gray-900 text-white">
      <div class="container mx-auto">
         <address class="address-links px-8 pt-8 pb-4 not-italic">
        <a
          :href="`mailto:${contact.email}`"
          target="_blank"
          class="block font-bold text-blue-300 cursor-pointer"
        >{{ contact.email }}</a>
        <a
          :href="`tel:${contact.phone}`"
          target="_blank"
          class="block cursor-pointer"
        >{{ contact.phone }}</a>
        <a class="block pt-3 cursor-pointer">{{ contact.address }}</a>
      </address>
      <div class="social-media-links flex pt-4 pb-8 px-8">
        <a :href="mediaLinks.github" target="_blank" class="w-8 cursor-pointer">
          <GitHubSVG />
        </a>
        <a :href="mediaLinks.facebook" target="_blank" class="w-8 cursor-pointer">
          <FacebookSVG />
        </a>
        <a :href="mediaLinks.linkedin" target="_blank" class="w-8 cursor-pointer">
          <LinkedInSVG />
        </a>
      </div>
        </div>
    </div>
    <!-- End Contact us Section -->
    <ContactUs :phone="contact.phone" v-if="showDialog" @cancel="showDialog = false" />
  </div>
</template>

<script>
import GitHubSVG from "@/assets/icons/github.svg";
import FacebookSVG from "@/assets/icons/facebook.svg";
import LinkedInSVG from "@/assets/icons/linkedin.svg";
import ContactUs from "@/components/ContactUsDialog";
import DevelopersSection from "@/components/DevelopersSection"

export default {
  name: "app",
  components: {
    GitHubSVG,
    FacebookSVG,
    LinkedInSVG,
    ContactUs,
    DevelopersSection
  },
  data() {
    /**
     * email: thirdfloor.solutions@gmail.com
     * github: https://github.com/third-floor-solutions
     * linkedin: https://www.linkedin.com/in/third-floor-355045190/
     * facebook: https://business.facebook.com/thirdfloor.solutions/
     */
    return {
      company: "Thirdfloor",
      contact: {
        email: "thirdfloor.solutions@gmail.com",
        phone: "+639171698676",
        address:
          "Hillmand St. Catalunan, Davao City, Davao del Sur, 8000, Philippines"
      },
      mediaLinks: {
        linkedIn: "https://www.linkedin.com/in/third-floor-355045190/",
        facebook: "https://business.facebook.com/thirdfloor.solutions/",
        github: "https://github.com/third-floor-solutions"
      },
      skillset: [
        {
          logo: "/logo/vue.svg",
          title: "Vue",
          description: "The Progressive JavaScript Framework",
          custom_class: ["text-color-vue"]
        },
        {
          logo: "/logo/laravel.svg",
          title: "Laravel",
          description: "The PHP Framework For Web Artisans",
          custom_class: ["text-color-laravel"]
        },
        {
          logo: "/logo/graphql.svg",
          title: "GraphQL",
          description: "A query language for your API",
          custom_class: ["text-color-graphql"]
        },
        {
          logo: "/logo/nodejs-icon.svg",
          title: "NodeJS",
          description:
            "A JavaScript runtime built on Chrome's V8",
          custom_class: ["text-color-nodejs"]
        },
        {
          logo: "/logo/react.svg",
          title: "React",
          description: "A JavaScript library for building user interfaces",
          custom_class: ["text-color-react"]
        }
        // {
        //   logo: "/logo/apple-ios.svg",
        //   title: "Apple iOS"
        // },
        // {
        //   logo: "/logo/android.svg",
        //   title: "Android"
        // }
      ],
      showDialog: false
    };
  }
};
</script>

