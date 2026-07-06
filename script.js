const nodes = document.querySelectorAll('.node:not(.center)');

nodes.forEach((node,index)=>{

    node.animate(
        [
            {transform:'translateY(0px)'},
            {transform:'translateY(-15px)'},
            {transform:'translateY(0px)'}
        ],
        {
            duration:4000 + (index * 500),
            iterations:Infinity
        }
    );

});