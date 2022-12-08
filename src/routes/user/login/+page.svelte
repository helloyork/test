<script>
	function storage(info) {
		Object.keys(info).forEach((v) => {
			localStorage.setItem(v, info[v]);
		});
		return localStorage.length;
	}
</script>

<a href="/" on:click={() => {storage({
    userName:'awa',
    passWord:'12345678'
})}}>存储用户信息</a>
