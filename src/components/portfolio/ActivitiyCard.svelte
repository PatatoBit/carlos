<script lang="ts">
	export let name: string;
	export let description: string;
	export let url: string;
	export let image: string;
</script>

<div class="card">
	{#if image}
		<a href={url} target="_blank">
			<img src={image} alt={name} />
		</a>
	{/if}

	<p><strong>{name}</strong></p>
	<p>{description}</p>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		/* flex: 1; */
		width: 300px;
		flex-shrink: 0;

		scroll-snap-align: start;
	}

	img {
		width: 100%;
		object-fit: cover;
	}
</style>
