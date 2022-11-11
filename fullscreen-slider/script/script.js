var $contenidoGeneral = document.querySelector(".contenido-general");
var $contenidoEmArray = [].slice.call(document.querySelectorAll(".componente"));
var $botonesDeCerrar = [].slice.call(
  document.querySelectorAll(".componente-boton-cerrar")
);

setTimeout(function () {
  $contenidoGeneral.classList.remove("js-contenido-general");
}, 200);

$contenidoEmArray.forEach(function ($componente) {
  $componente.addEventListener("click", function () {
    if (this.classList.contains("caja-contenido-ativo")) return;
    $contenidoGeneral.classList.add("caja--componente-ativo");
    this.classList.add("caja-contenido-ativo");
  });
});

$botonesDeCerrar.forEach(function ($btn) {
  $btn.addEventListener("click", function (e) {
    e.stopPropagation();
    $contenidoGeneral.classList.remove("caja--componente-ativo");
    document
      .querySelector(".componente.caja-contenido-ativo")
      .classList.remove("caja-contenido-ativo");
  });
});
