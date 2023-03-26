<template>
	<div>
		<!-- MOBILE -->
		<div class="lg:hidden flex flex-col gap-8">
			<div v-for="task in tasks" class="flex flex-col gap-20">
				<div class="flex flex-col gap-2 w-full max-w-2xl mx-auto px-4">
					<div class="rounded-lg w-fit transition-colors duration-300 bg-primary-600">
						<component :is="task.icon" class="w-9" />
					</div>
					<h3
						v-text="task.label"
						class="text-sm font-medium mt-4 transition-colors duration-300 text-primary-600"
					/>
					<h2 v-text="task.title" class="text-xl font-display" />
					<p v-text="task.description" class="text-sm text-slate-600 mt-2" />
				</div>

				<div class="bg-slate-200 px-4 pb-10">
					<img
						:src="task.image"
						:alt="task.label"
						class="h-[420px] min-w-fit -mt-12 border rounded-lg mx-auto"
					/>
				</div>
			</div>
		</div>

		<!-- DESKTOP -->
		<Container class="space-y-12 hidden lg:block">
			<div class="grid grid-cols-3 gap-8">
				<div
					v-for="(task, index) in tasks"
					@click.prevent="slideTasks(index)"
					class="hover:opacity-100 cursor-pointer flex flex-col gap-2 transition-opacity duration-300"
					:class="index === selectedTaskIndex ? 'opacity-100' : 'opacity-70'"
				>
					<div
						class="rounded-lg w-fit transition-colors duration-300"
						:class="index === selectedTaskIndex ? 'bg-primary-600 ' : 'bg-slate-500'"
					>
						<component :is="task.icon" class="w-9" />
					</div>
					<h3
						v-text="task.label"
						class="text-sm font-medium mt-4 transition-colors duration-300"
						:class="index === selectedTaskIndex ? 'text-primary-600' : 'text-slate-600'"
					/>
					<h2 v-text="task.title" class="text-xl font-display" />
					<p v-text="task.description" class="text-sm text-slate-600 mt-2" />
				</div>
			</div>

			<div
				ref="slider"
				class="p-16 bg-slate-200 rounded-3xl overflow-hidden flex gap-12 snap-x snap-mandatory scroll-smooth"
			>
				<img
					v-for="(task, index) in tasks"
					:src="task.image"
					:alt="task.label"
					class="w-full max-w-4xl shrink-0 snap-center transition-opacity duration-300 rounded-xl"
					:class="{ 'opacity-60': selectedTaskIndex !== index }"
				/>
			</div>
		</Container>
	</div>
</template>

<script setup>
import IconTaskReporting from "./icons/IconTaskReporting.vue"
import IconTaskInventory from "./icons/IconTaskInventory.vue"
import IconTaskContacts from "./icons/IconTaskContacts.vue"
import Container from "./Container.vue"
import { ref, shallowRef } from "vue"

const selectedTaskIndex = ref(0)
const slider = ref(null)

const tasks = ref([
	{
		icon: shallowRef(IconTaskReporting),
		label: "Reporting",
		title: "Stay on top of things with always up-to-date reporting features.",
		description:
			"We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.",
		image: "/imgs/tasks/profit-loss.webp",
	},
	{
		icon: shallowRef(IconTaskInventory),
		label: "Inventory",
		title: "Never lose track of what's in stock with accurate inventory tracking.",
		description:
			"We don't offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.",
		image: "/imgs/tasks/inventory.webp",
	},
	{
		icon: shallowRef(IconTaskContacts),
		label: "Contacts",
		title: "Organize all of your contacts, service providers, and invoices in one place.",
		description:
			"This also isn't actually a feature, it's just some friendly advice. We definitely recommend that you do this, you'll feel really organized and professional.",
		image: "/imgs/tasks/contacts.webp",
	},
])

function slideTasks(index) {
	selectedTaskIndex.value = index

	const scrollStep = slider.value.scrollWidth / slider.value.children.length
	slider.value.scrollLeft = index * scrollStep
}
</script>
