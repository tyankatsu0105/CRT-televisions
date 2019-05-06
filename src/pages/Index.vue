<template>
	<Layout>
		<div class="Index">
			<h1
				class="Index_Heading"
				data-text="Tyankatsu"
			>
				Tyankatsu
			</h1>
		</div>
	</Layout>
</template>

<script>
import Layout from "@/layouts/Default.vue";

export default {
  components: {
    Layout
  }
};
</script>


<style lang="scss" scoped>
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

.Index {
  &_Heading {
    position: relative;
    font-size: 10rem;
    font-weight: bold;
    color: #fff;

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
      @include chromatic-aberration-text(
        $x: -2px,
        $color: $chromatic-aberration-color-main
      );
      left: 1px;
      animation: glitch-text-1 2s linear 0s infinite alternate-reverse;
    }
    &::after {
      @include chromatic-aberration-text(
        $x: -2px,
        $color: $chromatic-aberration-color-sub
      );
      left: -1px;
      animation: glitch-text-2 2s linear 0s infinite alternate-reverse;
    }
  }
}
</style>
