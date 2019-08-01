<template>
  <div
    class="modal fixed top-0 sm:overflow-auto bottom-0 left-0 right-0 flex flex-col items-center justify-center"
  >
    <div
      class="modal-container animated overflow-auto zoomIn faster w-full h-full sm:w-9/12 md:w-2/3 lg:w-2/4 xl:w-1/3 sm:h-auto sm:rounded bg-white shadow p-6 sm:py-10 flex flex-col items-center justify-center"
    >
      <img src="/undraw/undraw_new_message_2gfk.svg" class="w-32 mt-24 sm:mt-0" />
      <p class="text-center font-bold text-gray-600 py-3">
        Leave us a message here, or give us a call at
        <a
          :href="`tel:${phone}`"
          target="_blank"
          class="block"
        >{{ phone }}</a>
      </p>
      <form class="w-full">
        <div class="mt-4">
          <label class="block font-bold text-gray-600" for="male">Full Name</label>
          <input
            class="w-full bg-gray-100 focus:bg-white block border border-gray-500 rounded p-2"
            type="text"
            name="firstname"
          />
        </div>

        <div class="mt-4">
          <label class="block font-bold text-gray-600" for="male">Email</label>
          <input
            class="w-full bg-gray-100 focus:bg-white block border border-gray-500 rounded p-2"
            type="email"
            name="lastname"
          />
        </div>
        <div class="mt-4">
          <label class="block font-bold text-gray-600" for="male">Message</label>
          <textarea
            class="w-full bg-gray-100 focus:bg-white block border border-gray-500 rounded p-2"
            rows="4"
          ></textarea>
        </div>

        <div class="flex flex-col items-center mt-10">
          <input
            class="block cursor-pointer border bg-yellow-500 text-white shadow rounded py-2 px-8"
            type="submit"
            value="Send"
          />
          <a
            class="mt-10 text-base text-gray-500 cursor-pointer mb-24 sm:mb-0"
            @click="$emit('cancel')"
          >I change my mind.</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: ["phone"]
};
</script>
<style>
.modal {
  background: rgba(0, 0, 0, 0.4);
}

.modal-container {
  transition: all 0.5s;
}

@media (min-width: 640px) {
  .modal-container {
    min-width: 450px;
    max-width: 500px;
  }
}

.animated.delay-faster {
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}
</style>
