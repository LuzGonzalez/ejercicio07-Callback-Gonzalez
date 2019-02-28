var saludar = function (nombre, callback){
    var saludo = "Hola " + nombre;
    callback(saludo);    
};

var getSaludo = function(saludo){
    console.log(saludo);
};

saludar("luz", getSaludo);