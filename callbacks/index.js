main();

function main() {
    fnUm(() => {
        console.log('dois');
    });
}

function fnUm(fn) {
    console.log('um');
    fn();
}

function fnDois() {
    console.log('dois');
}