<template>
	<footer class="py-14 text-slate-500 bg-slate-50">
		<Container class="flex flex-col gap-10">
			<div class="flex flex-col items-center gap-6">
				<a href="#">
					<Logo class="h-10" />
				</a>
				<nav class="items-center justify-center gap-3 hidden md:flex">
					<a
						v-for="menu in menuItems"
						v-text="menu.label"
						:href="menu.link"
						class="rounded-lg py-1.5 px-3 transition-colors duration-300 hover:bg-slate-100"
					/>
				</nav>
			</div>
			<hr />
			<div class="flex items-center text-center justify-between flex-col sm:flex-row gap-4">
				<p v-text="'Copyright © 2023 TaxPal. All rights reserved.'" />
				<div class="flex items-center gap-4">
					<a href="#" class="hover:text-slate-900 p-2 transition-colors duration-300">
						<IconGithub class="w-5" />
					</a>
					<a href="#" class="hover:text-slate-900 p-2 transition-colors duration-300">
						<IconTwitter class="w-5" />
					</a>
				</div>
			</div>
		</Container>
	</footer>
</template>

<script setup>
import Container from "./Container.vue"
import Logo from "./Icons/Logo.vue"
import IconGithub from "./Icons/IconGithub.vue"
import IconTwitter from "./Icons/IconTwitter.vue"

const props = defineProps({
	menuItems: Array,
})
</script>
