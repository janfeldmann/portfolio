// merge global webpack CAPITAN constant with additional data into global variable that is accessible everywhere
const Vars = Object.assign(CAPITAN.Vars, {
	$html: $('html'),
	$body: $('body'),
	$window: $(window),
	$doc: $(document)
});

export default Object.assign(CAPITAN, {
	Vars
});