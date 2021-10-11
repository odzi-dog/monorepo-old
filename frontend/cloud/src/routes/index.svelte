<script>
	// Declaring variables

	// @variable loaded
	// Determines if the component is loaded
	// or no (required for transition to work)
	let loaded = false;
	
	// Importing animations
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";

	// Importing components
	import Spinner from "../components/Spinner.svelte";

	// Let's now change our loaded state on component mount.
	onMount(() => {
		setTimeout(() => {
			loaded = true;
		}, 25)
	});
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
</style>

{ #if loaded }
	<main in:fade class="w-full">
		<!-- Hero -->
		<section class="w-full relative flex flex-col md:flex-row justify-center items-center h-100vh px-4 md:px-12">
			<!-- Text -->
			<div class="w-full px-4 md:w-2/3 lg:w-1/3 md:px-0">
				<div>
					<h1 class="text-2xl">Уроки по рисованию.  Полностью бесплатно.</h1>

					<p class="text-sm mt-6">Ctrl+Paint.ru это сайт, на котором вы сможете найти полностью бесплатные и частично* переведённые уроки по графическому рисованию от профессионалов.</p>

					<p class="mt-6 text-extra-xs text-gray-700">*частично переведённые — у некоторых видеороликах есть только субтитры; некоторые переведенны и озвученны.</p>
				</div>

				<!-- Buttons -->
				<div class="mt-6 w-full flex justify-center">
					<button class="uppercase px-6 py-2 rounded-full text-white text-sm bg-blue-btn hover:bg-blue-500">
						начать обучение
					</button>
				</div>
			</div>

			<!-- Video -->
			<div class="w-full h-full relative hidden md:block">
				<!-- Loading animation -->
				<div style="z-index: 1;" class="absolute w-full h-full flex justify-center items-center">
					<Spinner />
				</div>

        <div style="z-index: 2; padding:56.25% 0 0 0;position:relative;" class="w-full h-full"><iframe src="https://player.vimeo.com/video/457926729?h=09fd0c2250&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="CP RU S0E1"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
				<!-- <iframe style="z-index: 2;" class="absolute w-full h-full lg:px-8" title="Welcoming video" src="https://player.vimeo.com/video/227982259?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> -->
			</div>
		</section>

		<!-- "Features" section -->
		<section class="w-full flex flex-col md:flex-row flex-wrap px-4 md:px-8">
			<!-- Free Videos -->
			<div class="w-full md:w-1/4 flex flex-col items-center px-4 py-2">
				<!-- Image -->
				<div class="relative">
					<img src="https://images.squarespace-cdn.com/content/v1/50a3c190e4b0d12fc9231429/1501639872610-BOKX559TIE8KPR8A26WM/ke17ZwdGBToddI8pDm48kPNPF73QC0E8EEcLIwu77JVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIs05aCP46LFIPFMZzEIUlF0vsNX3AgYrJBOd8FXdFdRUKMshLAGzx4R3EDFOm1kBS/freeVideos.jpg?format=300w" alt="Free Videos">

					<!-- Text for image -->
					<div class="absolute inset-x-0 bottom-0 py-2 px-3">
						<p class="text-blue-800 text-md">Бесплатные видео</p>
					</div>
				</div>

				<!-- Other Text -->
				<div class="mt-4 px-2">
					<p class="text-sm text-gray-700">Все видеоролики абсолютно бесплатны и уже готовы к просмотру.</p>
				</div>
			</div>

			<!-- Clear Viewing Order -->
			<div class="w-full md:w-1/4 flex flex-col items-center px-4 py-2 mt-16 md:mt-0">
				<!-- Image -->
				<div class="relative">
					<img src="https://images.squarespace-cdn.com/content/v1/50a3c190e4b0d12fc9231429/1501639943855-8JPTYUTL1MBU0EYF9M2T/ke17ZwdGBToddI8pDm48kPNPF73QC0E8EEcLIwu77JVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIs05aCP46LFIPFMZzEIUlF0vsNX3AgYrJBOd8FXdFdRUKMshLAGzx4R3EDFOm1kBS/concise-format.jpg?format=300w" alt="Clear Viewing Order">

					<!-- Text for image -->
					<div class="absolute inset-x-0 bottom-0 py-2 px-3">
						<p class="text-blue-800 text-md">Все видео упорядкованные</p>
					</div>
				</div>

				<!-- Other Text -->
				<div class="mt-4 px-2">
					<p class="text-sm text-gray-700">Все видеоролики организованны так, что бы вы получали ваши знания и навыки постепенно. Начиная с самого простого и заканчивая более сложными темами.</p>
				</div>
			</div>

			<!-- Concise Format -->
			<div class="w-full md:w-1/4 flex flex-col items-center px-4 py-2 mt-16 md:mt-0">
				<!-- Image -->
				<div class="relative">
					<img src="https://images.squarespace-cdn.com/content/v1/50a3c190e4b0d12fc9231429/1501639895865-1FNYNXDXWUPMYGDRP77J/ke17ZwdGBToddI8pDm48kPNPF73QC0E8EEcLIwu77JVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIs05aCP46LFIPFMZzEIUlF0vsNX3AgYrJBOd8FXdFdRUKMshLAGzx4R3EDFOm1kBS/concise-format.jpg?format=300w" alt="Concise Format">

					<!-- Text for image -->
					<div class="absolute inset-x-0 bottom-0 py-2 px-3">
						<p class="text-blue-800 text-md">Невероятно короткие</p>
					</div>
				</div>

				<!-- Other Text -->
				<div class="mt-4 px-2">
					<p class="text-sm text-gray-700">Каждый видеоролик рассказывает про отедельную тему и идёт максимум 5 минут. Всё максимально коротко и понятно.</p>
				</div>
			</div>

			<!-- Student Supported -->
			<div class="w-full flex flex-col items-center md:w-1/4 px-4 py-2 mt-16 md:mt-0">
				<!-- Image -->
				<div class="relative">
					<img src="https://images.squarespace-cdn.com/content/v1/50a3c190e4b0d12fc9231429/1501639909808-SQ5RDWNH0AFOY45PVKWW/ke17ZwdGBToddI8pDm48kPNPF73QC0E8EEcLIwu77JVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIs05aCP46LFIPFMZzEIUlF0vsNX3AgYrJBOd8FXdFdRUKMshLAGzx4R3EDFOm1kBS/studentSupported.jpg?format=300w" alt="">

					<!-- Text for image -->
					<div class="absolute inset-x-0 bottom-0 py-2 px-3">
						<p class="text-blue-800 text-md">Поддерживается сообществом</p>
					</div>
				</div>

				<!-- Other Text -->
				<div class="mt-4 px-2">
					<p class="text-sm text-gray-700">Ни одной рекламной вставки; никаких вымогательских схем и подобного. Проект поддерживается за счёт донатов сообщества.</p>
				</div>
			</div>
		</section>
	</main>
{ /if }