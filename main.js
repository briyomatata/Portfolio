$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').add("sticky");
        }
        else{
            $('.navbar').remove("sticky");
        }
    });

    // toggle menu script

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggle("active");
        $('.menu-btn i').toggle("active");
    })
});