<script>

</script>

<template>
    <section class="home" id="home">
            
            <div class="image">
                <img src="/src/assets/images/home-img.jpg" alt="">
            </div>
            <br>
            <div class="content">
                <span>Chào Mừng Bạn Đến Với</span>
                <h3>HUBO BOOKS</h3>
                <a href="gioithieu.html" class="btn">Khám phá ngay</a>
            </div>

        </section>
        
        <!-- banner, ảnh và nội dung phụ -->
        
        <section class="banner-container">
            
            <!-- phụ 1 -->
            
            <div class="banner">
                <img src="/src/assets/images/banner-1.jpg" alt="">
                <div class="content">
                    <h3>Văn học Nước Ngoài</h3>
                    <p>Văn học các nước với nhiều tác phẩm kinh điển</p>
                    <a href="vhngoai.html" class="btn">Đến xem</a>
                </div>
            </div>
            
            <!-- phụ 2-->
            
            <div class="banner">
                <img src="/src/assets/images/banner-2.jpg" alt="">
                <div class="content">
                    <h3>Văn học Việt Nam</h3>
                    <p>Văn học Việt Nam mang nét đặc trưng riêng so với các tác phẩm nước ngoài</p>
                    <a href="vhViet.html" class="btn">Đến xem</a>
                </div>
            </div>
            
            <!-- phụ 3-->
            
            <div class="banner">
                <img src="/src/assets/images/banner.jpg" alt="">
                <div class="content">
                    <h3>Tài liệu tham khảo và giáo trình</h3>
                    <p>Kho tài liệu và giáo trình đồ sộ mời bạn tham khảo</p>
                    <a href="thamkhao" class="btn">Đến xem</a>
                </div>
            </div>
        </section>

        <!-- newsletter  -->
        
        <section class="newsletter">

            <h3>Đăng ký nhận thông tin khuyến mãi!</h3>

            <form action="" name="frm" onsubmit="return validateForm1(this)">
                <input required class="box" pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" title="Vui lòng nhập đúng định dạng email" type="email" placeholder="Nhập Email của bạn">
                <input type="submit" value="Đăng ký" class="btn">
            </form>
        </section>
</template>
