<template>
	<transition
		name="header"
	>
		<header
			v-if="isHeaderOpen"
			class="VHeader"
		>
			<nav class="VHeader-Menu">
				<ul class="VHeader_MenuList">
					<li class="VHeader_MenuListItem">
						<g-link :to="{name: 'about'}">
							About
						</g-link>
					</li>
				</ul>
			</nav>
		</header>
	</transition>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("VHeader", ["isHeaderOpen"])
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
  background-color: #fff;
}
</style>
