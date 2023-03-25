<template>
	<div class="sm:columns-2 lg:columns-3">
		<div v-for="testimonial in testimonials" class="inline-block w-full pt-4">
			<figure class="relative p-6 rounded-2xl bg-white shadow-xl flex flex-col gap-6">
				<IconQuotes class="absolute left-6 top-6 text-slate-100" />
				<blockquote v-text="testimonial.text" class="relative text-lg tracking-tight leading-relaxed" />
				<hr />
				<figcaption class="flex items-center justify-between gap-4">
					<div class="space-y-1">
						<h3 v-text="testimonial.name" class="font-display" />
						<p v-text="testimonial.job" class="text-sm text-slate-500" />
					</div>
					<img :src="testimonial.src" :alt="testimonial.name" class="w-14 aspect-square rounded-full" />
				</figcaption>
			</figure>
		</div>
	</div>
</template>

<script lang="ts" setup>
import IconQuotes from "./icons/IconQuotes.vue"
import { ref } from "vue"

const testimonials = ref([
	{
		name: "Sheryl Berge",
		job: "CEO at Lynch LLC",
		src: "/imgs/testimonials/sheryl-berge.webp",
		text: "TaxPal is so easy to use I can't help but wonder if it's really doing the things the government expects me to do.",
	},
	{
		name: "Amy Hahn",
		job: "Director at Velocity Industries",
		src: "/imgs/testimonials/amy-hahn.webp",
		text: "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
	},
	{
		name: "Leland Kiehn",
		job: "Founder of Kiehn and Sons",
		src: "/imgs/testimonials/leland-kiehn.webp",
		text: "The best part about TaxPal is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
	},
	{
		name: "Erin Powlowski",
		job: "COO at Armstrong Inc",
		src: "/imgs/testimonials/erin-powlowski.webp",
		text: "There are so many things I had to do with my old software that I just don't do at all with TaxPal. Suspicious but I can't say I don't love it.",
	},
	{
		name: "Peter Renolds",
		job: "Founder of West Inc",
		src: "/imgs/testimonials/peter-renolds.webp",
		text: "I used to have to remit tax to the EU and with TaxPal I somehow don't have to do that anymore. Nervous to travel there now though.",
	},
	{
		name: "Amy Hahn",
		job: "Director at Velocity Industries",
		src: "/imgs/testimonials/amy-hahn.webp",
		text: "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
	},
])
</script>
