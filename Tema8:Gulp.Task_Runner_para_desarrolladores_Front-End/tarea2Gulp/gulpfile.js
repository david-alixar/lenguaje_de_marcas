const {src, dest, series, parallel} = require('gulp');
const sass = require('gulp-dart-sass');
const rename = require('gulp-rename');
const sassdoc = require('sassdoc');


// Generar documentación con Sassdoc
function generar_documentacion(){
   var doc_options = {
      dest : "./docs",
      verbose: true
  }
    return src("./scss/*.scss")
    .pipe(sassdoc(doc_options));
 }
 
 // Generar hoja de estilos desde .scss
 function generar_css() {
   return src("scss/main.scss")
   .pipe(sass()) 
   .pipe(
      rename({
        basename: "output",
        extname: ".css"
      }))  
   .pipe(dest('css/'));
}

 // Mover las imágenes
 function mover_imagenes() {
    return src("./img/*.png").pipe(dest("dist/img/"));
 }

  // Mover documentación a dist/
  function mover_documentacion() {
   return src("./docs/**/*").pipe(dest("dist/docs/"));
}


// Mover css a dist/
function mover_css() {
   return src("./css/output.css").pipe(dest("dist/css/"));
}

// Mover html a dist/
function mover_html() {
   return src("cv.html").pipe(dest("dist/"));
}
 

 exports.generar_documentacion = generar_documentacion;
 exports.generar_css = generar_css;
 exports.mover_imagenes = mover_imagenes;
 exports.mover_documentacion = mover_documentacion;
 exports.mover_css = mover_css;
 exports.mover_html = mover_html;
 // Tarea por defecto: tres tareas en serie,tareas 1 y 3 en paralelo, y tarea 2 simple
 // Tarea 1: generar doc y css, mover img, 
 // Tarea 2: copiar la documentación generada a dist 
 // Tarea 3: mover .html y .css a dist
 exports.default = series(parallel(generar_documentacion,generar_css, mover_imagenes),
 mover_documentacion, 
 parallel(mover_html,mover_css));