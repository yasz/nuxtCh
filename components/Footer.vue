<template>
  <div>
    <a-back-top id="backTop"/>
    <footer :style="{'background-color': themeColor}" id="footer">
      <div  class="container">
        <div class="row">
          <div class="col-lg-6 text-lg-left text-center">
            <p>
              <strong style="font-size:16px">Ruian Veritas Academy</strong>
              <strong>
                <br>
                <br>Address : 88 Zhousong Zhong Road,Ruian,Zhejiang <br>P.C. : 325200
              </strong>
              <br>
              <strong>
                Tel : 86-577-65817188
                <br>
                <a href="mailto:info@ruianva.cn">E-mail : info@ruianva.cn</a>
              </strong>
            </p>
            <p>
              Designed and built by Veritas assistant.
              <br>Copyright © 2018.Ruian VA All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import  gConst from "~/assets/js/gConst.js";

export default {
  data: function () {
    return {
      themeColor:gConst.themeColor
    }
  }
};
</script>

<style scoped>
/* @import "~/assets/css/style.css"; */

strong,
a {
  color: rgba(255, 255, 255, 0.85);
}
div {
    color: rgba(255, 255, 255, 0.5);
    /* background-color: #BDB76B;  */
  }
#backTop {
  background-color: rgba(255, 255, 255, 0);
}
#footer {
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  padding: 15px 0;
  font-size: 12px;
  width: 100%;
  /* position: fixed; */
  bottom: 0;
  left: 0;
}
</style>
