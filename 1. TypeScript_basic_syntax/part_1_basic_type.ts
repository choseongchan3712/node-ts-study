// ? 타입스크립트에서는 변수의 타입을 명시적으로 지정할 수 있음.

//  변수 선언
let num: number = 10;
let str: string = "Hello, TypeScript!";
let isActive: boolean = true;

// 배열
let number: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

//튜플
let tuple: [number, string] = [1, "TypeScript"];

// any
let anything: any = 42;
anything = "Hello"; //허용됨
