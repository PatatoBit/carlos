<script lang="ts">
	export let name: string;
	export let description: string;
	export let url: string;
</script>

<a class="simple-border" href={url} target="_blank">
	<div class="card">
		<p><strong>{name}</strong></p>
		<p>{description}</p>
		<!-- <img src={image} alt={name} /> -->
	</div>
</a>

<style lang="scss">
	a {
		text-decoration: none;
		color: inherit;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;
		margin: 0.5rem;

		scroll-snap-align: start;

		width: 300px;
	}
</style>
