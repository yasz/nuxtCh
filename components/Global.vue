<script>
import moment from "moment";
import { addressOptions } from "~/assets/js/global";
import applyPhoto from "~/components/2.admissions/applyPhoto.vue";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
function parseAntForm(h, data) {
  
      let rs = [];
      data.forEach(item => {
        if (item.type == "text") {
          rs.push(
            <a-input
              defaultValue={item.text}
              // style="width: 50%"
              v-decorator={[
                item.text,
                {
                  rules: [{ required: true, message: "不能为空!" }]
                }
              ]}
              placeholder={item.text}
              
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
            <a-form-item>
              <a-radio-group
                v-decorator={[
                  item.text,
                  {
                    initialValue: radioDefaultValue
                  }
                ]}
                defaultValue={radioDefaultValue}
                buttonStyle="solid"
              >
                {radioGroups}
              </a-radio-group>
            </a-form-item>
          );
        } else if (item.type == "datepicker") {
          rs.push(
            <a-date-picker
              v-decorator={[
                item.text,
                {
                  initialValue: moment("2010/01/01", "YYYY/MM/DD")
                }
              ]}
              defaultValue={moment("2010/01/01", "YYYY/MM/DD")}
            />
          );
        } else if (item.type == "cnCascader") {
          rs.push(
            <a-cascader
              v-decorator={[
                item.text,
                {
                  initialValue: ["浙江省", "温州市", "鹿城区"]
                }
              ]}
              options={addressOptions}
              defaultValue={["浙江省", "温州市", "鹿城区"]}
              // style="width: 50%"
            />
          );
        } else if (item.type == "photo") {
          rs.push(<applyPhoto />);
        } else if (item.type == "checkbox") {
          let groups = [];
          let defaultValue = "";
          if (item.options instanceof Array) {
            // debugger
            defaultValue = item.options[0];
            item.options.forEach(item => {
              groups.push(<a-checkbox value={item}>{item}</a-checkbox>);
            });
          } else {
            defaultValue = Object.keys(item.options)[0];
            for (let [key, value] of Object.entries(item.options)) {
              groups.push(
                <a-checkbox default-checked={true} value={key}>
                  {value}
                </a-checkbox>
              );
            }
          }
          rs.push(
            <a-checkbox-group
              v-decorator={[
                item.text,
                {
                  initialValue: [defaultValue]
                }
              ]}
              defaultValue={[defaultValue]}
              buttonStyle="solid"
            >
              {groups}
            </a-checkbox-group>
          );
        }
      });
      //布局
      let rs2 = [];
      data.forEach((item, i) => {
        rs2.push(
          <a-row>
            <a-col span="24">
              <a-form-item
                label={item.text}
                label-col={{ span: 6 }}
                wrapper-col={{ span: 10 }}
              >
                {rs[i]}
              </a-form-item>
            </a-col>
          </a-row>
        );
      });
      return rs2;
    }
export default {
  components: {
    applyPhoto
  },
  // data() {
  //   return { form: this.$form.createForm(this) };
  // },
  parseAntForm,
  props: ["formData","form"],
  render: function(h) {
    
    return <div>{this.parseAntForm(h, this.formData)}</div>;
    //  return <div>{this.parseAntForm(h, this.formData)}</div>;
  },
  beforeCreate: function() {
    fetch("/api/ping")
      .then(data => data.text())
      .catch(error => console.error("Error:", error))
      .then(response => {
        if (response != "pingSuccess") {
          alert("尚未开放报名，紧急情况，联系13609854238");
          this.$router.push({ path: "/home" });
        }
      });
  },
   
  methods: {
    h1(h, data) {
      // console.log(data);
    },
    parseAntForm
  }
};
</script>
