<template>
	<div class="flex flex-col justify-center items-center lg:items-stretch lg:flex-row gap-4 sm:gap-8 font-light">
		<div
			v-for="(princing, index) in pricings"
			class="group w-full max-w-xl lg:max-w-sm p-6 sm:p-8 rounded-3xl flex flex-col gap-6 sm:gap-10 hover:bg-blue-600/40 transition-colors duration-300"
			:class="{ 'bg-blue-600': index === 1 }"
		>
			<h3 v-text="princing.price" class="font-display text-5xl" />
			<div class="space-y-2">
				<p v-text="princing.title" class="text-lg font-display" />
				<p
					v-text="princing.description"
					class="group-hover:text-white transition-colors duration-300"
					:class="{ 'text-slate-500': index !== 1 }"
				/>
			</div>
			<Button
				v-text="'Get started'"
				class="text-sm w-full font-normal group-hover:border-white group-hover:bg-white group-hover:text-slate-900 transition-colors duration-300"
				:class="index !== 1 ? 'border-slate-600 text-slate-400' : 'border-white bg-white text-slate-900'"
			/>
			<div class="flex flex-col gap-4 text-sm">
				<div
					v-for="feature in princing.features"
					class="flex items-center gap-4 group-hover:text-white transition-colors duration-300"
					:class="{ 'text-slate-400': index !== 1 }"
				>
					<IconCheck class="w-4" />
					<span v-text="feature" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Button from "./Button.vue"
import IconCheck from "./Icons/IconCheck.vue"
import { ref } from "vue"

const pricings = ref([
	{
		price: "$9",
		title: "Starter",
		description: "Good for anyone who is self-employed and just getting started.",
		features: [
			"Send 10 quotes and invoices",
			"Connect up to 2 bank accounts",
			"Track up to 15 expenses per month",
			"Manual payroll support",
			"Export up to 3 reports",
		],
	},
	{
		price: "$15",
		title: "Small business",
		description: "Perfect for small / medium sized businesses.",
		features: [
			"Send 25 quotes and invoices",
			"Connect up to 5 bank accounts",
			"Track up to 50 expenses per month",
			"Automated payroll support",
			"Export up to 12 reports",
			"Bulk reconcile transactions",
			"Track in multiple currencies",
		],
	},
	{
		price: "$39",
		title: "Enterprise",
		description: "For even the biggest enterprise companies.",
		features: [
			"Send unlimited quotes and invoices",
			"Connect up to 15 bank accounts",
			"Track up to 200 expenses per month",
			"Automated payroll support",
			"Export up to 25 reports, including TPS",
		],
	},
])
</script>
