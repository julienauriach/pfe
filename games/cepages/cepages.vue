<template>
    <div class="cepages">
    	<ul class="list-unstyled">
    		<li>
    			<button class="btn btn-link" @click="winePercentage = 70">
    				Cabernet sauvignon
    			</button>
    		</li>
    		<li>
    			<button class="btn btn-link" @click="winePercentage = 20">
    				Cabernet sauvignon
    			</button>
    		</li>
    		<li>
    			<button class="btn btn-link" @click="winePercentage = 10">
    				Cabernet sauvignon
    			</button>
    		</li>
    	</ul>
    	<div class="glass">
    		<div class="wine" :style="{ height: winePercentage + '%' }"></div>
    		<img src="../assets/" />
    	</div>
    </div>
</template>

<script>
	module.exports = {
	    data: function() {
	        return {
	        	winePercentage: 0
	        }
	    }
	}
</script>

<style scoped>
	.cepages {
	    background-color: #ffe;
	    padding:2em;
	}

	.glass {
		border:10px solid black;
		border-top: 0;
		width:150px;
		height:150px;
		position: relative;
	}

	.wine {
		position: absolute;
		bottom:0;
		left:0;
		right:0;
		background: red;
		transition: height 500ms;
		z-index: 0;
	}	
</style>