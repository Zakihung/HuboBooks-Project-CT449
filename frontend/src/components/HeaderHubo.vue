<script>
import CategoryService from '../services/Category.service';
export default {
    data() {
        return {
            inputSearch: '',
            checkLogAdmin: '',
            ManageCategory: [],
            countCart: 0,
            userLoginname: '',
            userLoginID: '1'
        }
    },
    methods: {
        async showCategory() {
            try {
                this.ManageCategory = await CategoryService.getAllCategory();
                let cart_localStorage = JSON.parse(localStorage.getItem("productCart"));
                this.countCart = cart_localStorage.length;
            } catch (error) {
                console.log(error)
            }
        },
        showUserAlreadyLogin() {
            if (localStorage.getItem('adminlogin') != null) {
                this.checkLogAdmin = 'adminlogin';
                document.querySelector("#login_complete").style.display = 'block';
                this.userLoginname = 'Tài khoản Admin'
            } else {
                if (!localStorage.getItem('isloggin')) {
                    //Trường hợp chưa đăng nhập
                    document.querySelector("#not_login").style.display = 'block';
                    document.querySelector("#login_complete").style.display = 'none';
                } else {
                    //Trường hợp đã đăng nhập      
                    document.querySelector("#login_complete").style.display = 'block';
                    document.querySelector("#not_login").style.display = 'none';
                    this.userLoginname = JSON.parse(localStorage.getItem("isloggin")).username;
                    this.userLoginID = JSON.parse(localStorage.getItem("isloggin"))._id;
                }
            }
        },
        logout_Btn() {
            localStorage.removeItem("isloggin");
            localStorage.removeItem("adminlogin");
            localStorage.removeItem("productCart");
            this.$router.push('/login')
            setTimeout(() => {
                window.location.reload();
            }, 700)
        },
        loadPage() {
            setTimeout(() => {
                window.location.reload();
            }, 100)
        },
        navigationCategory() {
            setTimeout(() => {
                window.location.reload();
            }, 100)
        }
    },
    mounted() {
        this.showUserAlreadyLogin(),
            this.showCategory()
    },

}
</script>

<template>
    <!-- header -->

    

<!-- logo và search box-->

<div class="header-1" style="padding: 17px 9%;">
    <div>
        <router-link to="/" class="logo" id="rotate" style="position: relative; left: 30%">
            <img src="/src/assets/images/logo.png" alt=""> HUBO BOOKS
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    
    
    <div style="position: absolute; right: 35%">
        <span class="input-group mb-3" v-if="checkLogAdmin !== 'adminlogin'">
                    <form action="/" class="d-flex" style="width:400px;" @submit.prevent>
                        <input type="text" class="form-control" placeholder="Nhập vào tên sách hoặc mô tả..." aria-label="Recipient's username" aria-describedby="basic-addon2" style="border-radius:6px; margin-right: 100px; font-size: 15px;"
                            v-model="inputSearch">
                        <router-link v-if="inputSearch !== ''" :to="{
                            name: 'FindProduct',
                            params: { name: JSON.stringify(inputSearch) },
                        }">
                            <button id="btn_search" type="submit" style="width:120px;height:50px;border-radius:0 6px 6px 0" @click="loadPage()">Tìm Kiếm</button>
                        </router-link>
                    </form>
                </span>
    </div>
    <div>
                <span class="" id="login_complete" style="display:none;z-index:100">
                    <div class="d-flex flex-column" style="position: absolute; right: 20%; top: 5%; z-index:10;">
                        <span>
                            <router-link :to="{
                                name: 'infoUser',
                                params: { id: userLoginID }
                            }">
                                <p style="margin-bottom:0; font-size: 20px;">{{ userLoginname }}</p>
                            </router-link>
                        </span>

                        <span>
                            <button @click="logout_Btn()" class="btn btn-danger text-decoration-none" style="    width: fit-content;
                                                                                                                        height: 35px;
                                                                                                                        display: flex;
                                                                                                                        align-items: center;
                                                                                                                        margin-top: 3px;
                                                                                                                        justify-content: center;
                                                                                                                        font-size: 25px
                                                                                                                    }">Đăng xuất</button>

                        </span>
                    </div>
                </span>
    </div>
                <div id="icons"  v-if="checkLogAdmin !== 'adminlogin'">
                <router-link to="/cartStore">
                    <i class="fa-solid fa-cart-shopping" style="color:#62ab00;position: absolute; right: 35%; font-size: 25px; top: 6%">
                        <span>{{ countCart }}</span>
                    </i>

                </router-link>
                
            </div>

                <div id="not_login" style="display:none; z-index:100;">
                    <div class="d-flex flex-column" style="font-size: 20px;position: absolute; right: 20%; top: 5%">
                        <span>
                            <a href="#" class="text-decoration-none" style="color:#62ab00;">
                                <router-link to="/login" class="text-decoration-none"> Đăng Nhập</router-link>
                        </a>
                    </span>

                    <span>
                        <a href="#" class="text-decoration-none" style="color:#62ab00;">
                            <router-link to="/register" class="text-decoration-none"> Đăng Ký</router-link>
                        </a>
                    </span>
                    </div>
                </div>
