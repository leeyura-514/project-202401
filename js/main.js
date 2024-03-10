/**
 * gsap - 스크롤 effect
*/
$('[data-fade]').each(function(i,e){
  gsap.fromTo(e,{
    opacity:0,
    y:50
  },{
    scrollTrigger:{
      trigger:e,
      start:"0% 60%",
      end:"100% 0%",
    },
    opacity:1,
    y:0,
  })
})


/**
 * 메인비주얼 - slide
*/
var mainSlide = new Swiper('.main-slide', {
  autoplay: true,
  spaceBetween: 10,
  pagination: {
    el: ".pagi-fraction",
      clickable: true,
      type: "fraction"
    },
    navigation: {
      nextEl: ".btn.next",
      prevEl: ".btn.prev"
  },
});
//progress Bar
var pagingSwiper = new Swiper(".main-slide", {
pagination: {
  el: ".pagi-progress",
  type: "progressbar",
},
});
//Main Slide로 progress Bar 제어
mainSlide.controller.control = pagingSwiper;


/**
 * 이벤트 행사 상품 tab
*/
const tabList = document.querySelectorAll('#sc-event .tab-item');
const contents = document.querySelectorAll('#sc-event .tab-content');
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab01 활성화)

for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.tab-item a').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      // 나머지 버튼 클래스 제거
      tabList[j].classList.remove('active');

      // 나머지 컨텐츠 display:none 처리
      contents[j].style.display = 'none';
    }
    // 버튼 관련 이벤트 - this(tab-item a)의 부모 요소인 "tab-item"에 active 클래스 add!
    this.parentNode.classList.add('active');

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}