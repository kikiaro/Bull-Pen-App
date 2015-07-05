'use strict';

angular.module('project3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });

//Custom JS for Splash Page //

$(document).ready(function () {

   $("#postcontent").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "subscribe.php",
            data: $("#postcontent").serialize(),
             success: function (response) {
        $('[name="email"]').val('');
               // alert(response); // For response
         alert('Thanks for  subscribing Us');
            }
        });
        e.preventDefault();
    });

    // Scrolling
    $('.scroll-me a').bind('click', function (event) { //just pass scroll-me class and start scrolling
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutQuad');
        event.preventDefault();
    });

   });
