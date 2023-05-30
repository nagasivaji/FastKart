<template>
	<a-dropdown :trigger="['click']">
		<a class="ant-dropdown-link" @click.prevent> 
			Click me <span id="dropdownArrow"><CaretDownOutlined /></span>
		</a>
		<template #overlay>
			<a-menu>
				<a-menu-item key="0">
					<span>1st menu item</span>
				</a-menu-item>
				<a-menu-item key="1">
					<span>2nd menu item</span>
				</a-menu-item>
				<a-menu-item key="3">
					<span>3rd menu item</span>
				</a-menu-item>
			</a-menu>
		</template>
	</a-dropdown>
</template>

<script>
import { CaretDownOutlined } from '@ant-design/icons-vue';
export default {
	name: 'BasicDropdown',
	components: {
		CaretDownOutlined
	}
}
</script>

<style scoped>
	a{
		color: #fff;
		font-size: 14px
	}

	#dropdownArrow {
		font-size: 10px;
	}
</style>