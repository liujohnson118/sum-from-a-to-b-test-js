let tree = {
    name: 'A',
    value: 4,
    children: [
        {
            name: 'B', value: 7,
            children: [{name: 'C', value: 9, children: []}]
        },
        {
            name: 'D', value: 11,
            children: [{name: 'E', value: 9, children: []}]
        },
        {name: 'F', value: 55, children: []},
        {
            name: 'G', value: 65,
            children: [
                {name: 'H', value: 21, children: []},
                {name: 'I', value: 33, children: []}
            ]
        }
    ]
};

function find(node, value) {
    if(node.value === value){
        console.log(`Found node ${node.name}`)
        return node;
    }else{
        for(child of node.children){
            //console.log(`Looking at node ${child}`);
            var found = find(child, value);
            if(found !== null){
                return found;
            }
        }
        return null;
    }
}


function factorial(n){
    var i = n;
    while(i !== 1){
        return i * factorial(i-1);
    }
    return 1;
}

console.log(find(tree,21));
console.log(factorial(7));