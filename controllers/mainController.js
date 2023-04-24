const { validationResult } = require('express-validator');
const numerosMedios = require('../public/javascripts/middleNumber');

const mainController = {
    index: (req, res)=>{
        res.render('index');
        
    },
    method1:(req, res)=>{
        let errors = validationResult(req);
        let variable = {
            x: parseInt(req.body.x),
            a: parseInt(req.body.a),
            c: parseInt(req.body.c),
            m: parseInt(req.body.m),
        }
        let table = req.body.x ? true: false
        let numeros = [];
        let constA = variable.a,
            constC = variable.c,
            constM = variable.m;
        let auxX = variable.x;
        let a, x, intervalo;

        for (let i = 1; i <variable.m; i++) {
            a = constA*auxX+constC;
            x = a%constM;
            intervalo = x/constM;
            numeros.push({id: i, a: a, x: x, i: intervalo});
            auxX = x;
        }

        if(req.body.valid == undefined){
            if (table){
                res.render('metodo1Form' , {variable: variable, numeros: numeros});
            }else{
                res.render('metodo1Form');
            }
        }else{
            if (errors.isEmpty()) {
                res.render('metodo1Form' , {variable: variable, numeros: numeros});
            }
            res.render('metodo1Form', {errors: errors.mapped(), oldData: req.body});
        }

    },
    method2:(req, res)=>{
        let errors = validationResult(req);
        let variable = {
            x: parseInt(req.body.x),
            a: parseInt(req.body.a),
            m: parseInt(req.body.m),
        }
        let table = req.body.x ? true : false
        let numeros = [];
        let constA = variable.a,
            constM = variable.m;
        let auxX = variable.x;
        let a, x, intervalo;

        for (let i = 1; i <variable.m; i++) {
            a = constA*auxX;
            x = a%constM;
            intervalo = x/constM;
            numeros.push({id: i, a: a, x: x, i: intervalo});
            auxX = x;
        }

        

        if(req.body.valid == undefined){
            if (table){
                res.render('metodo2Form' , {variable: variable, numeros: numeros});
            }else{
                res.render('metodo2Form');
            }
        }else{
            if (errors.isEmpty()) {
                res.render('metodo2Form' , {variable: variable, numeros: numeros});
            }
            res.render('metodo2Form', {errors: errors.mapped(), oldData: req.body});
        }

    },
    method3: (req, res)=>{
        let errors = validationResult(req);
        let variable = {
            x: parseInt(req.body.x),
            r: parseInt(req.body.r)
        }
        let table = req.body.x ? true : false
        let numeros = [];
        let auxX = variable.x;
        let cuadrado,
            numeroMedio;

        for (let i = 1; i <= variable.r; i++) {
            cuadrado = auxX * auxX;
            numeroMedio = numerosMedios(cuadrado);
            auxX = numeroMedio;
            numeros.push({id: i, x: numeroMedio, x2: cuadrado, i: (numeroMedio/10000)});
        }

        if(req.body.valid == undefined){
            if (table){
                res.render('metodo3Form' , {variable: variable, numeros: numeros});
            }else{
                res.render('metodo3Form');
            }
        }else{
            if (errors.isEmpty()) {
                res.render('metodo3Form' , {variable: variable, numeros: numeros});
            }
            res.render('metodo3Form', {errors: errors.mapped(), oldData: req.body});
        }

    },
    method4: (req, res)=>{
        let errors = validationResult(req);
        let variable = {
            x: parseInt(req.body.x),
            x2: parseInt(req.body.x2),
            r: parseInt(req.body.r)
        }
        let table = req.body.x ? true : false
        let numeros = [];
        let auxX = variable.x,
            auxX2 = variable.x2;
        let producto,
            numeroMedio;

        for (let i = 1; i <= variable.r; i++) {
            producto = auxX * auxX2;
            numeroMedio = numerosMedios(producto);
            numeros.push({id: i, x: auxX, x2: auxX2, x3:producto, i: (numeroMedio/10000)});
            auxX = auxX2;
            auxX2 = numeroMedio;
        }

        if(req.body.valid == undefined){
            if (table){
                res.render('metodo4Form' , {variable: variable, numeros: numeros});
            }else{
                res.render('metodo4Form');
            }
        }else{
            if (errors.isEmpty()) {
                res.render('metodo4Form' , {variable: variable, numeros: numeros});
            }
            res.render('metodo4Form', {errors: errors.mapped(), oldData: req.body});
        }

    },
    method5: (req, res)=>{
        let errors = validationResult(req);
        let variable = {
            x: parseInt(req.body.x),
            x2: parseInt(req.body.x2),
            r: parseInt(req.body.r)
        }
        let table = req.body.x ? true : false
        let numeros = [];
        let auxX = variable.x,
            auxX2 = variable.x2;
        let producto,
            numeroMedio;

        for (let i = 1; i <= variable.r; i++) {
            producto = auxX * auxX2;
            numeroMedio = numerosMedios(producto);
            numeros.push({id: i, x: auxX, x2: auxX2, x3:producto, i: (numeroMedio/10000)});
            auxX2 = numeroMedio;
        }

        if(req.body.valid == undefined){
            if (table){
                res.render('metodo5Form' , {variable: variable, numeros: numeros});
            }else{
                res.render('metodo5Form');
            }
        }else{
            if (errors.isEmpty()) {
                res.render('metodo5Form' , {variable: variable, numeros: numeros});
            }
            res.render('metodo5Form', {errors: errors.mapped(), oldData: req.body});
        }

    },

    
}

module.exports = mainController;