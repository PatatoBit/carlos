<script lang="ts">
	import ActivitiyCard from '../../components/portfolio/ActivitiyCard.svelte';
	import ProjectCard from '../../components/portfolio/ProjectCard.svelte';

	export let data;
	console.table(data.body);
</script>

<main class="wrapper">
	<section class="header">
		<h1>Pat's Portfolio</h1>
		<p>A collection of my works and achievements</p>

		<!-- <ul>
			<li>Academic</li>
			<li>Code</li>
			<li>Art</li>
		</ul> -->
	</section>

	<section>
		<h3>Projects</h3>
		<div class="carousel">
			{#each data.body.projects as project}
				<ProjectCard name={project.name} description={project.description} url={project.url} />
			{/each}
		</div>
	</section>

	<section>
		<h3>Activities</h3>
		<div class="carousel">
			{#each data.body.activities as activity}
				<ActivitiyCard
					name={activity.name}
					description={activity.description}
					image={activity.image}
					url={activity.url}
				/>
			{/each}
		</div>
	</section>

	<section>
		<h3>Certificates</h3>
		<div class="carousel" />
	</section>
</main>

<style lang="scss">
	ul {
		display: flex;
		flex-direction: row;
		list-style: none;
		align-items: center;
		justify-content: center;

		margin-top: 3rem;
		gap: 4rem;

		font-weight: 700;
	}

	.wrapper {
		gap: 2rem;
	}

	.header {
		text-align: center;
	}

	.carousel {
		display: flex;
		flex-direction: row;
		gap: 1rem;

		/* white-space: nowrap; */
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
	}
</style>
