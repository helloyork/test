<dev style="text-align:center;"><ul id="header">
	<li id="header-element"><a class="active" href="#home">Home</a></li>
	<li id="header-element"><a href="#news">news</a></li>
	<li id="header-element"><a href="#contact">Contact Us</a></li>
	<li id="header-element"><a href="#about">About Us</a></li>
</ul></dev>
<slot />

<style>
	#header {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: #333;
        width: 100vw;
        float: center;
	}
	#header-element {
        display:inline-block;
	}
	#header-element a {
		display: block;
		color: white;
		text-align: center;
		padding: 14px 20px;
		text-decoration: none;
	}
	#header-element a:hover:not(.active) {
		background-color: #111;
	}
	.active {
		background-color: #4caf50;
	}
</style>
