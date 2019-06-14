<template>
  <div class="hello">
    <div
      v-outline="{
      callback: refreshNavTree,
      selectors: ['h1'],
      exceptSelector: '[un-nav]'
    }"
      class="content"
    >
      <div>
        <h1>申请表</h1>
        <apply></apply>
      </div>
    </div>

    <div class="navigation">
      <a-row>
        <a-col>
          <div class="title">Outline</div>
          <outline-tree :treeData="navTree" :expand="false" class="tree">
            <div slot-scope="{ data}">
              <div class="node-render-content" @click.stop="jumpToAnchor(data.id)">{{ data.title }}</div>
            </div>
          </outline-tree>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import apply from "~/components/2.admissions/apply.vue";
import { outline } from "vue-outline";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    apply
  },
  directives: {
    outline: outline
  },
  data() {
    return {
      navTree: []
    };
  },
  methods: {
    refreshNavTree(treeData) {
      this.navTree = treeData;
    },
    jumpToAnchor(id) {
      let element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }
    }
  }
};
</script>

<style scoped>
.row {
  margin-top: 20px;
}
div {
  display: block;
  margin: 0 auto;
}
div {
  margin: 5px;
  line-height: 25px;
}

.navigation {
  width: 8rem;
  border: 1px solid #a2a2a2;
  padding: 0.5rem;
  border-radius: 2px;
  position: fixed;
  right: 2rem;
  top: 15%;
  /* bottom: 50px; */
  overflow: auto;
}

.node-render-content {
  cursor: pointer;
  margin: 2px 0;
}
.title {
  font-size: 1rem;
  border-bottom: 1px solid #c9c9c9;
  margin: 0.5rem;
}
</style>