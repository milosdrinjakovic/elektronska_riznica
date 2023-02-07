<template>
  <div>
    <div class="flip-book-container solid-container" src="/riznica.pdf">

    </div>
  </div>
</template>

<script>

export default {
  head() {
    return {
      script: [
        {
          src: '/jquery.min.js'
        },
        {
          src: '/html2canvas.min.js'
        },
        {
          src: '/three.min.js'
        },
        {
          src: '/pdf.min.js'
        },
        {
          src: '/3dflipbook.min.js'
        },
      ]
    }
  },
  mounted() {
    $('.solid-container').FlipBook({pdf: '/riznica.pdf'});
  }
}
</script>

<style>
.flip-book-container{
  height: 722px;

}
</style>