<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
*{
  padding: 0;margin: 0; font-size: 12px;
} article, aside, blockquote, body, button, code, dd, details, div, dl, dt, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, input, legend, li, menu, nav, ol, p, pre, section, td, textarea, th, ul {
    margin: 0;
    padding: 0;
}
html { 
 line-height: 1.15; /* Correct the line height in all browsers */ 
 -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS. */ 
     color: #333;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
} 
body { 
 margin: 0; 
 font-family: pingfang SC,helvetica neue,arial,hiragino sans gb,microsoft yahei ui,microsoft yahei,simsun,sans-serif!important;
} 
a { 
 background-color: transparent; /* Remove the gray background on active links in IE 10. */ 
} 
img { 
 border-style: none; /* Remove the border on images inside links in IE 10. */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
