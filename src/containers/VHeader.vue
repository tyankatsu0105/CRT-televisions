<template>
	<transition
		name="header"
	>
		<header
			v-if="isHeaderOpen"
			class="VHeader"
		>
			<HeaderCloseButton />
			<nav class="VHeader_Menu">
				<ul class="VHeader_MenuList">
					<li class="VHeader_MenuListItem">
						<g-link
							:to="{name: 'home'}"
							@click.native="shouldHeaderOpen(false)"
						>
							HOME
						</g-link>
					</li>
					<li class="VHeader_MenuListItem">
						<g-link
							:to="{name: 'about'}"
							@click.native="shouldHeaderOpen(false)"
						>
							ABOUT
						</g-link>
					</li>
				</ul>
			</nav>
		</header>
	</transition>
</template>

<script>
import { mapState, mapActions } from "vuex";
import HeaderCloseButton from "@/basics/HeaderCloseButton.vue";

export default {
  components: {
    HeaderCloseButton
  },
  computed: {
    ...mapState("VHeader", ["isHeaderOpen"])
  },
  methods: {
    ...mapActions("VHeader", ["shouldHeaderOpen"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/utility/transition-header.scss";

.VHeader {
  position: absolute;
  top: 0;
  left: 0;
  z-index: $z-index-header-menu;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: rgba(180, 180, 180, 0.9);

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
  }

  &_Menu {
    position: relative;
    padding: 130px 20px;
  }

  &_MenuListItem {
    font-size: 5rem;
    font-weight: bold;
    color: $color-accent;
    a {
      padding: 15px;
      &:hover {
        color: $color-black;
        background-color: $color-accent;
      }
    }
  }
}
</style>
