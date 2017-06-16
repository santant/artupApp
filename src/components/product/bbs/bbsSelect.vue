<template>
	<div id="bbs-select">
		<mt-header title="选择产品">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>		
		<div class="bbsImg">
			<img src="../../../assets/img/bbs.png"/>
		</div>
		
		<dl class="slect_dl">
			<dt>
				颜色分类
			</dt>
			<dd>
				<div class="dd_slect dd_active"></div>
				<div class="dd_slect"></div>
				<div class="dd_slect"></div>
				<div class="dd_slect"></div>
			</dd>
		</dl>
		<dl>
			<dt>选择页数</dt>
			<dd></dd>
		</dl>
		<dl>
			<dt>选择尺寸</dt>
			<dd></dd>
		</dl>
	</div>
</template>

<script>
</script>

<style>
</style>