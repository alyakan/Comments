$(document).ready(function() {
	$('.like-comment-btn').click(function() {
		var id = $(this).attr('data-id');
		if($(this).attr('data-like') == 'like') {
			$.ajax({
				type: "GET",
				url: '/comments/like',
				data: {'comment_id': id},
				success: function(data){
					if(data['success'] == 1) {
						$('#like-btn-' + id).attr('data-like', 'liked');
						$('#like-btn-' + id).text('Unlike');
					} else{
						alert(JSON.parse(data).error)
					}
				}
			});
		}else {
			$.ajax({
				type: "GET",
				url: '/comments/unlike',
				data: {'comment_id': id},
				success: function(data){
					if(data['success'] == 1) {
						$('#like-btn-' + id).attr('data-like', 'like');
						$('#like-btn-' + id).text('Like');
					} else{
						alert(JSON.parse(data).error)
					}
				}
			});
		}
	});
});