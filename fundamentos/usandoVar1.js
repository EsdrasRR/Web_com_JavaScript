{ 
    { 
        { 
            { 
                // var estará visivel fora do bloco, fora deste escopo
                var sera = 'Será ??' 
                console.log(sera)
            } 
        } 
    } 
} 

console.log(sera)

// Quando é função o var só estará visível dentro do escopo da função
function teste() {
    var local = 123
    console.log(local)
}

teste()

console.log(local)