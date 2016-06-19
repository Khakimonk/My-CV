var popMe = document.getElementById('popMe');
var aboutMe = document.getElementById('aboutMe');
var popCareer = document.getElementById('popCareer');
var myCareer = document.getElementById('myCareer');
var popProjects = document.getElementById('popProjects');
var myProjects = document.getElementById('myProjects');
var btnAbout = document.getElementById('btnAbout');
var btnCareer = document.getElementById('btnCareer');
var btnProjects = document.getElementById('btnProjects');
var btnLinks = document.getElementById('btnLinks');
var body = document.getElementsByTagName('body');

var aniAboutMe = btnAbout.addEventListener('click', function() {
            var id = setInterval(frame, 5);

            function frame() {
                var height = 0;
                if (height == 50) {
                    clearInterval(id);
                } else {
                    height++;
                    popMe.style.height = 50 + '%';
                    aboutMe.style.display = 'block';
                }
              }
            });
