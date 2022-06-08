<template>
    <!--Footer-->
    <div class="footer_part">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer_iner text-center">
                        <p>Copyright &copy; <span id="autodate"></span> Wall-ID. | All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/css/styleDashboard.css"></style>
<script>
export default {
    mounted() {
        window.scrollTo(0, 0)
        //Copyright Date
        function newDate() {
          return new Date().getFullYear();
        }
        document.onload = document.getElementById("autodate").innerHTML = newDate();
    }
}
</script>