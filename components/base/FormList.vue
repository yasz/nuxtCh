<script>
import moment from "moment";
import { addressOptions } from "~/assets/js/global";

export default {
  name: "FormList",
  props: ["formData"],
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  render: function() {
    const h = this.$createElement;
    let rs = [];
    this.formData.forEach(item => {
      
      // debugger
      if (item.type == "text") {
        rs.push(
          <a-input
            // style="width: 50%"
            v-decorator={[
              "note",
              {
                rules: [{ required: true, message: "Please input your note!" }]
              }
            ]}
          />
        );
      } else if (item.type == "radio") {
        let radioGroups = [];
        let radioDefaultValue = "";
        if (item.options instanceof Array) {
          // debugger
          radioDefaultValue = item.options[0];
          item.options.forEach(item => {
            radioGroups.push(
              <a-radio-button value={item}>{item}</a-radio-button>
            );
          });
        } else {
          radioDefaultValue = Object.keys(item.options)[0];
          for (let [key, value] of Object.entries(item.options)) {
            radioGroups.push(
              <a-radio-button value={key}>{value}</a-radio-button>
            );
          }
        }
        rs.push(
          <a-radio-group defaultValue={radioDefaultValue} buttonStyle="solid">
            {radioGroups}
          </a-radio-group>
        );
      } else if (item.type == "datepicker") {
        rs.push(
          <a-date-picker defaultValue={moment("2010/01/01", "YYYY/MM/DD")} />
        );
      } else if (item.type == "cnCascader") {
        rs.push(
          <a-cascader
            options={addressOptions}
            defaultValue={["浙江省", "温州市", "鹿城区"]}
            // style="width: 50%"
          />
        );
      }
    });
    //布局
    let rs2 = [];
    this.formData.forEach((item, i) => {
      rs2.push(
        <a-form-item
          label={item.text}
          label-col={{ span: 4 }}
          wrapper-col={{ span: 8 }}
        >
          {rs[i]}
        </a-form-item>
      );
    });
    // return  <div>{rs2}</div>;
    return  <a-form form={this.form} submit="handleSubmit">{rs2}</a-form>;

  },
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    }
  }
};
</script>
