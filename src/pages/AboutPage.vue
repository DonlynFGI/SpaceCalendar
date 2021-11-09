<template>
  <div class="calendar">
    <h1>The image of the day</h1>
    <img src="image" alt="" />
  </div>
</template>

<script>
import { img } from "./Page.vue";
export default {
  name: "Calendar",
  image: `${img}`,
};
</script>
