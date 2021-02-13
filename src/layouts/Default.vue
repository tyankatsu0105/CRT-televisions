<template>
	<div class="Default">
		<transition
			name="page"
			appear
		>
			<div
				class="Default_Container"
				:class="{ _openHeader: isHeaderOpen }"
			>
				<HeaderOpenButton />
				<VHeader />
				<div class="Default_ContentsWrap">
					<main class="Default_Contents">
						<slot></slot>
					</main>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
  import { mapState } from "vuex";
  import VHeader from "~/ui/components/VHeader.vue";
  import HeaderOpenButton from "~/ui/atom/HeaderOpenButton";
  export default {
    components: {
      VHeader,
      HeaderOpenButton,
    },
    computed: {
      ...mapState("VHeader", ["isHeaderOpen"]),
    },
    metaInfo: {
      htmlAttrs: {
        lang: "ja",
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "@/styles/utility/transition-page.scss";
  @import "@/styles/utility/glitch.scss";
  .Default {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    padding: 25px;
    &_Container {
      @include background-stripe($border-width: 2px);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      &::before {
        @include background-stripe(
          $color1: rgba(41, 41, 41, 0.062),
          $border-width: 1px
        );
        position: absolute;
        top: 1px;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        content: "";
        animation: glitch-background-1 0.5s linear 0s infinite alternate-reverse;
      }
    }
    &_ContentsWrap {
      width: 100%;
      height: 100%;
      padding: 20px;
      padding-bottom: calc(25px + 72px);
      overflow-y: scroll;
    }
    &_Contents {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }
  }
  ._openHeader {
    overflow: hidden;
  }
</style>
