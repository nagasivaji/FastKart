<template>
    <div class="TopNavBar">
        <div class="quotes">
            <Quotes></Quotes>
        </div>
        <div class="dropdowns">
            <div>
                <BasicDropdown></BasicDropdown>
            </div>
            <div id="DivBar">|</div>
            <div>
                <BasicDropdown></BasicDropdown>
            </div>
        </div>
    </div>
</template>


<script>
import Quotes from '@/utils/Quotes/Quotes'
import BasicDropdown from '@/utils/Dropdowns/BasicDropdown'
export default {
    name: 'TopNavBar',
    components: {
		Quotes,
        BasicDropdown
    }
}
</script>
<style scoped>
    .TopNavBar{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding: 12px 100px;
        background-color: #0da487;
    }

    .TopNavBar .quotes {
        color: #fff;
    }
    .TopNavBar .dropdowns {
        display: flex;
    }

    .TopNavBar .dropdowns div{
        margin: 0px 5px;
    }

	#DivBar {
		color: #fff;
	}
</style>