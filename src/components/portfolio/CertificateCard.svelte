<script lang="ts">
	export let name: string;
	export let description: string;
	export let image: string;
	export let url: string | undefined;
</script>

{#if url}
	<a href={url} target="_blank">
		<div class="card">
			<div class="image" style="background-image: url({image})"></div>

			<div class="card-content">
				<p><strong>{name}</strong></p>

				<p>{description}</p>
			</div>
		</div>
	</a>
{:else}
	<div class="card">
		<div class="image" style="background-image: url({image})"></div>

		<div class="card-content">
			<p><strong>{name}</strong></p>

			<p>{description}</p>
		</div>
	</div>
{/if}

<style lang="scss">
	.card {
		position: relative;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		scroll-snap-align: start;

		padding: 2rem;

		min-width: 300px;
		gap: 1rem;
		aspect-ratio: 3/2;

		text-align: center;

		&:hover {
			.image {
				filter: blur(0);
			}

			.card-content {
				opacity: 0.5;
			}
		}

		.image {
			width: 100%;
			height: 100%;

			position: absolute;
			z-index: 0;
			background-image: inherit;
			filter: blur(10px);

			background-position: center;
			object-fit: cover;

			background-image: inherit;
			background-size: cover;

			transition: filter 0.3s ease;
		}

		.card-content {
			position: absolute;
			z-index: 1;
			transition: opacity 0.3s ease;
		}
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
