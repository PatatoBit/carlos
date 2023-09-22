<nav class="navbar">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/portfolio">Portfolio</a></li>
	</ul>
</nav>

<style lang="scss">
	.navbar {
		padding: 1rem;
		position: fixed;
		width: 100%;
		ul {
			display: flex;
			justify-content: flex-end;
			gap: 2rem;
			list-style: none;
			margin: 0;
			padding: 0;

			li {
				a {
					color: #1e1e1e;
					font-weight: 700;
					text-decoration: none;
				}
			}
		}
	}
</style>
