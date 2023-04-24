var express = require('express');
const { check } = require('express-validator');
const mainController = require('../controllers/mainController');
var router = express.Router();
const _ = require('lodash');
const esPrimo = require('../public/javascripts/validacion');
const relativosPrimos = require('../public/javascripts/primeRelative');

const validations = [
    check('x')
            .notEmpty().withMessage('Debes Completar este campo').bail()
            .isNumeric().withMessage('Debe ser un numero').bail()
            .custom((value, { req })=>{
                let field = parseInt(req.body.x);
                if(!esPrimo(field)){
                    throw new Error('El numero debe ser primo');
                }
                return true;
            }).bail()
            .custom((value, { req })=>{
                let field = parseInt(req.body.x);
                if(field <= 0){
                    throw new Error('El numero debe ser POSITIVO');
                }
                return true;
            }),
    check('a')
            .notEmpty().withMessage('Debes Completar este campo').bail()
            .isNumeric().withMessage('Debe ser un numero').bail()
            .custom((value, { req })=>{
                let field = parseInt(req.body.a);

                if(!esPrimo(field)){
                    throw new Error('El numero debe ser primo');
                }

                return true;
            }).bail()
            .custom((value, { req })=>{
                let field = parseInt(req.body.a);

                if(field <= 0){
                    throw new Error('El numero debe ser POSITIVO');
                }

                return true;
            }),
    check('c')
            .notEmpty().withMessage('Debes Completar este campo').bail()
            .isNumeric().withMessage('Debe ser un numero').bail()
            .custom((value, { req })=>{
                let field = parseInt(req.body.c);
                if(field <= 0){
                    throw new Error('El numero debe ser POSITIVO');
                }

                return true;
            }).bail()
            .custom((value, { req })=>{
                let field = parseInt(req.body.c);
                if(!esPrimo(field)){
                    throw new Error('El numero debe ser primo');
                }

                return true;
            }),
    check('m')
            .notEmpty().withMessage('Debes Completar este campo').bail()
            .isNumeric().withMessage('Debe ser un numero').bail()
            .custom((value, { req })=>{
                let field = {
                    x: parseInt(req.body.x),
                    a: parseInt(req.body.a),
                    c: parseInt(req.body.c),
                    m: parseInt(req.body.m),
                };
                if(!esPrimo(field.x)){
                    throw new Error('El numero debe ser primo');
                }

                return true;
            })
            .custom((value, { req })=>{
                let field = {
                    x: parseInt(req.body.x),
                    a: parseInt(req.body.a),
                    c: parseInt(req.body.c),
                    m: parseInt(req.body.m),
                };

                if (field.m < field.x) {
                    throw new Error('El numero debe ser mayor que el campo X');
                }

                return true;
            }).bail()
            .custom((value, { req })=>{
                let field = {
                    x: parseInt(req.body.x),
                    a: parseInt(req.body.a),
                    c: parseInt(req.body.c),
                    m: parseInt(req.body.m),
                };
                
                if (field.m < field.a) {
                    throw new Error('El numero debe ser mayor que el campo a');
                }

                return true;
            }).bail()
            .custom((value, { req })=>{
                let field = {
                    x: parseInt(req.body.x),
                    a: parseInt(req.body.a),
                    c: parseInt(req.body.c),
                    m: parseInt(req.body.m),
                };
                if (field.m < field.x) {
                    throw new Error('El numero debe ser mayor que el campo c');
                }

                return true;
            })
]

const validations2 = [
    check('x')
        .isNumeric().withMessage('Debes ingresar un numero').bail()
        .custom((value, { req })=>{
            let field =  parseInt(req.body.x);
            if (field <=0) {
                throw new Error('Debes ingrese un numero POSITIVO');
            }
            return true;
        }).bail()
        .custom((value, { req })=>{
            let fieldX = parseInt(req.body.x),
                fieldM = parseInt(req.body.m);
            if (!relativosPrimos(fieldX, fieldM)) {
                throw new Error('La semilla debe ser relativo primo de m');
            }
            return true;
        }),
    check('a')
        .isNumeric().withMessage('Debes ingresar un numero').bail()
        .custom((value, { req })=>{
            let field = parseInt(req.body.a);
            if (field <=0) {
                throw new Error('Debes ingrese un numero POSITIVO');
            }
            return true;
        }).bail()
        .custom((value, { req })=>{
            let field = parseInt(req.body.a);
            let p = [3, 11, 13, 19, 21, 27, 29, 37, 53, 59, 61, 67, 67, 69, 77, 83, 91];
            let t = Math.random(),
                i = (200*t);
            for (const po of p) {
                if ((field == (i+p)) || (field== (i-p))) {
                    throw new Error('El numero no cumple con las condiciones');
                    break;
                }
            }
            return true;
        }),
    check('m')
        .isNumeric().withMessage('Debes ingresar un numero').bail()
        .custom((value, { req })=>{
            let field = parseInt(req.body.m);
            if (field <=0) {
                throw new Error('Debes ingrese un numero POSITIVO');
            }
            return true;
        }),
]

const validations3 =[
    check('x')
        .isNumeric().withMessage('Debes Ingresar un numero').bail()
        .custom((value, { req })=>{
            let field = req.body.x;
            if (field.length < 4 || field.length > 4){
                throw new Error('El numero Debe ser de 4 digitos');
            }
            return true;
        })
];

/* GET home page. */
router.get('/', mainController.index);
router.get('/method1', mainController.method1);
router.post('/method1/', validations, mainController.method1);
router.get('/method2', mainController.method2);
router.post('/method2/', validations2, mainController.method2);
router.get('/method3', mainController.method3);
router.post('/method3/', validations3, mainController.method3);
router.get('/method4', mainController.method4);
router.post('/method4/', validations3, mainController.method4);
router.get('/method5', mainController.method5);
router.post('/method5/', validations3, mainController.method5);

module.exports = router;
