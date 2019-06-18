/*Theme Name: KeySeo - SEO, Digital Marketing Agency HTML Template
   Author: Bighero
   Version: 1.0
*/

jQuery(document).ready(function($) {

    /*'use strict';*/

    // PRELOADER      
   $(window).load(function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });

    // Init Material scripts for buttons ripples, inputs animations etc, more info on the next link https://github.com/FezVrasta/bootstrap-material-design#materialjs
    $.material.init();

    /*WOW js*/
    new WOW().init();

    // Sticky Navigation
    $("#sticky-nav").sticky({ topSpacing: 0 });
    /*Blog*/

    $('.blog .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    // Reveiws

    $("#clients .owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        dots: true,
    });

    $(".clients-logo .slider").owlCarousel({
        nav: false,
        dots: false,
        autoplayTimeout: 2000,
        items: 4,
        loop: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: false,
                loop: true
            }
        }

    });

    // Clients 1
    if ($('#clients1').length > 0) {
            $("#clients1").owlCarousel({
                autoplayTimeout: 2000,
                loop: true,
                nav:false,
                responsive:{
                      0:{
                        items:1,
                    },
                    600:{
                        items:1,
                    },
                    1000:{
                        items:3,
                    }
                }

            });

    }
    // Clients 2
    if ($('#clients2').length > 0) {
            $("#clients2").owlCarousel({
                autoplayTimeout: 2000,
                loop: true,
                nav:false,
                responsive:{
                      0:{
                        items:1,
                    },
                    600:{
                        items:1,
                    },
                    1000:{
                        items:3,
                    }
                }

            });

    }

    // FORM VALIDATION

    $(".subscribe-form input").jqBootstrapValidation({
        preventSubmit: true,
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            $.ajax({
                success: function() {
                    $('#subscribe-success').html("<div class='alert alert-success'>");
                    $('#subscribe-success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#subscribe-success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#subscribe-success > .alert-success')
                        .append('</div>');
                }
            })

        }
    });

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/sendmail.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });


    // Smooth scroll 
    $(function() {
        $('a[href*="#"]:not([data-slide])').on('click', function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    // Counterup

    if ($("#info").length) {
        var counter = new Waypoint({
            element: document.getElementById('info'),
            handler: function(direction) {

                $('[data-toggle="counter"]').each(function(a, b) {
                    var c = $(this),
                        d = "",
                        e = "",
                        f = 0,
                        g = 0,
                        h = 0,
                        i = 2.5;
                    c.data("prefix") && (d = c.data("prefix")), c.data("suffix") && (e = c.data("suffix")), c.data("start") && (f = c.data("start")), c.data("end") && (g = c.data("end")), c.data("decimals") && (h = c.data("decimals")), c.data("duration") && (i = c.data("duration"));
                    var j = new CountUp(c.get(0), f, g, h, i, { suffix: e, prefix: d });
                    j.start()
                });



                /*Pie Charts*/
                if ($('#pie_chart_1').length > 0) {
                    $('#pie_chart_1').easyPieChart({
                        barColor: '#e91e63',
                        lineWidth: 6,
                        animate: 2000,
                        size: 100,
                        lineCap: 'square',
                        scaleColor: false,
                        trackColor: false,
                        onStep: function(from, to, percent) {
                            $(this.el).find('.percent').text(Math.round(percent));
                        }
                    });
                }
                if ($('#pie_chart_2').length > 0) {
                    $('#pie_chart_2').easyPieChart({
                        barColor: '#e91e63',
                        lineWidth: 6,
                        animate: 2000,
                        size: 100,
                        lineCap: 'square',
                        scaleColor: false,
                        trackColor: false,
                        onStep: function(from, to, percent) {
                            $(this.el).find('.percent').text(Math.round(percent));
                        }
                    });
                }
                if ($('#pie_chart_3').length > 0) {
                    $('#pie_chart_3').easyPieChart({
                        animate: 2000,
                        barColor: '#e91e63',
                        lineWidth: 6,
                        size: 100,
                        scaleColor: false,
                        trackColor: false,
                        lineCap: 'square',
                        onStep: function(from, to, percent) {
                            $(this.el).find('.percent').text(Math.round(percent));
                        }
                    });
                }
                if ($('#pie_chart_4').length > 0) {
                    $('#pie_chart_4').easyPieChart({
                        barColor: '#e91e63',
                        lineWidth: 6,
                        animate: 2000,
                        size: 100,
                        lineCap: 'square',
                        trackColor: false,
                        scaleColor: false,
                        onStep: function(from, to, percent) {
                            $(this.el).find('.percent').text(Math.round(percent));
                        }
                    });
                }

            },
            offset: 500
        });

    }


    /*Case study*/


    if ($("#chart_6").length) {

        var result = new Waypoint({
            element: document.getElementById('chart_6'),
            handler: function() {
                this.destroy();
                var ctx6 = document.getElementById("chart_6").getContext("2d");
                var data6 = {
                    labels: [
                        "Marketing",
                        "SEO",
                        "Progress",
                        "Analysis"
                    ],

                    datasets: [{
                        data: [200, 50, 100,150],
                        backgroundColor: [
                            "rgb(233, 30, 99)",
                            "rgba(241,91,38,.8)",
                            "rgba(76, 175, 80, 1)",
                            "rgb(63, 81, 181)"
                        ],
                        hoverBackgroundColor: [
                            "rgb(233, 30, 99)",
                            "rgba(241,91,38,.8)",
                            "rgba(76, 1775, 80, 1)",
                            "rgb(63, 81, 181)"
                        ]
                    }]
                };

                var pieChart = new Chart(ctx6, {

                    type: 'pie',
                    data: data6,
                    options: {
                        animation: {
                            duration: 3000
                        },
                        responsive: true,
                        legend: {
                            labels: {
                                fontFamily: "Open Sans",
                                fontColor: "#2f2c2c"
                            }
                        },
                        tooltips: {
                            backgroundColor: 'rgba(47,44,44,.9)',
                            cornerRadius: 0,
                            footerFontFamily: "'Open Sans'"
                        }
                    }
                });

            },
        offset: 400
        });
    }

    if ($("#chart_7").length) {

        var result = new Waypoint({
            element: document.getElementById('chart_7'),
            handler: function() {
                this.destroy();
                  var ctx2 = document.getElementById("chart_7").getContext("2d");
                        var data2 = {
                            labels: ["January", "February", "March", "April", "May", "June", "July"],
                            datasets: [{
                                label: "SEO Marketing",
                                backgroundColor: "rgb(233, 30, 99)",
                                borderColor: "rgb(233, 30, 99)",
                                data: [10, 30, 80, 61, 26, 75, 40]
                            }, {
                                label: "Social Media",
                                backgroundColor: "rgb(76, 175, 80)",
                                borderColor: "rgb(76, 175, 80)",
                                data: [28, 48, 40, 19, 86, 27, 90]
                            }]
                        };

                        var hBar = new Chart(ctx2, {
                            type: "horizontalBar",
                            data: data2,

                            options: {
                                tooltips: {
                                    mode: "label"
                                },
                                scales: {
                                    yAxes: [{
                                        stacked: true,
                                        gridLines: {
                                            color: "#eee",
                                        },
                                        ticks: {
                                            fontFamily: "Open Sans",
                                            fontColor: "#2f2c2c"
                                        }
                                    }],
                                    xAxes: [{
                                        stacked: true,
                                        gridLines: {
                                            color: "#eee",
                                        },
                                        ticks: {
                                            fontFamily: "Open Sans",
                                            fontColor: "#2f2c2c"
                                        }
                                    }],

                                },
                                elements: {
                                    point: {
                                        hitRadius: 40
                                    }
                                },
                                animation: {
                                    duration: 3000
                                },
                                responsive: true,
                                legend: {
                                    display: false,
                                },
                                tooltips: {
                                    backgroundColor: 'rgba(47,44,44,.9)',
                                    cornerRadius: 0,
                                    footerFontFamily: "'Open Sans'"
                                }

                            }
                        });

            },
        offset: 400
        });
    }

    if ($("#chart_8").length) {

        var result = new Waypoint({
            element: document.getElementById('chart_8'),
            handler: function() {
                this.destroy();
                var ctx7 = document.getElementById("chart_8").getContext("2d");
                var data7 = {
                    labels: [
                        "Marketing",
                        "SEO",
                        "Progress",
                        "Analysis"
                    ],

                    datasets: [{
                        data: [200, 50, 100,150],
                        backgroundColor: [
                            "rgb(233, 30, 99)",
                            "rgba(241,91,38,.8)",
                            "rgba(76, 175, 80, 1)",
                            "rgb(63, 81, 181)"
                        ],
                        hoverBackgroundColor: [
                            "rgb(233, 30, 99)",
                            "rgba(241,91,38,.8)",
                            "rgba(76, 1775, 80, 1)",
                            "rgb(63, 81, 181)"
                        ]
                    }]
                };

                var pieChart = new Chart(ctx7, {

                    type: 'doughnut',
                    data: data7,
                    options: {
                        animation: {
                            duration: 3000
                        },
                        responsive: true,
                        legend: {
                            labels: {
                                fontFamily: "Open Sans",
                                fontColor: "#2f2c2c"
                            }
                        },
                        tooltips: {
                            backgroundColor: 'rgba(47,44,44,.9)',
                            cornerRadius: 0,
                            footerFontFamily: "'Open Sans'"
                        }
                    }
                });

            },
        offset: 400
        });
    }

});
