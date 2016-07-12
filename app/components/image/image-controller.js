(function(){
	var nis = this
	var newImageService = new ImageService()
	
	newImageService.getImage(function(res){
		$('#body').css({
			background:  'url('+res.large_url + ')',
			color: 'black',
			'background-size': 'cover'
		});
	
	})
	//Your ImageService is a global constructor function what can you do here if you new it up?
	
}())
