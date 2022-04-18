import test from "ava";
import { User, Product } from "./index";


test("Testeo la clase User", (t) => {
    const usuarioPrueba = new User("pepito los palotes");
    t.is(usuarioPrueba.name, "pepito los palotes");
    if (true) {
        console.log("EL TESTEO DE USER ES CORRECTO")
    }
    const productoDePepe = new Product("campera", 5000);
    usuarioPrueba.addProduct(productoDePepe)
    console.log(usuarioPrueba.products)

    t.is(usuarioPrueba.name, "pepito los palotes");
    t.is(usuarioPrueba.products[0].name, "campera");
    t.is(usuarioPrueba.products[0].price,5000)
});

test("Testeo la clase Product y sus métodos", (t) => {
    const productoPrueba = new Product("papitas", 50);
    //t.is(productoPrueba.name, "caramelo");
    t.is(productoPrueba.price, 50);
    
});
