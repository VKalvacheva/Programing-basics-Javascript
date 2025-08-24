function solve (input) {

    let mousala = 0; 
    let montblanc = 0; 
    let kilimanjaro = 0; 
    let k2 = 0; 
    let everest = 0; 
    let total = 0; 

    for (let i = 1; i < input.length; i++) {
        let count = Number(input[i]); 
        total += count;
        
        if (count <= 5) {
            mousala += count
        } else if (count <= 12) {
            montblanc += count;
        } else if (count <= 25) {
            kilimanjaro += count;
        } else if (count <= 40) {
            k2 += count; 
        } else {
            everest += count
        }
    } 

    console.log(`${((mousala/total) * 100).toFixed(2)}%`)
    console.log(`${((montblanc/total) * 100).toFixed(2)}%`)
    console.log(`${((kilimanjaro/total) * 100).toFixed(2)}%`)
    console.log(`${((k2/total) * 100).toFixed(2)}%`)
    console.log(`${((everest/total) * 100).toFixed(2)}%`)
}