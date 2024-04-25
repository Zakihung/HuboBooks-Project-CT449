<script>
</script>

<template>
    <main class="bodylienhe">

<!-- Các thông tin về để liên hệ -->

<section class="contact" id="contact">
    <h1>Hệ thống bán sách trực tuyến HUBO BOOKS</h1><br>
    <p class="lienhe1">
        <span class="lienhe">Address:</span>&nbsp; Phường Xuân Khánh, Quận Ninh Kiều, Thành Phố Cần Thơ
    </p>
    <p class="lienhe1">
        <span class="lienhe">Hotline:</span>&nbsp;0123456789
    </p>
    <p class="lienhe1">
        <span class="lienhe">Email:</span>&nbsp; test@example.com
    </p>
    <p class="lienhe1"><span class="lienhe">Fanpage:</span>&nbsp; https://facebook.com/hubobooks
    </p>
    <p class="lienhe1">
        <span class="lienhe">Website:</span>&nbsp; https://hubobooks.com
    </p><br><br>
    <span class="gopy">Nếu bạn có ý kiến đóng góp, vui lòng điền thông tin vào form bên dưới, chúng tôi sẽ trả lời trong thời gian sớm nhất</span> <br>

</section>

<!-- Form liên hệ -->

<section class="contact" id="contact">

    <h1 class="heading"> <span>LIÊN HỆ</span></h1>

    <!-- form -->

    <form action="" name="frm" onsubmit="return validateForm(this)">

        <!-- Ảnh -->

        <div>
            <img style="width:300px; height:300px; " src="/src/assets/images/anh1.png">
        </div>

        <!-- Các thông tin cần điền và điều kiện bắt buộc -->

        <br>


        <div class="inputBox">

            <!-- Họ tên -->

            <input required type="text" pattern=".{5,20}" placeholder="Họ và tên:" title="Độ dài tối thiểu là 5 ký tự tối đa là 20 ký tự">
            
            <!-- email -->

            <input required pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" title="Vui lòng nhập đúng định dạng email" type="text" name="mail" placeholder="Email:">
        </div>


        <div class="inputBox">

            <!-- Số điện thoại  -->

            <input type="tel" name="sdt" required pattern="^(0[234][0-9]{8}|1[89]00[0-9]{4})$" title="Chỉ nhập số và đúng với định dạng số điện thoại" placeholder="Số điện thoại:">
            
            <!-- Địa chỉ -->
            
            <input required pattern=".{10,}" title="Nhập vào địa chỉ của bạn, ít nhất 6 ký tự" type="text" placeholder="Địa chỉ liên hệ:">
        </div>

        <textarea required placeholder="Nội dung:" name="" id="" cols="30" rows="10" minlength="5" maxlength="90" title="Độ dài tối thiểu là 10 tối đa 90 ký tự "></textarea>

        <input style="font-size: 20px;" type="submit" value="Gửi " class="btn">
    </form>

</section>
</main>
</template>