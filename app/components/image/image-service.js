function ImageService (){
	this.getImage =  function(callWhenDone){
				// ^^^^^^^ How do you use this?
		return $.get('https://unsplash.it/1920/1080?random', function(res){
			//console.log('Image Data:', res)
			callWhenDone(res)
	
			//What are you going to do with the image that comes back?
		})
		
	}
}
