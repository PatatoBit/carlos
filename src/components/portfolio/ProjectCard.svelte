<script lang="ts">
	export let name: string;
	export let description: string;
	export let url: string;
</script>

<a href={url} target="_blank">
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
		border: 1px solid #c0c0c0;
		border-radius: 0.5rem;
		padding: 1rem;

		scroll-snap-align: center;

		width: 300px;

		& :hover {
			border-color: #1e1e1e;
		}
	}
</style>
