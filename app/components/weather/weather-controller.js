(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		$('#weather').append(` <p>${weather.name}</p> <p>${weather.weather[0].description}</p> <p>${((weather.main.temp - 273) * 1.8 + 32).toFixed(1)} ºF </p> ` );
		//What can you do with this weather object?
	})
	
	
	
	
	
}())
