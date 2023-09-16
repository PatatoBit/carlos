<script lang="ts">
	import ProjectCard from '../../components/portfolio/ProjectCard.svelte';

	export let data;
	console.table(data.body);
</script>

<div class="wrapper">
	<div class="header">
		<h1>Pat's Portfolio</h1>
		<p>A collection of my works and achievements</p>

		<ul>
			<li>Academic</li>
			<li>Code</li>
			<li>Art</li>
		</ul>
	</div>

	<div>
		<h2>Projects</h2>
		<div class="projects">
			{#each data.body.projects as project}
				<ProjectCard name={project.name} description={project.description} url={project.url} />
			{/each}
		</div>
	</div>

	<div>
		<h2>Activities</h2>
		<div class="activities" />
	</div>

	<div>
		<h2>Certificates</h2>
		<div class="certificates" />
	</div>
</div>

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

	.projects {
		display: flex;
		flex-direction: row;
		gap: 2rem;

		/* white-space: nowrap; */
		scroll-snap-type: x mandatory;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}
</style>
