<template>
    <div id="test">

        <h2>Using a Block Formatting Context<br>to make a Final Column "fit"</h2>

        <div class="container">
            <div class="column">column 1</div>
            <div class="column">column 2</div>
            <div class="column c3 bfc">column 3</div>
        </div>

        <button>TOGGLE BLOCK FORMATTING CONTEXT</button>

        <p class="p">Demo by Ritesh Kumar.
            <a href="http://www.sitepoint.com/understanding-block-formatting-contexts-in-css" target="_blank">See article</a>.</p>

    </div>
</template>



<style>
.container {
  min-height: 200px;
}

.column {
  width: 31.33%;
  background-color: green;
  float: left;
  min-height: 100px;
  margin: 0 1%;
}

/* .column:last-child {
  float: none;
} */

.bfc {
  overflow: hidden;
}

/* general styling */
body {
  text-align: center;
}

.column {
  color: #fff;
  padding: 10px 0;
}

button {
  margin-top: 30px;
}

.p {
  background: none;
  padding-top: 100px;
  font-size: 13px;
  text-align: center;
  color: black;
}
/* general styling ends */
</style>
