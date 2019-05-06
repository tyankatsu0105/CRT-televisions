<template>
	<div class="Index">
		<div class="Index_Wrap">
			<h1
				class="Index_Header"
				data-text="Tyankatsu"
			>
				Tyankatsu
			</h1>
		</div>
	</div>
</template>

<script>
export default {};
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
  $steps: 50;
  @for $i from 0 through $steps {
    #{percentage($i / $steps)} {
      clip-path: inset(
        percentage(random(100) / 100) 0 percentage(random(100) / 100)
      );
    }
  }
}

@keyframes glitch-text-2 {
  $steps: 50;
  @for $i from 0 through $steps {
    #{percentage($i / $steps)} {
      clip-path: inset(
        percentage(random(100) / 100) 0 percentage(random(100) / 100)
      );
    }
  }
}

.Index {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  &_Wrap {
    @include background-stripe($border-width: 2px);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100vw - 50px);
    height: calc(100vh - 50px);
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
  &_Header {
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
      left: 2px;
      text-shadow: -2px 0 $chromatic-aberration-color-main;
      animation: glitch-text-1 2s linear 0s infinite alternate-reverse;
    }
    &::after {
      left: -2px;
      text-shadow: -2px 0 $chromatic-aberration-color-sub;
      animation: glitch-text-2 2s linear 0s infinite alternate-reverse;
    }
  }
}
</style>
