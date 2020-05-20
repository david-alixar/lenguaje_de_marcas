const {src,dest}= require("gulp");
const sassdoc = require("sassdoc");

//Generar documentación con Sassdoc
function generar_docs(){
    return src("./scss/main.scss")
    .pipe(sassdoc(doc_options));
 }
 
//Tarea final
function final(cb){
    console.log("Proyecto CV generado");
    cb();
 }

 //pipeline
 function pipeline() {
    return src("cv.*").pipe(dest("dist/"));
 }

 exports.generar_docs = generar_docs;
 exports.final = final;
 exports.default = pipeline;