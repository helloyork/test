<dev style="text-align:center;"><ul id="header">
	<li id="header-element"><a class="active" href="#home">Home</a></li>
	<li id="header-element"><a href="#news">news</a></li>
	<li id="header-element"><a href="#contact">Contact Us</a></li>
	<li id="header-element"><a href="#about">About Us</a></li>
</ul></dev>
<slot />

<style type="text/css">
	#header {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: rgba(255, 255, 255, 0);
        width: 100vw;
        float: center;
        position: fixed;
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
        font-weight: 100;
	}
	#header-element a:hover:not(.active) {
		background-color: #1fc7a5;
	}
    #header-element .active:hover {
		background-color: #1ca68b;
	}
	.active {
		background-color: #14ab8d;
	}
</style>
