//accordion//
$(document).ready(function () {
    $("#accordion").accordion({
        animate: 1200,
        heightStyle: "content",
        header: ".slide .onderwerp"
    });

        $("video").each(function () {

            var player = videojs(this.id, {
                //autoplay//
            });

            $("button.rewind").click(function () {
                player.currentTime(-10);
            });

            let geklikt = false;

            $("button.playPause").click(function () {
                if (!geklikt) {
                    player.pause();
                    geklikt = true;
                    $(".playicon").css({"background-image":"url(../img/pause@2x.svg)"});
                    $(".playicon").css({"background-position-x": "50%"});
                    $(".playicon").css({"background-size": "45%"});

                } else {
                    player.play();
                    geklikt = false;
                    $(".playicon").css({"background-image":"url(../img/play@2x.svg)"});
                    $(".playicon").css({"background-position-x": "-0px"});
                    $(".playicon").css({"background-size": "80%"});
                }
                
            });
        });

// vinkje//

        $("video").each(function () {
            var modal = document.querySelector(".modal");
            var $checkVideo = $(this).parents(".videoWrapper").find(".checkVideo");
            var closeButton = document.querySelector(".close-button");
            var viewed = false;

            $checkVideo.click(function () {

                if (!viewed) {
                    $(this).parents(".slide").find(".videobekeken").show()
                    viewed = true;
                } else {
                    $(this).parents(".slide").find(".videobekeken").hide()
                    viewed = false;
                }
            });
        });


        // dark theme//

        const toggleSwitch = document.querySelector('.checkboxThree input[type="checkbox"');
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);

            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }

        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        }
        toggleSwitch.addEventListener('change', switchTheme, false);


        // popup modal//
        
        anime.timeline({loop: true})
        .add({
          targets: '.ml8 .circle-white',
          scale: [0, 3],
          opacity: [1, 0],
          easing: "easeInOutExpo",
          rotateZ: 360,
          duration: 1100
        }).add({
          targets: '.ml8 .circle-container',
          scale: [0, 1],
          duration: 1100,
          easing: "easeInOutExpo",
          offset: '-=1000'
        }).add({
          targets: '.ml8 .circle-dark',
          scale: [0, 1],
          duration: 1100,
          easing: "easeOutExpo",
          offset: '-=600'
        }).add({
          targets: '.ml8 .letters-left',
          scale: [0, 1],
          duration: 1600,
          offset: '-=550'
        }).add({
          targets: '.ml8',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1400
        });
      
      anime({
        targets: '.ml8 .circle-dark-dashed',
        rotateZ: 360,
        duration: 8000,
        easing: "linear",
        loop: true
      });
 
    });