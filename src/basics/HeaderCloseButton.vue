<template>
	<button
		type="button"
		class="HeaderCloseButton"
		data-text="CLOSE"
		@click="shouldHeaderOpen(false)"
	>
		CLOSE
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
@import "@/styles/utility/glitch.scss";

.HeaderCloseButton {
  position: fixed;
  top: calc(30px + 25px);
  right: calc(30px + 25px);
  z-index: $z-index-header;
  font-size: 5rem;
  color: $color-accent;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: attr(data-text);
  }

  &::before {
    @include chromatic-aberration-text($x: -2px, $color: #ff0000);
    left: 1px;
    animation: glitch-text-1 2s linear 0s infinite alternate-reverse;
  }
  &::after {
    @include chromatic-aberration-text($x: -2px, $color: complement(#ff0000));
    left: -1px;
    animation: glitch-text-2 2s linear 0s infinite alternate-reverse;
  }
}
</style>
