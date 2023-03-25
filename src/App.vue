<template>
	<div class="text-slate-900 bg-white min-h-screen">
		<TheHeader :menuItems="menuItems" />
		<TheMain />
		<TheFooter :menuItems="menuItems" />
	</div>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue"
import TheMain from "./components/TheMain.vue"
import TheFooter from "./components/TheFooter.vue"
import { ref } from "vue"

const menuItems = ref([
	{ label: "Features", link: "#features" },
	{ label: "Testimonials", link: "#testimonials" },
	{ label: "Pricing", link: "#pricing" },
	{ label: "FAQ", link: "#faq" },
])
</script>
