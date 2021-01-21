<template>
	<button
		class="HeaderOpenButton"
		type="button"
		@click="shouldHeaderOpen(true)"
	>
		Menu
	</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("VHeader", ["shouldHeaderOpen"])
  }
};
</script>

<style lang="scss" scoped>
.HeaderOpenButton {
  position: fixed;
  top: calc(30px + 25px);
  right: calc(30px + 25px);
  z-index: $z-index-header;
  font-size: 5rem;
  color: $color-accent;
}
</style>
