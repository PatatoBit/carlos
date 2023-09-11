<script lang="ts">
	export let url: string;
	export let title: string;
	export let description: string;
</script>

<div class="hobby">
	<img src={url} alt={title} />

	<div style="gap: 0.5rem">
		<h3>{title}</h3>
		<p>
			{description}
		</p>
	</div>
</div>

<style lang="scss">
	.hobby {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 5rem;
		flex-wrap: wrap;

		img {
			width: 413px;
			height: 252px;
			flex-shrink: 0;
			align-self: center;

			object-fit: cover;

			border: 2px solid #1e1e1e;
			border-radius: 7px;
		}

		div {
			display: flex;
			flex-direction: column;
			flex: 1 1 0%;
		}
	}
</style>
