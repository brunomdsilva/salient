<template>
	<main>
		<Section class="bg-white">
			<Container class="space-y-24 sm:space-y-36">
				<div class="w-full max-w-4xl mx-auto text-center space-y-6 sm:space-y-10">
					<div class="space-y-4 sm:space-y-6">
						<h1 class="text-4xl font-display font-medium tracking-tight sm:text-7xl">
							Accounting
							<span class="text-primary-500 relative">
								<IconTextDecoration />
								<span v-text="'made simple'" class="relative" />
							</span>
							for small businesses.
						</h1>
						<p class="w-full max-w-2xl mx-auto sm:text-lg text-slate-700">
							Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and
							hope you don't get audited.
						</p>
					</div>
					<div class="flex items-center justify-center flex-col sm:flex-row gap-4 sm:gap-6">
						<Button v-text="'Get 6 months for free'" class="bg-slate-900 hover:bg-slate-700 text-white" />
						<Button class="group flex items-center gap-3 hover:border-slate-600">
							<IconPlay class="w-4 text-primary-500 group-hover:animate-pulse" />
							<span v-text="'Watch video'" />
						</Button>
					</div>
				</div>
				<div class="space-y-6">
					<p class="text-center font-medium">Trusted by these six companies so far</p>
					<div class="flex items-center justify-center gap-10 sm:gap-14 flex-wrap">
						<img v-for="partner in partners" :src="partner.src" :alt="partner.name" class="h-10 sm:h-12" />
					</div>
				</div>
			</Container>
		</Section>

		<Section class="bg-blue-500 bg-[url('/imgs/featured-bg-1.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
			<Container class="text-center text-white">
				<div class="w-full max-w-lg mx-auto space-y-6">
					<h2 v-text="'Get started today'" class="text-3xl sm:text-4xl font-display font-light" />
					<p>
						It's time to take control of your books. Buy our software so you can feel like you're doing
						something productive.
					</p>
					<Button
						v-text="'Get 6 months free'"
						class="bg-white border-white text-slate-900 hover:bg-white/80 hover:border-transparent"
					/>
				</div>
			</Container>
		</Section>

		<Section class="bg-slate-50" id="testimonials">
			<Container class="space-y-4">
				<div class="w-full max-w-2xl space-y-4 mx-auto text-center font-display">
					<h2 v-text="'Loved by businesses worldwide.'" class="text-3xl sm:text-4xl font-display" />
					<p class="text-slate-700 text-lg tracking-tight font-light">
						Our software is so simple that people can't help but fall in love with it. Simplicity is easy
						when you just skip tons of mission-critical features.
					</p>
				</div>

				<Testimonials />
			</Container>
		</Section>

		<Section class="bg-slate-900" id="pricing">
			<Container class="text-white space-y-16">
				<div class="text-center space-y-6">
					<h2 class="text-3xl sm:text-4xl font-display font-light">
						<span class="relative">
							<IconTextDecoration2 />
							<span v-text="'Simple pricing,'" class="relative" />
						</span>
						for everyone.
					</h2>
					<p class="text-slate-400 text-lg">
						It doesn't matter what size your business is, our software won't work well for you.
					</p>
				</div>

				<PricingCards />
			</Container>
		</Section>
	</main>
</template>

<script setup>
import Container from "./Container.vue"
import Section from "./Section.vue"
import Button from "./Button.vue"
import Testimonials from "./Testimonials.vue"
import PricingCards from "./PricingCards.vue"
import IconTextDecoration from "./Icons/IconTextDecoration.vue"
import IconTextDecoration2 from "./Icons/IconTextDecoration2.vue"
import IconPlay from "./Icons/IconPlay.vue"
import { ref } from "vue"

const partners = ref([
	{ name: "Laravel", src: "/imgs/partners/laravel.svg" },
	{ name: "Mirage", src: "/imgs/partners/mirage.svg" },
	{ name: "Statamic", src: "/imgs/partners/statamic.svg" },
	{ name: "Statickit", src: "/imgs/partners/statickit.svg" },
	{ name: "Transistor", src: "/imgs/partners/transistor.svg" },
	{ name: "Tuple", src: "/imgs/partners/tuple.svg" },
])
</script>
