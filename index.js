console.log("Hello World")

function trackFunction(depth,maxDepth){
    console.trace('Entering depth',depth)
    if(depth<maxDepth){
        trackFunction(depth+1,maxDepth)
    }
   console.log("Exiting depth:", depth);
}

trackFunction(1,5)