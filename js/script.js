$(document).ready(function() {
    $('#gototop').hide(); // ẩn nút go-to-top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { //thực hiện lệnh điều kiện Khi lăn chuột xuống dưới hơn 100px
            $('#gototop').slideDown(300); //Xuất hiện nút
        } else {
            $('#gototop').fadeOut(300); //Ngược lại thì ẩn nút
        }
    });
    $('#gototoptops').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800); //Animation giúp hoạt ảnh scroll ngược lên đầu trang sẽ mượt hơn
    });
});