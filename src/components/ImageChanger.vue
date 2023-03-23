<template>
	<div class="bg-white/10 border border-white/10 rounded-xl backdrop-blur-md overflow-hidden">
		<div class="p-6 text-center text-white space-y-6">
			<div class="flex items-center justify-center gap-4 flex-wrap font-display text-lg tracking-widest">
				<button
					v-for="(feature, index) in features"
					v-text="feature.label"
					@click.prevent="selectedFeatureIndex = index"
					class="py-1.5 px-4 rounded-full hover:bg-white/20 transition-colors duration-300"
					:class="{ '!bg-white text-blue-600': selectedFeatureIndex === index }"
				/>
			</div>
			<p v-text="features[selectedFeatureIndex].description" class="text-lg" />
		</div>
		<img :src="features[selectedFeatureIndex].img" :alt="features[selectedFeatureIndex].label" class="rounded-xl" />
	</div>
</template>

<script setup>
import { ref } from "vue"

const selectedFeatureIndex = ref(0)
const features = ref([
	{
		label: "Payroll",
		description:
			"Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
		img: "/imgs/features/payroll.webp",
	},
	{
		label: "Claim expenses",
		description:
			"All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
		img: "/imgs/features/expenses.webp",
	},
	{
		label: "VAT handling",
		description:
			"We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
		img: "/imgs/features/vat-returns.webp",
	},
	{
		label: "Reporting",
		description:
			"Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
		img: "/imgs/features/reporting.webp",
	},
])
</script>
