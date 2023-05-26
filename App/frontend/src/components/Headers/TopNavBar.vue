<template>
	<div class="TopNavBar">
		<div class="quotes">
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
		</div>
		<div class="dropdowns">
			<div>
				<BasicDropdown></BasicDropdown>
			</div>
			<div>|</div>
			<div>
				<BasicDropdown></BasicDropdown>
			</div>
		</div>
	</div>
</template>


<script>
import BasicDropdown from '@/utils/Dropdowns/BasicDropdown'
export default {
	name: 'TopNavBar',
	components: {
		BasicDropdown
  },
}
</script>
<style scoped>
	.TopNavBar{
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		padding: 10px 100px;
		background-color: #0da487;
	}

	.TopNavBar .dropdowns {
		display: flex;
	}

	.TopNavBar .dropdowns div{
		margin: 0px 5px;
	}
</style>