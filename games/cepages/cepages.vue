<template>
    <div class="cepages">
    	<div class="instructions">
		<p> Plusieurs cépages comme le <b>malbec</b> (France et Argentine), le <b>petit verdot</b> (France), le <b>sangiovese</b> (Italie), la <b>syrah</b> (France) ou encore le <b>touriga nacional</b> (Portugal), souvent plus résistants à la chaleur, pourraient remplacer le merlot. </p>
		<p>À vous donc de créer un nouvel assemblage ! Choisissez un cépage et la proportion que vous souhaitez. Le reste de l’assemblage sera complété par du cabernet sauvignon. À quoi ressemblerait votre vin ?</p>
		</div>
    	<ul class="list-unstyled row text-center">
    		<li class="col-12 col-sm-4" v-for="cepage in cepages">
    			<button class="btn-primary raised" @click="selectCepage(cepage)">
    				<img src="../../assets/images/grappe-01.svg" class="grappe"/> {{ cepage }}
    			</button>
    			<div class="btn-group " v-if="selectedCepage === cepage">
    				<button @click="selectPercentage(percentage)" class="btn btn-outline-dark" v-for="percentage in percentages">
    					{{ percentage }}%
    				</button>
    			</div>
    		</li>
    	</ul>
    	<div class="glass">
    		<div class="glass-message" v-if="message !== null">
    			{{ message }}
    		</div>
	    	<svg viewBox="0 0 337 518">
				<path id="glass" d="M333.8,190.8C316.5,94.9,303.5,42.2,289.7,8.6L287.1,0H55.6l-3.5,8.6C38.3,42.3,26.2,94.1,4.6,190
					c-12.1,51.8,0,107.1,32.8,152C63,377.5,99,401.9,137.9,411.4c0.8,3.3,1.6,6.7,2.2,10c1.7,9.6,3.4,22.6,5.1,38.2
					c1.9,17.4,3.5,37.6,4.5,59.2h37.1c1-21.9,2.6-42.2,4.5-59.2c1.7-15.6,3.5-28.6,5.2-38.2c0.5-3,1.1-6,1.9-8.9
					c34-7.4,67.6-28.6,93.1-60.2C328.7,307.4,344.2,248.2,333.8,190.8z M270.8,336.6c-28.6,35.5-69.2,55.4-105.6,52.8
					c-40.6-3.5-79.6-26-107.3-63.2c-27.7-38.1-39-85.7-28.6-130.7C48.4,110.6,61.4,58.7,72.6,25.8h195.6c12.2,32,24.2,82.2,39.8,169.7
					C316.7,245.7,303.7,297.6,270.8,336.6z"/>
				<path id="wine" class="st0" d="M270.8,336.2c-28.6,35.5-69.2,55.4-105.6,52.8c-40.6-3.5-79.6-26-107.3-63.2
					c-27.7-38.1-39-85.7-28.6-130.7C48.4,110.2,61.4,58.3,72.6,25.4h195.6c12.2,32,24.2,82.2,39.8,169.7
					C316.7,245.3,303.7,297.2,270.8,336.2z" />
				<mask id="wine_mask" x="0" y="0" width="337">
				    <rect ref="maskRect" x="0" width="337" style="stroke:none; fill: #fff"/>
				</mask>
			</svg>
    	</div>

    </div>
</template>

