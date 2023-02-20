<!-- 
  Note: This app is not meant to be 'served'. It just discusses default slots.

  The 'default slot' is a named slot called 'default'. 
  Everything that applies to the 'default slot' applies to named slots. 
  This means that named slots also have access to the parent instance but not the child instance.

  It gets special treatment by Vue as it is used by default in a slot with no name.

  The default slot is implicitly inferred as follows: 
-->
<template>
  <MyComponent>
    <template>Default template</template>
  </MyComponent>
</template>

<!-- The default slot can be denoted with shorthand slot notation. -->

<template>
  <MyComponent>
    <template #default>Default template</template>
  </MyComponent>
</template>

<!-- The default slot can be denoted with longhand slot notation. -->

<template>
  <MyComponent>
    <template v-slot:default>Default template</template>
  </MyComponent>
</template>