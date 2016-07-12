(function(){
	var nis = this
	var newImageService = new ImageService()
	
	newImageService.getImage(function(res){
		$('#body').css({
			background:  'url('+ "https://unsplash.it/1920/1080?random" + ')',
			color: 'black',
			'background-size': 'cover'
		});
	
	})
	//Your ImageService is a global constructor function what can you do here if you new it up?
	
}())
