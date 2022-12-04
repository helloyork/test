<script>
	import '../app.scss';
</script>

<dev style="text-align:center;margin-top:0"
	><ul id="header">
		<li id="header-element"><a class="active" href="#home">Home</a></li>
		<li id="header-element"><a href="#news">news</a></li>
		<li id="header-element"><a href="#contact">Contact Us</a></li>
		<li id="header-element"><a href="#about">About Us</a></li>
	</ul></dev
>
<slot />

<style type="text/css">
	#header {
		list-style-type: none;
		/* margin: 0; */
		padding: 0;
		overflow: hidden;
		background-color: rgba(255, 255, 255, 0);
		width: 100vw;
		float: center;
		position: fixed;
	}
	#header-element {
		display: inline-block;
	}
	#header-element a {
		display: block;
		color: white;
		text-align: center;
		padding: 18px 25px;
		text-decoration: none;
		font-weight: 100;
	}
	#header-element a:hover:not(.active) {
		background-color: #ffffff0e;
	}
	.active {
		background-color: rgba(0, 0, 0, 0.136);
	}
	.active:hover {
		background-color: rgba(0, 0, 0, 0.053);
	}
</style>
