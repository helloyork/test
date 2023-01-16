<script>
	import { onMount } from "svelte";

    let user;
    onMount(()=>{
        if(localStorage.getItem('user')===undefined||JSON.parse(localStorage.getItem('user')).username===undefined){
            location.href='/login';
        }else{
            user = JSON.parse(localStorage.getItem('user'));
        }
    })
</script>
<h6>about me</h6>
<h5>{JSON.stringify(user)}</h5>
<p>hello world<p/>