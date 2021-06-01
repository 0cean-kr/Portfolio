// 페이지 로드 시 실행
$(function() {
    $(".btn-site-menu").on("click", function() {
        $("body").toggleClass("site-menu-expanded");
    });
});