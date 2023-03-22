<template>
	<div>
		<div class="relative">
			<button @click.prevent="showModal = !showModal" class="relative z-50 p-2">
				<slot name="trigger" />
			</button>

			<Transition enter-from-class="opacity-0" leave-to-class="opacity-0" class="transition-all duration-300">
				<div
					v-show="showModal"
					class="fixed inset-0 z-40 bg-slate-200/50 backdrop-blur"
					@click.prevent="showModal = false"
				/>
			</Transition>

			<Transition
				enter-from-class="opacity-0 scale-95"
				leave-to-class="opacity-0 scale-95"
				class="transition-all duration-300"
			>
				<div
					v-show="showModal"
					class="absolute z-50 bg-white rounded-lg shadow-lg border border-slate-300 flex flex-col w-60 origin-top-right right-0 mt-2 overflow-hidden"
					@click.stop
				>
					<slot name="content" />
				</div>
			</Transition>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue"

const showModal = ref(false)

function closeOnEscape(event: KeyboardEvent) {
	if (event.key === "Escape" && showModal.value) showModal.value = false
}

onMounted(() => document.addEventListener("keydown", (event) => closeOnEscape(event)))
onUnmounted(() => document.removeEventListener("keydown", (event) => closeOnEscape(event)))
</script>
