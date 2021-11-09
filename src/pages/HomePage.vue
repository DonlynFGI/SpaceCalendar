<template>
  <button class="btn btn-primary" @click="getPic">Get pic</button>
</template>

<script>
import { apodService } from "../services/apodService";
import { logger } from "../utils/Logger";
export default {
  name: "Home",
  setup() {
    return {
      async getPic() {
        try {
          logger.log("button works");
          await apodService.getPic();
        } catch (error) {
          logger.error(error);
        }
      },
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
