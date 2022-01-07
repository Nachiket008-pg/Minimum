const smallestAll = (...numbers) => {
    var smallest=numbers[0] 
    for(let j = 1; j < numbers.length; j++) {
        if(numbers[j]<smallest){
            smallest=numbers[j]
        }
    }
    return smallest;
    
}

function ans(){
    let arr = document.getElementById('input').value

    let spt = arr.split(",")

    console.log(spt)

    let sml = smallestAll.apply(spt)

    let ot = document.getElementById('output')

    let result = document.createElement('p')

    ot.appendChild(result)

    result.innerHTML = sml

    console.log(result)

    }