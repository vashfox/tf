<template>
  <div
    class="modal fixed bg-black top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center"
  >
    <div class="w-full h-full bg-gray-200 shadow p-6 flex flex-col items-center justify-center">
      <p class="text-center  font-bold text-gray-600">Leave us a message here, or give us a call at 
          <a :href="`tel:${phone}`" target="_blank" class="block">{{ phone }}</a>
      </p>
      <form class="w-full">
        <div class="mt-4">
          <label class="block font-bold text-gray-600" for="male">Full Name</label>
          <input class="w-full bg-gray-100 focus:bg-white block border border-gray-500 rounded p-2" type="text" name="firstname" />
        </div>
 
        <div class="mt-4">
          <label class="block font-bold text-gray-600" for="male">Email</label>
          <input class="w-full bg-gray-100 focus:bg-white block border border-gray-500 rounded p-2" type="email" name="lastname" />
        </div>
        <div class="mt-4">
          <label class="block font-bold text-gray-600" for="male">Message</label>
          <textarea class="w-full bg-gray-100 focus:bg-white block border border-gray-500 rounded p-2" rows="4"></textarea>
        </div>

        <div class="flex flex-col items-center mt-10">
          <input class="block border bg-yellow-500 text-white shadow rounded py-2 px-8 text-2xl" type="submit" value="Submit" />
          <a class="mt-10 text-base text-gray-500" @click="$emit('cancel')">I change my mind.</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
    props: [ "phone" ]
}
</script>