<script>
	module.exports = {
	    data: function() {
	        return {
	        	selectedPercentage: null,
	        	selectedCepage: null,
	        	cepages: ['Malbec', 'Petit Verdot', 'Sangiovese', 'Syrah', 'Touriga Nacional'],
	        	percentages: [30, 50, 90],
	        	messages: {
	        		'Malbec': {
	        			30: 'Des notes animales, de cuir. Généreux en alcool et assez tannique.',
	        			50: 'Ça peut être très agréable ! On détecte encore plus les parfums cuir et floral.',
	        			90: 'On s’approche des vins de Cahors, dont le cépage principal est le Malbec.'
	        		},
	        		'Petit Verdot': {
	        			30: 'Un vin structuré, avec les notes mentholées et de garrigues (thym, romarin) du petit verdot.',
	        			50: 'Un vin costaud. Encore plus de notes acides et mentholées.',
	        			90: 'Très austère, très dense, avec des notes un peu cuites.'
	        		},
	        		'Sangiovese': {
	        			30: 'Ça risque d’être intéressant, ce vin ! Les arômes de fruits rouges et d’épices du sangiovese amènent de la douceur.',
	        			50: 'Plus fruité et plus généreux en alcool. Tout à fait buvable, même si on n’a pas d’assemblages de ce genre en France.',
	        			90: 'Très fruité, avec des arômes de sous-bois (champignon, terre mouillée). On s’approche des vins italiens.'
	        		},
	        		'Syrah': {
	        			30: 'Tout à fait buvable. Mais comme les deux cépages sont tanniques, votre vin sera donc très puissant.',
	        			50: 'Un goût austère et très tannique. Vous n’allez pas gagner les faveurs des amateurs.',
	        			90: 'Un vin très austère. Il ressemblera un peu aux vins des Côtes-du-Rhône-Nord.'
	        		},
	        		'Touriga Nacional': {
	        			30: 'C’est original comme assemblage ! On détecte un registre coloré et fumé.',
	        			50: 'Plus dense, avec les arômes de fruits rouges et de fleurs du touriga nacional.',
	        			90: 'Costaud, tannique et fumé. Le côté aromatique du touriga nacional domine l’assemblage.'
	        		}
	        	}
	        }
	    },
	    methods: {
	    	selectCepage: function(cepage) {
	    		this.selectedCepage = cepage;
	    		this.selectedPercentage = null
	    	},
	    	selectPercentage: function(percentage) {
	    		this.selectedPercentage = percentage
	    	}
	    },
	    computed: {
	    	maskHeight: function() {
	    		return Math.round(389 * (this.selectedPercentage / 100))
	    	},
	    	maskY: function() {
	    		return 389 -  this.maskHeight
	    	},
	    	message: function() {
	    		if (this.selectedCepage && this.selectedPercentage) {
	    			return this.messages[this.selectedCepage][this.selectedPercentage]
	    		} 
	    		return null
	    	}
	    },
	    watch: {
	    	selectedPercentage () {
	    		var t = d3.transition().duration(1000).delay(0)

	    		d3.select(this.$refs.maskRect)
	    			.attr('y', 389)
	    			.attr('height', 0)
	    			.transition(t)
	    			.attr('y', this.maskY)
	    			.attr('height', this.maskHeight)
	    	}
	    }
	}
</script>

<style scoped>
	.instructions {
    max-width: 800px;
    position: relative;
    padding: 8px 30px;
	}

	img.grappe {
		width: 20px;
	}
	.cepages {
	    padding:2em;
	}

	.btn-primary.raised {
    border-radius: 8px;
    padding: 8px 12px;
    margin: 4px;
    color: black;
    background: #FFFFFF;
	}

	.btn-primary.raised:active, .btn-primary.raised.active {
	background: #33a6cc;
	box-shadow: none;
	margin-bottom: -3px;
	margin-top: 3px;
	}

	.glass {
		border-top: 0;
		position: relative;
		max-width: 350px;
		margin:10px auto;
		display: block;
	}

	.glass-message {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 1.3em;
		display: block;
		padding: 0.3em;
		text-align: center;
		font-weight: bold;
		line-height: 1.2;
		border-radius: 0.4em;
	}

	.glass svg {
		z-index: 0;
		width:100%;
	}	

	.glass svg #wine {
		fill: #B86784;
		mask: url('#wine_mask');
	}

	#wine_mask rect {
		transition: height 1s linear;
	}
</style>