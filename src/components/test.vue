<template>
  <div id="test">
    <div class="main">
      <div class="content"></div>

    </div>
    <div class="left">
      this is the left

    </div>
    <div class="right">
      this is the right

    </div>

  </div>
</template>



<style>
.test {
  width: 1200px;
}

.main {
  width: 100%;
  float: left;
}

.content {
  margin: 0 200px;
}

.left {
  width: 200px;
  float: left;
  margin-left: -100%;
}

.right {
  width: 200px;
  float: left;
  margin-left: -200px;
}
</style>
