const labelsAndInputs = document.querySelectorAll('.boxRelative')

labelsAndInputs.forEach(labelAndInput => {
    labelAndInput.lastElementChild.addEventListener('focus', (target)=> {
        console.log(target)
    })
});

//lastElementChild - input
//firstElementChild - label
