$(document).ready(function(){
    $('.js_tag').off().on('click', function(){
        var tagName = $(this).data('name')
        $('.js_one_tag').hide();
        $('.js_tag_cloud_list').find('[data-name='+ tagName +']').fadeIn(500);
    })
})
