<script>
	let count = 0;
	
	$: if (count >= 10) {
	alert('count is dangerously high!');
	count = 9;
		
}

	function handleClick() {
		count += 1;
		
	}
</script>

{#each Array(6) as i}
  <div class="row">
   {#each Array(5) as j}
      <div class="cell">
        <input />
      </div>
   {/each}
  </div>
{/each}

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>