function sum(a: number, b: number): string {
    return (a + b).toString()
}

let addition: (a: number, b: number) => string = sum

let s: string = "Result, " + addition(13, 2)

// console.log(s);



function process_() {
    console.log('Start process: Download Sting - Shape of my heart.mp3 | 5.21Mb')
    console.log('1%')
    console.log('15%')
    console.log('17%')
    console.log('18%')
    return "result"
    console.log('22%')
    console.log('22%')
    console.log('22%')
    return
}

let res: string | undefined = process_()

if(typeof res == "string") {
    console.log(res[0]);
}
else {
    console.log(res);
}