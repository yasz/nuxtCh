<template>
  <a-upload-dragger
    name="file"
    :multiple="true"
    
    @change="handleChange"
    :beforeUpload="beforeUpload"
    :customRequest="customRequest"
  >
    <p class="ant-upload-drag-icon">
      <a-icon type="inbox"/>
    </p>
    <p class="ant-upload-text">Click or drag file to this area to upload</p>
    <p
      class="ant-upload-hint"
    >Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
  </a-upload-dragger>
</template>
<script>
// const fetch = require("node-fetch");

export default {
  data() {
    return {};
  },
  methods: {
    customRequest({
      action,
      data,
      file,
      filename,
      headers,
      onError,
      onProgress,
      onSuccess,
      withCredentials
    }) {
      const formData = new FormData();
      formData.append("file", file);
      // debugger;
      fetch("/api/unit1", {
        // Your POST endpoint
        method: "POST",
        responseType: 'blob',
        body: formData
      })
        .then(async function(response) {
          let res = await (response.blob()); // if the response is a JSON object;
          // debugger          
          const aLink = document.createElement("a");
          document.body.appendChild(aLink);
          aLink.style.display = "none";
          const objectUrl = window.URL.createObjectURL(
            new Blob([res]
            // , {
            //   encoding: "UTF-8",
            //   type: "text/plain;charset=UTF-8"
            // }
            )
          );
          aLink.href = objectUrl;
          aLink.download = response.headers.get("content-disposition").split(/filename="(.*)"/)[1];
          aLink.click();
          document.body.removeChild(aLink);
          onSuccess(response, file);
        })
        .then(
          success => console.log(success) // Handle the success response object
        )
        .catch(
          error => console.log(error) // Handle the error response object
        );
    },
    beforeUpload(file, fileList) {
      // const isJPG = file.type === "image/jpeg";
      // const isPNG = file.type === "image/png";
      // const isBMP = file.type === "image/bmp";
      // const isGIF = file.type === "image/gif";
      // const isWEBP = file.type === "image/webp";
      // const isPic = isJPG || isPNG || isBMP || isGIF || isWEBP;
      // if (!isPic) {
      //   alert.error("只能上传图片");
      //   this.setState({
      //     fileListD: fileList.filter(fileItem => file.uid !== fileItem.uid)
      //   });
      //   return false;
      // }
      // return isPic;
    },
    handleChange(info) {
      const status = info.file.status;
      let response = info.fileList[0].response;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    }
  }
};
</script>


<style scoped>
div {
  margin: 15px;
  line-height: 25px;
}
</style>
