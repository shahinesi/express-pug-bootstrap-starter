/**
* Author: Shahin Eskandari
* License: -
*/
//window.ii = 0;

(function () {
    "use strict";
    /**
   * Easy selector helper function
   */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    document.addEventListener("DOMContentLoaded", (function () {
        console.log(
            '░██████╗██╗░░██╗░█████╗░██╗░░██╗██╗███╗░░██╗  ███████╗░██████╗██╗░░██╗░█████╗░███╗░░██╗██████╗░░█████╗░██████╗░██╗\n' +
            '██╔════╝██║░░██║██╔══██╗██║░░██║██║████╗░██║  ██╔════╝██╔════╝██║░██╔╝██╔══██╗████╗░██║██╔══██╗██╔══██╗██╔══██╗██║\n' +
            '╚█████╗░███████║███████║███████║██║██╔██╗██║  █████╗░░╚█████╗░█████═╝░███████║██╔██╗██║██║░░██║███████║██████╔╝██║\n' +
            '░╚═══██╗██╔══██║██╔══██║██╔══██║██║██║╚████║  ██╔══╝░░░╚═══██╗██╔═██╗░██╔══██║██║╚████║██║░░██║██╔══██║██╔══██╗██║\n' +
            '██████╔╝██║░░██║██║░░██║██║░░██║██║██║░╚███║  ███████╗██████╔╝██║░╚██╗██║░░██║██║░╚███║██████╔╝██║░░██║██║░░██║██║\n' +
            '╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═╝░░╚══╝  ╚══════╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝'),
            console.group("%cWelcome My Friend", "color: #41b883;"),
            console.log('If you in the devtools, so probably you a developer.\n"imshahineskandari@gmail.com" this is my email.\nPlease contact me, This is the best way to support me.'),
            console.groupEnd();
    }));

    document.addEventListener("DOMContentLoaded", function () {
        var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

        if ("IntersectionObserver" in window) {
            var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (video) {
                    if (video.isIntersecting) {
                        for (var source in video.target.children) {
                            var videoSource = video.target.children[source];
                            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                                videoSource.src = videoSource.dataset.src;
                            }
                        }

                        video.target.load();
                        video.target.classList.remove("lazy");
                        lazyVideoObserver.unobserve(video.target);
                    }
                });
            });

            lazyVideos.forEach(function (lazyVideo) {
                lazyVideoObserver.observe(lazyVideo);
            });
        }
    });



    /*$('#leads').submit(function () {
        //$("#status").empty().text("File is uploading..."); 
        //document.getElementById('submitlead').value = "در حال آپلود"; 
        $(this).ajaxSubmit({
            error: function (xhr) {
                status('Error: ' + xhr.status);
            },
            success: function (response) {
                console.log(response)
                if (response == "sms") {
                    $.showNotification({
                        body: "<p>ممنون که تو نظرسنجی شرکت کردی.</p><p>به زودی کد تخفیف برات ارسال میشه</p>",
                        type: "success"
                    })
                } else {
                    $.showNotification({
                        body: response, type: "danger"
                    })
                }
                //$("#status").empty().text(response);  
                //document.getElementById('submitlead').value = response;
            }
        });
        return false;
    });*/

})();

(function ($) {
    $(document).ready(function () {

    });
})(jQuery);
