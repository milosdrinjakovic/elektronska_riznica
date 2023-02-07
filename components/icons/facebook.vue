<template>
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    :width="size"
    :height="size"
    viewBox="0 0 512 512"
    style="enable-background:new 0 0 512 512;"
    xml:space="preserve">
<g>
	<g>
		<path
      :fill="color"
      d="M288,176v-64c0-17.664,14.336-32,32-32h32V0h-64c-53.024,0-96,42.976-96,96v80h-64v80h64v256h96V256h64l32-80H288z"/>
	</g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
</svg>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        required: false,
        default: '#3A5285'
      },
      size: {
        type: String,
        required: false,
        default: '24px'
      }
    },
  }
</script>
