import {  } from '@testing-library/react';

describe('ejercicios testing', () => {
    test('conversión implicita de true es 1', () => {
        const conversion = +true
        expect(conversion).toBe(1)
    });

    it('comparar objetos', () => {
        const person = { Name: "Didier" };
        person.Apellido = "Martinez";

        expect(person).toEqual({Name: "Didier", Apellido: "Martinez"})
    });

    it("array", () => {
        const arr = [1,2,3];
        arr.push(4);

        expect(arr).toEqual([1,2,3,4])
    });

    it("not", () => {
        expect(true).not.toBe(false); 
    });

    test("", () =>{

    })
})

const asyncCalback = ( fn ) => {
    setTimeout( () => fn(false), 20 )

}

const promise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve(true) }, 20)
})

describe('async', () => {

    it("callback", (done) => {
        asyncCalback( (x) => {
            expect(x).toBe(false);
            done()
        })
    });

    test("promise", () => {
        return promise().then(x => expect(x).not.toBe(false) )
    });

    test("async await", async () => {
        const result = await promise();
        expect(result).toBe(true);
    });



});