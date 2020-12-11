// $(document).ready(function() {

    $(window).on('scroll', function() {
        $topOffset = $(this).scrollTop();

        console.log($topOffset);
    
        // if($topOffset < $(window).height() - $(window).width()*0.05) {
        //     $('.sidenav').css('visibility','hidden');
        //     // Add an animation
        // }
        if($topOffset >= $(window).height() - $(window).width()*0.05) {
            console.log('changed the color');
            $('.sidenav').css('visibility','visible');
            $('#sidenav-1').css('background-color', '#1a1a1a');
        } 
        else {
            $('#sidenav-1').css('background-color', 'transparent');
        }
    
    });
});
