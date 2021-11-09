<template>
  <img src:{{img}} alt="" />
</template>


<script>
import { apod } from "../services/AxiosService";

export default {
  setup() {
    img = apod + "2021-8-8";
  },
};
</script>



