<!--
  VUE DIRECTIVES
  All Vue based directives are prefixed with v-*, which indicates that it is a Vue specific attribute.

  v-text: 
  The v-text directive has the same reactivity interpolation does, except you reference the same 
  piece of data inside of a directive. 
  Interpolation (curly braces) {{ }} is more performant than the v-text directive; 
  however, you may find yourself in situations where you have pre-rendered text from a server 
  and want to override it once your Vue application has loaded. 
  For example, you can predefine static placeholder text while the DOM waits for the data and 
  v-text attributes to eventually replace it.

v-once: 
As a directive, this is unique in that you pair it with other directives to augment how they function.
Passing data via v-text or interpolated curly braces into the HTML element this attribute is added 
to will stop the Vue instance from reloading the element with new data, removing the reactivity of 
the element. 
This is handy for situations where you want to render decorative elements using data, 
but do not want them to update when the data changes after the initial render.


v-html: 
This directive will render valid HTML in your data string inside of the HTML element to which it has 
been bound. 
This directive is a heavier operation than the other directives, so limited usage is recommended when
other options are not otherwise available.

  Note
  <script> tags can be run in this directive. 
  Only render content originating from secure or trusted sources.

v-bind: 
This directive is one of the most widely used directives in Vue. 
Throughout Vue, you will be binding reactive data to HTML attributes and passing data into props 
using this directive.

This directive has a shortcut:
  :attr is the shortcut for v-bind:attr.

  Example:
  v-bind:href  === :href 

v-if: 
To control the display state of HTML elements inside the template, 
you will often use `v-if` to completely remove elements from the DOM tree. 
So far, we have seen how to interpolate conditionals like this {{ isTrue ? 'Show this': 'Not this' }}.

With the `v-if` directive, you can control entire blocks of HTML syntax. 

`v-else-if` can be used like 'else if' statements and finish with `v-else`, 
which is the equivalent to the catch { ... } declaration of an else { ... } statement in traditional 
JavaScript.

v-show: 
You can control the visible state of HTML elements by using `v-show`, 
which, instead of removing the element from the DOM tree, 
will apply a display: none style. 

The difference between a `v-if` and `v-show` is that `v-show` will remain as a block element in the 
DOM tree but will be hidden with css instead of being removed from the DOM tree. 

You also cannot chain `v-show` with `v-else` or `v-else-if`.
-->

<script setup>
import VueDirectives from "./components/VueDirectives.vue";
</script>

<template>
  <vue-directives></vue-directives>
</template>

<style scoped>
/* Write styling here */
</style>
