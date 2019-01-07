<template>
  <div>
    <back-to-top bottom="50px" right="50px">
      <button type="button" class="btn btn-info btn-to-top">
        <i class="fa fa-chevron-up"></i>
      </button>
    </back-to-top>

    <footer id="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 text-lg-left text-center">
            <p>校址:瑞安市周松中路88号（体育东路路口，近万松公园）</p>
            <p>
              <i class="icon-phone"></i> (86) 0577-6581-7188
              <br>
              <i class="icon-envelope-alt"></i> E-mail:
              <a href="mailto:info@ruianva.cn">info@ruianva.cn</a>
              <br>
            </p>
            <p>Designed and built by Veritas.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

#footer {
  background: #fff;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  padding: 30px 0;
  color: #333;
  font-size: 14px;
}
</style>

<script>
import BackToTop from "vue-backtotop"
export default {
  components: { BackToTop }
};
</script>