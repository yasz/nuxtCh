<template>
  <header class="shadow-lg p-3 mb-5 bg-white rounded">
    <b-navbar toggleable="md" type="dark" :style="{'background-color': themeColor}" fixed="top">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Ruian Veritas</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        
        <b-navbar-nav>
          <b-nav-item v-for="item in navItems" :key="item" :to="{name:item}">{{item}}</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">CN</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </header>
</template>

<style scoped>
div {
  margin: 5px;
  line-height: 25px;
}
</style>

<script>
import  gConst from "~/assets/js/gConst.js";

export default {
  data: function() {
    return {
      navItems: ["home", "about", "admissions"],
      themeColor:gConst.themeColor
    };
  }
};
</script>
