<template>
	<div class="Default">
		<div class="Default_Container">
			<HeaderOpenButton />
			<VHeader />
			<transition
				name="page"
				appear
			>
				<main>
					<slot></slot>
				</main>
			</transition>
		</div>
	</div>
</template>

<script>
import VHeader from "@/containers/VHeader.vue";
import HeaderOpenButton from "@/basics/HeaderOpenButton.vue";

export default {
  components: {
    VHeader,
    HeaderOpenButton
  },
  metaInfo: {
    htmlAttrs: {
      lang: "ja"
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/styles/utility/transition-page.scss";

@keyframes glitch-background {
  $steps: 50;
  @for $i from 0 through $steps {
    #{percentage($i / $steps)} {
      clip-path: inset(
        percentage(random(100) / 100) 0 percentage(random(100) / 100)
      );
    }
  }
}

@keyframes glitch-text-1 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i / $steps)} {
      clip-path: inset(
        percentage(random(100) / 100) 0 percentage(random(100) / 100)
      );
    }
  }
}

@keyframes glitch-text-2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i / $steps)} {
      clip-path: inset(
        percentage(random(100) / 100) 0 percentage(random(100) / 100)
      );
    }
  }
}

.Default {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  &_Container {
    @include background-stripe($border-width: 2px);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100vw - 50px);
    height: calc(100vh - 50px);
    padding: 20px;
    overflow: hidden;
    overflow-y: scroll;
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
      content: "";
      animation: glitch-background 0.5s linear 0s infinite alternate-reverse;
    }
  }
}
</style>
