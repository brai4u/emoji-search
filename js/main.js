$(document).ready(function (){
	$('#search').on('input', function(e) {
		var text = $('#search').val()

		if(text.length <= 3){
			$('#result').html("")
			return true
		}

		$.ajax({
			url: 'https://emoji.getdango.com/api/emoji',
			type: 'get',
			data:{
				q: text
			},
			success: function(response) {
				$('#result').html("")
				$.each(response, function(key , value) {
					$.each(value, function(key , val) {
						$('#result').append("<span>"+val.text+"</span>")
					});
				});
			}
		});
	});
});

$(document).on('click','span',function(){
	var $temp = $("<input>");
	
	$("body").append($temp);
	$temp.val($(this).html()).select();
	document.execCommand("copy");
	
	$('.copy').hide();
	$('.copied').fadeIn().delay(1500).fadeOut(function (){
		$('.copy').fadeIn();
	});
	
	$temp.remove();
});