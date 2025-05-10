
$(document).ready(function () {
    const allSections = ['#about', '#gallery', '#complain', '.dropdown-box'];
    $('.menu-btn').not('.services-btn').click(function () {
        const target = $(this).attr('data-target');
        allSections.forEach(id => $(id).hide());
        $('#' + target).fadeIn();
    });

    $('.services-btn').click(function () {
        
        $('.box:eq(0)').slideDown(500,function(){
            $('.box:eq(1)').slideDown(500,function(){
                    $('.box:eq(2)').slideDown(500,function(){

                    }
                )
                }
            );

        });
      
    });

    // $('#item1').click(function () {
    //     $('#item2').slideDown();
    // });

    // $('#item2').click(function () {
    //     $('#item3').slideDown();
    // });

    const images = ['./images/1.jpg', './images/2.jpg', './images/3.jpg' , './images/4.jpg' , './images/5.jpg' , './images/6.jpg' , './images/7.jpg' , './images/8.jpg'];
    let index = 0;

    function updateImage() {
        $('#gallery-img').fadeOut(200, function () {
            $(this).attr('src', images[index]).fadeIn(600);
        });
    }

    $('#next').click(function () {
        if (index < images.length - 1) {
            index++;
            updateImage();
        }
    });
    

    $('#prev').click(function () {
        if (index > 0) {
            index--;
            updateImage();
        }
    });
    

  
    $('#send').click(function () {
        $('#prev-name').text($('#name').val());
        $('#prev-email').text($('#email').val());
        $('#prev-msg').text($('#message').val());
        $('.form-box').hide();
        $('.preview-box').fadeIn();
    });

 
    $('#edit').click(function () {
        $('.preview-box').hide();
        $('.form-box').fadeIn();
    });
});
