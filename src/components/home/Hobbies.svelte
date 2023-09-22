<script>
	import Hobby from './Hobby.svelte';
</script>

<div class="wrapper">
	<h2>I'm into...</h2>
	<p class="sub" style="margin-bottom: 5rem;">here are some of my interests and hobbies...</p>

	<div class="hobbies">
		<Hobby
			url="/hobbies/programming.png"
			title="Programming"
			description="Coding is my main hobby since I was kid. I love making projects that people can actually use. It’s satisfying and frustrating at the same time. Just like relationships. "
		/>

		<Hobby
			url="/hobbies/art.png"
			title="Art"
			description="I’m obsessed with colors. I can keep coming back to the same painting for months just to  study what makes it look so good. I also like capturing memories in paintings rather than taking pictures."
		/>

		<Hobby
			url="/hobbies/3d.png"
			title="3D"
			description="I love using Blender to create 3D models. Usually I do it for my web projects. But sometimes I use it as a reference for my art too."
		/>

		<Hobby
			url="/hobbies/urbanplanning.jpg"
			title="Urban Planning"
			description="This is a fairly new interest I got in. I stumbled upon a video explaining what urban planning is. It showed how they do it in The Netherlands and I fell in love with the topic and the country. This also makes me look at other countries and mine as well and see what could be changed."
		/>
	</div>
</div>

<style lang="scss">
	.hobbies {
		display: flex;
		flex-direction: column;
		gap: 5rem;
	}
</style>