</div>


<!-- Thanh menu, giỏ hàng, khách hàng-->

<div id="header-2" style="padding: 5px 9%">
    <nav class="navbar navbar-expand-lg navbar-light" id="nav_bottom" v-if="checkLogAdmin !== 'adminlogin'"><!---->
        <div class="navbar-brand" href="#" >
                <div class="dropdown">
                    <div class="danhmuc">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-bars"></i>
                            &nbsp;
                            DANH MỤC SẢN PHẨM
                        </button>
                    
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="list-style:none;">
                        <div class="container d-flex flex-column">
                            <router-link @click="navigationCategory()" :to="{
                                name: 'CategoryBook',
                                params: { name: JSON.stringify('Tất Cả Sách') },
                            }">
                                <li>Tất cả sách</li>
                            </router-link>

                            <router-link class="li-book" @click="navigationCategory()" :to="{
                                name: 'CategoryBook',
                                params: { name: JSON.stringify(`${item.category_name}`) },
                            }" v-for="item in ManageCategory">
                                <li>{{ item.category_name }}</li>
                            </router-link>
                        </div>
                    </ul>
                </div>

        </div>
    </div>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
        </button>
        <div style="margin-left: 500px;z-index:10">
            <div class="collapse navbar-collapse" id="navbarNavDropdown" >
                <ul class="navbar-nav" >
                    
                    <!-- Trang chủ-->
                    
                    <li class="nav-item">
                        
                            <router-link to="/" style="text-decoration: none;">
                                Trang Chủ
                            </router-link>
                        
                    </li>
                    
                    <!-- Giới thiệu -->
                    
                    <li class="nav-item">
                        
                            <router-link to="/introduce" style="text-decoration: none;">
                                Giới Thiệu
                            </router-link>
                        
                    </li>
                    
                    <!-- Sản phẩm-->
                    
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link" href="sanpham.html" id="navbarDropdownMenuLink" role="button" aria-expanded="page">
                            Sản Phẩm
                          </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="vhViet.html">Văn Học Việt Nam</a></li>
                            <li><a class="dropdown-item" href="vhngoai.html">Văn Học Nước Ngoài</a></li>
                            <li><a class="dropdown-item" href="thamkhao.html">Tài Liệu Tham Khảo</a></li>
                        </ul>
                    </li> -->
                    
                    
                    
                    <!-- Liên hệ -->
                    
                    <li class="nav-item">
                        <router-link to="/contact" style="text-decoration: none;">
                                Liên hệ
                            </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    
    </div>
    
    <!-- return TOP-->
    
    <button onclick="topFunction()" id="myBtn" title="Go to top">TOP</button>
</template>

<style>
    @import "@/assets/css/style.css";
    /* @import "@/assets/css/form.css"; */
    @import "@/assets/css/bootstrap.min.css";
    @import "@/assets/css/bootstrap-table.min.css";
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');

.danhmuc button{
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    color: rgb(20, 187, 20);
    border:2px solid rgb(20, 187, 20); 
    padding:10px;
    position: relative;
    left: 50%;
}

.danhmuc button:hover{
    background: var(--green);
    color: #fff;
}




</style>

