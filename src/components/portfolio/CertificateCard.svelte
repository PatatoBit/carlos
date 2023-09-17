<script lang="ts">
	export let name: string;
	export let description: string;
	export let image: string;
	export let url: string | undefined;
</script>

{#if url}
	<a href={url} target="_blank">
		<div class="card" style="$image: url({image})">
			<p><strong>{name}</strong></p>

			<p>{description}</p>
		</div>
	</a>
{:else}
	<div class="card" style="$image: url({image})">
		<p><strong>{name}</strong></p>

		<p>{description}</p>
	</div>
{/if}

<style lang="scss">
	$image: '';

	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		scroll-snap-align: start;

		padding: 2rem;

		min-width: 300px;
		gap: 1rem;
		aspect-ratio: 3/2;

		background-position: center;
		object-fit: cover;

		text-align: center;

		background-image: $image;
		background-size: cover;
		backdrop-filter: blur(30px);
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
