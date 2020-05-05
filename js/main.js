// 最初のトップ画面の表示
$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

let h1 = document.querySelector('.header-title-area h1');


// ハンバーガーメニュークリック時タイトルを消す＆閉じる時出すjs
if(
  document.querySelector('.open-menu').onclick = function(){
    h1.classList.add('nav-close') ;
  });

if(
  document.querySelector('.close-menu').onclick = function(){
    h1.classList.remove('nav-close') ;
  });




// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


//メニューのjquery

$(document).ready(function() {
  $('.open-menu').on('click', function() {
  $('.overlay').addClass('open');
  // $('.header-title').addClass('nav-close');

  });
  
  $('.close-menu').on('click', function() {
  $('.overlay').removeClass('open');
  // $('.header-title').removeClass('nav-close');

  });
  });

// ------------------------------------------------------

//-------背景画像のスライド---------------------

  $(document).ready(function(){

    $("#theTarget").skippr();

   });    

//スライドここまでーーーーーーーーーーーーーーー

// slick用の画像スライドコード(PC用)
$('.images-test').slick({
  autoplay: true, //自動再生
  centerMode: true,
  autoplaySpeed:2000,
  focusOnSelect: true,
  slidesToShow:3,
  responsive: [
    {
      breakpoint: 1100, // 768~1023px以下のサイズに適用
         settings: {
            slidesToShow:2
         }
     }, {
       breakpoint: 720, // 480〜767px以下のサイズに適用
         settings: {
            slidesToShow: 1
          }
      }
  ]

});

// $('.samne').slick({
//   asNavFor:'.images-test',
//   focusOnSelect: true,
//   arrows: false,
//   slidesToShow:4,
// });

// slick用の画像スライドコード(スマホ用)
// $('.images-test').slick({
//   autoplay: true, //自動再生
//   centerMode: true,
//   slidesToShow: 1,
// });

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



