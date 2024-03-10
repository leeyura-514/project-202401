/**
 * PC header - 스크롤down
*/
const header = document.querySelector('#header-area');
$(function(){
  var scrollTop = 0; //var로 재할당가능하게 초기값 변수를 0으로 선언(이전 스크롤 추적)

  document.addEventListener("scroll", () => {
    const currScrollTop = window.scrollY;//현재 스크롤 위치 : currScrollTop

    // console.log(currScrollTop);
    if (currScrollTop > scrollTop) { //현재 스크롤 위치가 이전 스크롤 위치보다 큰지 확인
      header.classList.add('scroll-down');//스크롤 방향 down일 때,
    } else {
      header.classList.remove('scroll-down');//스크롤 방향 up일 때,
    }
    scrollTop = currScrollTop;// currScroll, currScrollTop 조건 판단 후, 현재 스크롤값을 scrollTop 에 저장
  })
})

/** 
 * Mobile header
*/
$(function(){
  $('.m-btn .btn-menu').click(()=>{
    $('#header-area').addClass('m-gnb-open');
    $('body').addClass('scroll-hidden');
  })
  $('.m-btn .btn-close').click(()=>{
    $('#header-area').removeClass('m-gnb-open');
    $('body').removeClass('scroll-hidden');
  })
  $('.dimmed').click(()=>{
    $('#header-area').removeClass('m-gnb-open');
  })
})
