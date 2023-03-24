<template>
	<div class="flex flex-col justify-center items-center lg:items-stretch lg:flex-row gap-8">
		<div
			v-for="pricing in pricings"
			class="group w-full max-w-xl lg:max-w-sm p-6 sm:p-8 rounded-3xl flex flex-col gap-6 sm:gap-10 transition-all duration-300 border-2 border-transparent hover:border-white hover:shadow-2xl hover:-translate-y-4"
			:class="{ 'bg-blue-600': pricing.recommended }"
		>
			<h3 v-text="pricing.price" class="font-display text-5xl" />
			<div class="space-y-2">
				<p v-text="pricing.title" class="text-lg font-display" />
				<p
					v-text="pricing.description"
					class="group-hover:text-white transition-colors duration-300"
					:class="{ 'text-slate-500': !pricing.recommended }"
				/>
			</div>
			<Button
				v-text="'Get started'"
				class="text-sm w-full transition-colors duration-300 border-white"
				:class="{ 'bg-white text-slate-900': pricing.recommended }"
			/>
			<div class="flex flex-col gap-4 text-sm">
				<div
					v-for="feature in pricing.features"
					class="flex items-center gap-4 group-hover:text-white transition-colors duration-300"
					:class="{ 'text-slate-400': !pricing.recommended }"
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
import IconCheck from "./icons/IconCheck.vue"
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
		recommended: true,
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
