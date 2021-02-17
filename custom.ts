
/**
 * Bruk denne fila for å definere egne funksjoner og blokker.
 * Les mer i https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Egne blokker
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: beskriv funksjonen din her
     * @param n skildre parameteret her, eg: 5
     * @param s skildre parameteret her, eg: "Hello"
     * @param e skildre parameteret her
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: beskriv funksjonen din her
     * @param value beskriv verdi her, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
