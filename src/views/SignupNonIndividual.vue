<template>
    <MainHeader/>

    <section class="login-area-sign">
        <div class="row m-0">
            <div class="col-lg-3"></div>
            <div class="col-lg-6 col-md-12">
                <div class="login-content signup-content-only">
                    <div class="login-form">
                        <div class="col-lg-12 text-center">
                            <h3>Non-Individual Sign Up</h3>
                            <p>Select type of non-individual user and fill up the selected form to continue.</p>
                        </div>
                        <div class="site-wrapper">
                            <section class="tabs-wrapper">
                                <div class="tabs">
                                    <!-- 
                                        -----------------
                                        Registered Company/SMEs Registration Form
                                        -----------------
                                    -->
                                    <input type="radio" name="tabs" id="tab1" checked="checked" />
                                    <label for="tab1" class="label">Registered<br>Company/SMEs</label>
                                    <div class="tab">
                                        <div class="form-signup-div">
                                            <h4 class="title-form">Registered Company/SMEs Sign Up</h4>
                                            <div class="line-rule"></div>
                                            <form class="form-form-div">
                                                <!-- Company Name Here -->
                                                <div>
                                                    <label for="company name">Company name</label>
                                                    <input type="text" required placeholder="Enter your company name">
                                                </div>
            
                                                <!-- Compnay Email Here -->
                                                <div>
                                                <label for="company email">Company email</label>
                                                <input type="email" required placeholder="myemail@email.com">
                                                </div>
            
                                                <!-- Telephone Number Here -->
                                                <div>
                                                <label for="phone">Telephone number</label>
                                                <input type="tel" required placeholder="Enter company's phone number">
                                                </div>
            
                                                <!-- Compnay Address Here -->
                                                <div>
                                                    <label for="address">Company address</label>
                                                    <textarea cols="30" rows="3" required placeholder="Company addres"></textarea>
                                                </div>
            
                                                <!-- Compnay Nature Here -->
                                                <div>
                                                    <label for="address">Company nature</label>
                                                    <input type="text" required placeholder="Nature of business">
                                                </div>
            
                                                <!-- Upload Company Licence Here -->
                                                <div>
                                                    <label for="upload company licence">Upload company licence</label>
                                                    <input type="file" required>
                                                </div>
            
                                                <!-- Upload Proof Of Company Address Here -->
                                                <div>
                                                    <label for="upload proof of company address">Upload proof of company address</label>
                                                    <input type="file" required>
                                                    <div class="utility">Utility bill or Bank statement</div>
                                                </div>
            
                                                <!-- Number Of Employee Here -->
                                                <div>
                                                    <label for="number of employee">Number of employee</label>
                                                    <select>
                                                        <option value="Select option" hidden>Select Option</option>
                                                        <option value="1-9 Employees">1-9 Employees</option>
                                                        <option value="More Than 10 Employees">More Than 10 Employees</option>
                                                    </select>
                                                </div>
            
                                                <!-- Password Here -->
                                                <div>
                                                    <label for="password">Password</label>
                                                    <input type="password" required placeholder="*********">
                                                    <i class="toggle-password fa fa-fw fa-eye-slash"></i>
                                                </div>
            
                                                <!-- Retype Password Here -->
                                                <div>
                                                    <label for="retype password">Retype password</label>
                                                    <input type="password" required placeholder="*********">
                                                    <i class="toggle-password fa fa-fw fa-eye-slash"></i>
                                                </div>
            
                                                <!-- Accept Privacy Policy -->
                                                <div class="accept-terms">By clicking submit, you agree to Wall-ID <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a></div>
            
                                                <!-- Submit Button Here-->
                                                <div class="signup-btn-div text-center">
                                                    <input type="submit" value="Sign Up" class="submit-form">
                                                </div>
            
                                                <!-- Alread Have An Account -->
                                                <div class="already">Already have a wall-id account? <router-link :to="{name: 'Login'}"><a>Login</a></router-link></div>
                                            </form>
                                        </div>
                                    </div>

                                    <!--
                                        -----------------
                                        Group/Organisation Registration Form
                                        -----------------
                                    -->
                                    <input type="radio" name="tabs" id="tab3" />
                                    <label for="tab3" class="label">Group/<br>Organisation</label>
                                    <div class="tab">
                                        <div class="form-signup-div">
                                            <h4 class="title-form">Group/Organisation Sign Up</h4>
                                            <div class="line-rule"></div>
                                            <form class="form-form-div">
                                                <!-- Organisation Name Here -->
                                                <div>
                                                    <label for="organisation name">Group/Organisation name</label>
                                                    <input type="text" required placeholder="Enter your organisation name">
                                                </div>
            
                                                <!-- Organisation Email Here -->
                                                <div>
                                                <label for="organisation email">Group/Organisation email</label>
                                                <input type="email" required placeholder="myemail@email.com">
                                                </div>
            
                                                <!-- Organisation Telephone Number Here -->
                                                <div>
                                                <label for="phone">Group/Organisation phone number</label>
                                                <input type="tel" required placeholder="Enter phone number">
                                                </div>
            
                                                <!-- Number Of Members Here -->
                                                <div>
                                                    <label for="number of members">Number of members</label>
                                                    <select>
                                                        <option value="select option" hidden>Select Option</option>
                                                        <option value="1-9 memebrs">1-9 Members</option>
                                                        <option value="more than 10 members">More Than 10 Members</option>
                                                    </select>
                                                </div>
            
                                                <!-- Password Here -->
                                                <div>
                                                    <label for="password">Password</label>
                                                    <input type="password" required placeholder="*********">
                                                    <i class="toggle-password fa fa-fw fa-eye-slash"></i>
                                                </div>
            
                                                <!-- Retype Password Here -->
                                                <div>
                                                <label for="retype password">Retype password</label>
                                                <input type="password" required placeholder="*********">
                                                <i class="toggle-password fa fa-fw fa-eye-slash"></i>
                                            </div>
            
                                                <!-- Accept Privacy Policy -->
                                                <div class="accept-terms">By clicking submit, you agree to Wall-ID <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a></div>
            
                                                <!-- Submit Button Here-->
                                                <div class="signup-btn-div text-center">
                                                    <input type="submit" value="Sign Up" class="submit-form">
                                                </div>
            
                                                <!-- Alread Have An Account -->
                                                <div class="already">Already have a wall-id account? <router-link :to="{name: 'Login'}"><a>Login</a></router-link></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3"></div>
        </div>
    </section>

    <MainFooter/>
</template>
<script>
import MainHeader from './MainHeader.vue'
import MainFooter from './MainFooter.vue'
export default {
    mounted() {
        window.scrollTo(0, 0);
    },
    components: { MainHeader, MainFooter }
}
</script>