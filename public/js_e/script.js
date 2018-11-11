$(function(){
	$('#sender').autocomplete({
		source: '/user/username',
		minLength: 3
	});
	$('#reciever').autocomplete({
		source: '/user/username',
		minLength: 3
	});
})