<script>

</script>

<style scoped>
    @import "@/assets/css/style.css";
    @import "@/assets/css/bootstrap.min.css";
    @import "@/assets/css/bootstrap-table.min.css";
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');
</style>

<template>
    
         
           <!-- logo và lời chào chân trang-->
        <hr>
           <div class="box-container">
           
               <!-- bên trái -->
           
               <div class="box">
                <router-link to="/" style="text-decoration: none;">
               <a  class="logofooter"><img src="/src/assets/images/logo.png" alt=""> HUBO BOOKS</a>
               
            </router-link><p>Tận hưởng những phút giây đọc sách trọn vẹn với những quyển sách chất lượng cao cùng giá thành hợp lý. Kết nối với chúng tôi để hiểu HUBO hơn nữa!
               </p>
               <div class="share">
                   <a href="#" class="btn fab fa-facebook-f"></a>
                   <a href="#" class="btn fab fa-twitter"></a>
                   <a href="#" class="btn fab fa-instagram"></a>
                   <a href="#" class="btn fab fa-linkedin"></a>
               </div>
           </div>
           
           <!-- giữa, liên kết trang sản phẩm-->
           
           <div class="box">
               <h3>Về Hubo</h3>
               <div class="links">
                <router-link to="/introduce" style="text-decoration: none;">Giới Thiệu</router-link>
                <router-link to="/contact" style="text-decoration: none;">Liên Hệ</router-link>
                
               </div>
           </div>
           
           <!-- phải, Liên hệ-->
           
           <div class="box">
               <h3>Liên Hệ</h3>
               <p class="fas fa-home">Xuan Khanh, Ninh Kieu, Can Tho</p>
               <br>
               <p class="fas fa-envelope">
                   test@example.com
               </p><br>
               <p class="fas fa-phone">0123456789</p>
           </div>
        </div>
       
   
   
   
   <!-- Bản Quyền-->
   
   <div class="text-center p-4" >
       © 2024 Copyright:
       <a class="text-reset fw-bold" style="text-decoration: none; font-size: 15px;">Hệ thống bán sách trực tuyến HUBO BOOKS (B2110124 CT44904-22324)</a>
   </div>
</template>

