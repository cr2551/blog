const compareDeps = (oldDep, newDep) => 
    oldDep.length === newDep.length && oldDep.every((dep, i) => dep === newDep[i]);

console.log([1] === [1]);

console.log(compareDeps(['he'], ['he']));

console.log(compareDeps([1], [1]));



