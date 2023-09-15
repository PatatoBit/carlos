<script lang="ts">
	export let name: string;
	export let description: string;
	export let url: string;
</script>

<a href={url}>
	<div class="card">
		<h4>{name}</h4>
		<p>{description}</p>
		<!-- <img src={image} alt={name} /> -->
	</div>
</a>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border: 1px solid #c0c0c0;
		border-radius: 0.5rem;
		padding: 1rem;
	}
</style>
