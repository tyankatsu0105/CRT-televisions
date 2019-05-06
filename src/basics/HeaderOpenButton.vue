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
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: $z-index-header;
  font-size: 5rem;
  color: #74f74b;
}
</style>
