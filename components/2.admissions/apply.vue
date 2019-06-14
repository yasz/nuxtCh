<style scoped>
.row {
  margin-top: 20px;
}
button {
  display: block;
  margin: 0 auto;
}
</style>
<script>
import globalVue from "~/components/Global.vue";
import { addressOptions } from "~/assets/js/global";

export default {
  components: {
    globalVue
  },
  name: "apply",
  render: function(h) {
    //
    return (
      <a-row>
        <a-form form={this.form}>
          {globalVue.parseAntForm(h,this.formData)}
          <a-col span="12">
            <a-form-item>
              <a-button
                type="primary"
                onClick={() => this.check1()}
                html-type="submit"
              >
                Submit
              </a-button>
            </a-form-item>
          </a-col>
        </a-form>
      </a-row>
    ); //动态解析,为表单生成公公函数
  },
  data() {
    return {
      form: this.$form.createForm(this),
      formData: [
        { text: "学生姓名", type: "text" },
        { text: "学生性别", type: "radio", options: { F: "女", M: "男" } },
        // { text: "出生日期", type: "datepicker" },
        // { text: "户籍地址", type: "cnCascader" },
        // { text: "现就读学校", type: "text" },
        // {
        //   text: "现就读年级",
        //   type: "radio",
        //   options: ["学前"].concat(
        //     Array.from(new Array(9), (val, index) => index + 1)
        //   )
        // },
        // {
        //   text: "申请就读年级",
        //   type: "radio",
        //   options: Array.from(new Array(9), (val, index) => index + 1)
        // },
        // { text: "特长及爱好", type: "text" },
        // { text: "父亲姓名", type: "text" },
        // { text: "父亲手机", type: "text" },
        // { text: "父亲工作单位及职位", type: "text" },
        // { text: "母亲姓名", type: "text" },
        // { text: "母亲手机", type: "text" },
        // { text: "母亲工作单位及职位", type: "text" },
        {
          text: "了解惟校渠道",
          type: "checkbox",
          options: {
            a: "亲戚朋友",
            b: "网络媒体",
            c: "纸质媒体",
            d: "教育部招生计划"
          }
        },
        { text: "照片上传", type: "photo" }
      ]
    };
  },
  methods: {
    init() {},
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    check1() {
      this.form.validateFields(async (err, values) => {
        if (!err) {
          let data = JSON.stringify(values);
          const res = await fetch("/api/admissions", {
            // Your POST endpoint
            method: "POST",
            body: JSON.stringify(values)
          });
          if (res.ok) {
            let returnMsg = await res.text();
            alert(returnMsg);
          } else {
            alert("尚未开放报名，紧急情况，联系13609854238");
          }
        }
      });
    }
  }
};
</script>