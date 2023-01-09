let cabecalho = `<!-- Google tag (gtag.js) -->
<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-VL3HNPB829"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VL3HNPB829');
</script> -->`
let head = document.querySelector('head')
head.innerHTML = cabecalho