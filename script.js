cont__item = document.querySelectorAll('#cont__item li');
cont__item[0].onclick=function(){change__style(0)}
cont__item[1].onclick=function(){change__style(1)}
cont__item[2].onclick=function(){change__style(2)}
cont__item[3].onclick=function(){change__style(3)}
cont__item[4].onclick=function(){change__style(4)}
cont__item[5].onclick=function(){change__style(5)}
function change__style(num){
    const is__current = document.querySelector('.is__current');
    is__current.classList.add('withdrawal');
    for(let i = 0 ; i<=5;i++){
        cont__item[i].classList.remove('is__current');
    }
    cont__item[num].classList.add('is__current');
    setTimeout(function(){
        is__current.classList.remove('withdrawal');
    },2000)

}

const show__bar = document.getElementById('show__bar'),hidd__bar = document.getElementById('hidd__bar'),
main__bar = document.getElementById('main__bar');

show__bar.addEventListener('click' , function(){
    console.log('show')
    main__bar.style.right='0px';
})
hidd__bar.addEventListener('click' , function(){
    console.log('hidden')
    main__bar.style.right='-300px';
})


const cont__text__moving = document.getElementById('cont__text__moving');
var i = 0;
const L=['UI/UX Designer.', 'Content Writter.', 'JS Developer.'];
setInterval(function(){
    if (i==L.length){i=0;}
    cont__text__moving.innerHTML='<h1 id="text__moving">'+L[i]+'</h1>';
    i++;
}
 , 3000)

const Skills = document.getElementById('Skills') , Awards = document.getElementById('Awards') , Experience = document.getElementById('Experience') , 
      Education = document.getElementById('Education') , btns_details = document.querySelectorAll('.details_menu li');
// console.log(btns_details.length);
btns_details[0].onclick = function(){go__to(Skills, 0)}
btns_details[1].onclick = function(){go__to(Awards, 1)}
btns_details[2].onclick = function(){go__to(Experience, 2)}
btns_details[3].onclick = function(){go__to(Education, 3)}
function go__to(page, x){
    for (var i = 0 ; i<btns_details.length ; i++){
        btns_details[i].classList.remove('active');
    }
    btns_details[x].classList.add('active');
    Skills.style.display ='none';
    Awards.style.display ='none';
    Experience.style.display ='none';
    Education.style.display ='none';
    page.style.display ='block';
}



const home = document.getElementById('home'), about = document.getElementById('about'), Service = document.getElementById('Service'), Portfolio = document.getElementById('Portfolio'), Blog = document.getElementById('Blog'), Contact = document.getElementById('Contact');
home_top_offset = home.offsetTop;
about_top_offset = about.offsetTop;
Service_top_offset = Service.offsetTop;
Portfolio_top_offset = Portfolio.offsetTop;
Blog_top_offset = Blog.offsetTop;
Contact_top_offset = Contact.offsetTop;

home_bottom_offset = home.offsetTop + home.offsetHeight
about_bottom_offset = about.offsetTop + about.offsetHeight
Service_bottom_offset = Service.offsetTop + Service.offsetHeight
Portfolio_bottom_offset = Portfolio.offsetTop + Portfolio.offsetHeight
Blog_bottom_offset = Blog.offsetTop + Blog.offsetHeight
Contact_bottom_offset = Contact.offsetTop + Contact.offsetHeight
var position_screen = 0;
function detect_visibelity(){
    let screen_top = window.scrollY;
    let screen_height = window.innerHeight;
    var center_screen = screen_top + screen_height/2
    
    if(home_top_offset <= center_screen && center_screen <home_bottom_offset){ 
        if (position_screen == 0){
            // console.log('home is visible');
        }else if (position_screen != 0){
            change__style(0);
            position_screen = 0;
        }
    }
    else if(about_top_offset <= center_screen && center_screen <about_bottom_offset){
        if (position_screen == 1){
            // console.log('About is visible');
        }else if (position_screen != 1){
            change__style(1);
            position_screen = 1;
        }
        
    }
    else if(Service_top_offset <= center_screen && center_screen <Service_bottom_offset){
        if (position_screen == 2){
            // console.log('Service is visible');
        }else if (position_screen != 2){
            change__style(2);
            position_screen = 2;
        }
    }
    else if(Portfolio_top_offset <= center_screen && center_screen <Portfolio_bottom_offset){
        if (position_screen == 3){
            // console.log('Portfolio is visible');
        }else if (position_screen != 3){
            change__style(3);
            position_screen = 3;
        }
    }else if(Blog_top_offset <= center_screen && center_screen <Blog_bottom_offset){
        if (position_screen == 4){
            // console.log('Blog is visible');
        }else if (position_screen != 4){
            change__style(4);
            position_screen = 4;
        }
    
    }else if(Contact_top_offset <= center_screen && center_screen <Contact_bottom_offset){
        if (position_screen == 5){
            // console.log('Contact is visible');
        }else if (position_screen != 5){
            change__style(5);
            position_screen = 5;
        }
    
    }
}
window.onscroll = function() {detect_visibelity()};
