<template>
	<main>
		<Section class="bg-white">
			<Container class="space-y-24 sm:space-y-36">
				<div class="w-full max-w-4xl mx-auto text-center space-y-6 sm:space-y-10">
					<div class="space-y-4 sm:space-y-6">
						<Title class="lg:text-7xl font-medium">
							Accounting
							<span class="text-primary-600 relative">
								<IconTextDecoration />
								<span v-text="'made simple'" class="relative" />
							</span>
							for small businesses.
						</Title>
						<SubTitle class="w-full max-w-2xl mx-auto text-slate-700">
							Well everything you need if you aren\'t that picky about minor details like tax compliance.
						</SubTitle>
					</div>
					<div class="flex items-center justify-center flex-col sm:flex-row gap-4 sm:gap-6">
						<Button v-text="'Get 6 months for free'" class="bg-slate-900 hover:bg-slate-700 text-white" />
						<Button class="group flex items-center gap-3 hover:border-slate-600">
							<IconPlay class="w-4 text-primary-600 group-hover:animate-pulse" />
							<span v-text="'Watch video'" />
						</Button>
					</div>
				</div>
				<div class="space-y-6 text-center">
					<p class="font-display">Trusted by these six companies so far</p>
					<div class="flex items-center justify-center gap-10 sm:gap-14 flex-wrap">
						<img v-for="partner in partners" :src="partner.src" :alt="partner.name" class="h-10 sm:h-12" />
					</div>
				</div>
			</Container>
		</Section>

		<Section class="bg-blue-600 bg-[url('/imgs/featured-bg-2.jpg')] bg-cover bg-no-repeat space-y-12">
			<Container class="space-y-16">
				<div class="space-y-6 text-center text-white">
					<Title v-text="'Everything you need to run your books.'" />
					<SubTitle class="text-white">
						Well everything you need if you aren\'t that picky about minor details like tax compliance.
					</SubTitle>
				</div>

				<ImageChanger />
			</Container>
		</Section>

		<Section class="bg-white">
			<Container class="space-y-4">
				<div class="w-full max-w-2xl space-y-4 mx-auto text-center">
					<Title v-text="'Simplify everyday business tasks.'" />
					<SubTitle class="text-slate-700">
						Because you'd probably be a little confused if we suggested you complicate your everyday
						business tasks instead.
					</SubTitle>
				</div>

				<!-- TODO slider -->
			</Container>
		</Section>

		<Section class="bg-blue-600 bg-[url('/imgs/featured-bg-1.jpg')] bg-contain bg-center bg-no-repeat bg-fixed">
			<Container class="text-center text-white">
				<div class="w-full max-w-lg mx-auto space-y-6">
					<Title v-text="'Get started today'" />
					<SubTitle class="text-white">
						It's time to take control of your books. Buy our software so you can feel like you're doing
						something productive.
					</SubTitle>
					<Button
						v-text="'Get 6 months free'"
						class="bg-white border-white text-slate-900 hover:bg-white/80 hover:border-transparent"
					/>
				</div>
			</Container>
		</Section>

		<Section class="bg-slate-50" id="testimonials">
			<Container class="space-y-4">
				<div class="w-full max-w-2xl space-y-4 mx-auto text-center">
					<Title v-text="'Loved by businesses worldwide.'" />
					<SubTitle class="text-slate-700">
						Our software is so simple that people can't help but fall in love with it. Simplicity is easy
						when you just skip tons of mission-critical features.
					</SubTitle>
				</div>

				<Testimonials />
			</Container>
		</Section>

		<Section class="bg-slate-900" id="pricing">
			<Container class="text-white space-y-16">
				<div class="text-center space-y-6">
					<Title>
						<span class="relative">
							<IconTextDecoration2 />
							<span v-text="'Simple pricing,'" class="relative" />
						</span>
						for everyone.
					</Title>
					<SubTitle class="text-slate-400">
						It doesn't matter what size your business is, our software won't work well for you.
					</SubTitle>
				</div>

				<PricingCards />
			</Container>
		</Section>

		<Section class="bg-slate-50 bg-[url('/imgs/bg-faq.jpg')] bg-contain bg-right bg-no-repeat" id="faq">
			<Container class="space-y-12">
				<div class="w-full max-w-2xl space-y-4">
					<Title v-text="'Frequently asked questions'" />
					<SubTitle class="text-slate-700">
						If you can't find what you're looking for, email our support team and if you're lucky someone
						will get back to you.
					</SubTitle>
				</div>

				<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
					<div v-for="faq in faqs" class="space-y-1 sm:space-y-4 w-full">
						<h3 v-text="faq.question" class="font-display text-lg" />
						<p v-text="faq.answer" class="text-sm" />
					</div>
				</div>
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
import ImageChanger from "./ImageChanger.vue"
import Title from "./Title.vue"
import { ref } from "vue"
import SubTitle from "./SubTitle.vue"

const partners = ref([
	{ name: "Laravel", src: "/imgs/partners/laravel.svg" },
	{ name: "Mirage", src: "/imgs/partners/mirage.svg" },
	{ name: "Statamic", src: "/imgs/partners/statamic.svg" },
	{ name: "Statickit", src: "/imgs/partners/statickit.svg" },
	{ name: "Transistor", src: "/imgs/partners/transistor.svg" },
	{ name: "Tuple", src: "/imgs/partners/tuple.svg" },
])

const faqs = ref([
	{
		question: "Does TaxPal handle VAT?",
		answer: "Well no, but if you move your company offshore you can probably ignore it.",
	},
	{
		question: "Can I pay for my subscription via purchase order?",
		answer: "Absolutely, we are happy to take your money in all forms.",
	},
	{
		question: "How do I apply for a job at TaxPal?",
		answer: "We only hire our customers, so subscribe for a minimum of 6 months and then let's talk.",
	},
	{
		question: "What was that testimonial about tax fraud all about?",
		answer: "TaxPal is just a software application, ultimately your books are your responsibility.",
	},
	{
		question: "TaxPal sounds horrible but why do I still feel compelled to purchase?",
		answer: "This is the power of excellent visual design. You just can't resist it, no matter how poorly it actually functions.",
	},
	{
		question: "I found other companies called TaxPal, are you sure you can use this name?",
		answer: "Honestly not sure at all. We haven't actually incorporated or anything, we just thought it sounded cool and made this website.",
	},
	{
		question: "How do you generate reports?",
		answer: "You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.",
	},
	{
		question: "Can we expect more inventory features?",
		answer: "In life it's really better to never expect anything at all.",
	},
	{
		question: "I lost my password, how do I get into my account?",
		answer: "Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.",
	},
])
</script>
