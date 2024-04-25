<script>
import AuthService from '../services/Auth.service';
import ToastVue from './Toast.vue';
import toast from '../assets/js/toasts';

import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        ToastVue,
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const Loginform = yup.object().shape({
            email: yup
                .string()
                .required("Email phải có giá trị.")
                .email("Email không đúng định dạng")
                .max(30, "Email tối đa 30 ký tự."),
            password: yup
                .string()
                .min(6, "Mật khẩu phải có ít nhất 6 kí tự")
                .required("Mật khẩu phải có giá trị.")
        });
        return {
            Loginform,
            userDataInput: {
                email: "",
                password: ""
            },
            toasts: {
                title: "",
                msg: "",
                type: "",
                duration: 0
            },
        }
    },
    methods: {
        toast,
        async handleLoginUser() {
            try {
                if (this.userDataInput.email == '' || this.userDataInput.password == '') {
                    this.toasts.title = "Thất bại",
                        this.toasts.msg = "Chưa điền đầy đủ thông tin !"
                    this.toasts.type = "success",
                        this.toasts.duration = 2000
                    document.querySelector("#toast").style.display = 'block'
                    this.toast();
                    setTimeout(() => {
                        document.querySelector("#toast").style.display = 'none'
                    }, 1000)
                } else {
                    if (this.userDataInput.email === 'admin@gmail.com') {
                        await AuthService.createlogin(this.userDataInput);
                        localStorage.setItem('adminlogin',true);
                        this.toasts.title = "Thành công",
                            this.toasts.msg = "Đăng Nhập Thành Công!"
                        this.toasts.type = "success",
                            this.toasts.duration = 2000
                        document.querySelector("#toast").style.display = 'block'
                        this.toast();
                        setTimeout(() => {
                            document.querySelector("#toast").style.display = 'none'
                            this.$router.push('/admin');
                        }, 1000)
                    } else {
                        const userDataLogin = await AuthService.createlogin(this.userDataInput);
                        localStorage.setItem('isloggin', JSON.stringify(userDataLogin));
                        this.toasts.title = "Thành công",
                            this.toasts.msg = "Đăng Nhập Thành Công !"
                        this.toasts.type = "success",
                            this.toasts.duration = 2000
                        document.querySelector("#toast").style.display = 'block'
                        this.toast();
                        setTimeout(() => {
                            document.querySelector("#toast").style.display = 'none'
                            this.$router.push({ name: "HomePage" });
                        }, 2000)
                    }

                    setTimeout(() => {
                        window.location.reload();
                    }, 2100)
                }



            }
            catch (err) {
                console.log(err)
                this.toasts.title = "Thất bại",
                    this.toasts.msg = "Sai tên tài khoản hoặc mật khẩu !"
                this.toasts.type = "error",
                    this.toasts.duration = 2000
                document.querySelector("#toast").style.display = 'block'
                this.toast()
                setTimeout(() => {
                    document.querySelector("#toast").style.display = 'none'
                }, 700)
            }
        }
    },
};

</script>



<template>
    <br>
    <br>
    <ToastVue></ToastVue>
    <div class="container">
            <div class="row px-3">
                <div class="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                    
                    <!-- Ảnh bên trái -->

                    <div class="img-left d-none d-md-flex"></div>

                    <!-- Form đăng nhập -->

                    <div class="card-body" style="font-size: 15px;">

                        <h4 class="titlelg text-center mt-4">Đăng nhập tài khoản</h4>

                        <!-- form -->

                        <Form :validation-schema="Loginform" @submit.prevent class="form-box px-3" >
                            
                            <!-- Email và các ràng buộc -->

                            <div class="mb-3">
                                <label for="email" class="form-label fw-bold">Email: </label>
                                <Field id="email" placeholder="Vui lòng nhập vào Email" name="email" type="email" class="form-control form-control-lg" v-model="userDataInput.email" required />
                                <ErrorMessage name="email" class="text-danger" />


            <!-- <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Vui lòng nhập vào email..." required/> -->

                                </div>
                            
                            <!-- Mật khẩu và các ràng buộc -->

                            <div class="mb-3">
                                <label for="password" class="form-label fw-bold">Mật khẩu: </label>
                                <Field id="password" placeholder="Vui lòng nhập vào mật khẩu" name="password" type="password" class="form-control form-control-lg" v-model="userDataInput.password" required />
                                <ErrorMessage name="password" class="text-danger" />
            <!-- <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Nhập vào mật khẩu..." /> -->
                            </div>

                            <!-- Các tùy chọn khác -->

                            <div class="mb-3">
                                
                                <div class="mb-3">
                                    <!-- <button type="submit" class="btn btn-block text-uppercase">Đăng nhập</button> -->
                                    <button type="submit" @click="handleLoginUser()" class="btn btn-light fw-bold" style="padding: 10px;;border:1px solid #ccc">Đăng nhập</button>
                                </div>

                                <!-- <div class="text-right">
                                    <a href="#" class="forget-link">Quên mật khẩu</a>
                                </div> -->

                                <hr class="my-4">
                                <div class="text-center mb-2" style="font-size: 14px;">Bạn chưa có tài khoản? 
                                        
                                        <router-link to="/register" class="register-link">Đăng Ký
                                        </router-link>
                                </div>
                                <br>
                                <br>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
    </div>
</template>

<style>
.form-control-lg{
    font-size: 15px;
}
</style>