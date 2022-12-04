<script>
</script>

<title>Magic Conch!</title>

<dev>
	<!-- svelte-ignore a11y-missing-content -->
	<h5 id="banner" />
</dev>
<div class="alert alert-warning" role="alert" style="width:98%;margin:auto;">
	<strong>警告！</strong>这个网页正在施工，可能无法正常访问内容，请见谅
</div>

<div class="accordion" id="accordionExample" style="padding-top:10px;width:98%;margin:auto;">
	<div class="accordion-item">
		<h2 class="accordion-header" id="headingOne">
			<button
				class="accordion-button"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#collapseOne"
				aria-expanded="true"
				aria-controls="collapseOne"
			>
				我是标题
			</button>
		</h2>
		<div
			id="collapseOne"
			class="accordion-collapse collapse show"
			aria-labelledby="headingOne"
			data-bs-parent="#accordionExample"
		>
			<div class="accordion-body">我是内容</div>
		</div>
	</div>
</div>

<style type="text/css">
	#banner {
		margin-top: 0%;
		padding: 300px;
		text-align: center;
		background: #1abc9c;
		/* color: white; */
		font-size: 30px;
	}
</style>
