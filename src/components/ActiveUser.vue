<template>
  <ul>
    <li>
      <strong>Name:</strong>
      {{ Name }}
    </li>
    <li>
      <strong>Age:</strong>
      {{ Age }}
    </li>
  </ul>


</template>


<script>
export default {
  props: {
    Name: {
      type: String,
      require: true

    },
    Age: {
      type: String,
      require: true
    }
  },
}
</script>