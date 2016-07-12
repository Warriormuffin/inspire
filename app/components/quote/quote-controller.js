(function () {
	var qc = this
	var newQuoteService = new QuoteService

	newQuoteService.getQuote(function (res) {
		$('#quote').append(`<p>${res.quote}</p>`);
		$('#quote').hover(`<p>${res.quote}</p> <br> <p>${res.author}</p> `)

	})



	//Get your QuoteService

} ())
