(function () {
	var qc = this
	var newQuoteService = new QuoteService

	newQuoteService.getQuote(function (res) {
		$('#quote').append(`<p>${res.quote}</p>`);

		$('#quote').hover(
			function () {
				$(this).append($(`<h4> ${res.author}</h4>`));
			}, function () {
				$('#quote h4').hide('slideout');
			}
			

		);


	})






	//Get your QuoteService

} ())
