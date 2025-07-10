$(document).ready(function() {

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.slider-for',
    autoplay : true,
    speed : 1500,
    autoplaySpeed : 2000,
    dots: true,
    arrows : true,
    focusOnSelect: true,
    infinite : true,
    pauseOnHover : true,
    
      responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',

    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });
  
  // header, footer 파일 가져오기
  //$("#header").load("../header.html");
  //$("#footer").load("../footer.html");

  // 카테고리 클릭 이벤트
  $(".category > li").click(function() {
    let current = $(this).index(); //변수 선언 - list에는 현재 누른 li의 인덱스 번호가 담아짐

    $(".category > li").removeClass('on');
    $(".category > li").eq(current).addClass('on');
    
    $(".ifproducts_wrap > div").removeClass('on');
    $(".ifproducts_wrap > div").eq(current).addClass('on');
  });

  // ikeaFamily 더보기 클릭 이벤트
  $("#ikeaFamily .more").click(function() {
    window.open("https://www.ikea.com/kr/ko/offers/family-offers/");
  });
});