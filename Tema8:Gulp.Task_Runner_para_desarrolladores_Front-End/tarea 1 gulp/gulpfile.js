const {src,dest}= require("gulp");

//Tarea inicio
function inicio(cb){
    console.log("Generando proyecto CV");
    cb();
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

 exports.inicio = inicio;
 exports.final = final;
 exports.default = pipeline;