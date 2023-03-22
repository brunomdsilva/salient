<template>
	<header
		class="text-slate-600 text-sm font-light shadow bg-white/95 md:bg-white/80 py-10 sticky top-0 z-10 md:backdrop-blur"
	>
		<Container class="flex items-center justify-between gap-4">
			<div class="flex items-center gap-8">
				<a href="#">
					<Logo class="h-10" />
				</a>
				<nav class="items-center gap-3 hidden md:flex">
					<a
						v-for="menu in menuItems"
						v-text="menu.label"
						:href="menu.link"
						class="rounded-lg py-1.5 px-3 transition-colors duration-300 hover:bg-slate-100"
					/>
				</nav>
			</div>

			<div class="flex items-center sm:gap-4 gap-2">
				<a
					v-text="'Sign in'"
					href="#sign"
					class="rounded-lg py-1.5 px-3 transition-colors duration-300 hover:bg-slate-100 hidden md:block"
				/>

				<Button
					href="#get-started"
					class="bg-primary-600 border-primary-600 hover:bg-primary-400 hover:border-primary-400 text-white"
				>
					Get started <span v-text="'today'" class="hidden lg:inline" />
				</Button>

				<Dropdown class="md:hidden">
					<template #trigger>
						<IconBars class="w-5" />
					</template>

					<template #content>
						<DropdownItem v-for="menu in menuItems" :href="menu.link" v-text="menu.label" />
						<hr class="my-1 mx-3" />
						<DropdownItem href="#sign" v-text="'Sign in'" />
					</template>
				</Dropdown>
			</div>
		</Container>
	</header>
</template>

<script setup>
import Container from "./Container.vue"
import Logo from "./Icons/Logo.vue"
import Dropdown from "./Dropdown.vue"
import DropdownItem from "./DropdownItem.vue"
import IconBars from "./Icons/IconBars.vue"
import Button from "./Button.vue"
import { ref } from "vue"

const menuItems = ref([
	{ label: "Features", link: "#features" },
	{ label: "Testimonials", link: "#testimonials" },
	{ label: "Pricing", link: "#pricing" },
])
</script>
