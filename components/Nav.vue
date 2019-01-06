<template>
  <header>
    
<b-nav tabs>
  <b-nav-item active>Active</b-nav-item>
  <b-nav-item>Link</b-nav-item>
  <b-nav-item>Another Link</b-nav-item>
  <b-nav-item disabled>Disabled</b-nav-item>
</b-nav>

  </header>
</template>
<script>
export default {
  data: function () {
    return {
      navItems:['index','about','contact']
    }
  }
}
</script>
