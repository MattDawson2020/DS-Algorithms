const nemo = ["nemo"];
const large = new Array(100000).fill("nemo");
function findNemo(array) {
  let t0 = performance.now();
  for(i=0; i < large.length; i++){
    if (large[i] == 'nemo'){
      console.log('Found NEMO!');
      break // Rule 1: even with this break it is still O(N) because in the worst case nemo is at end or missing
    };
  };
  let t1 = performance.now();
  console.log("call for nemo took " + (t1-t0) + "ms")
};

findNemo(nemo);//4.1 ms
findNemo(large);// 15707 ms
// shows that the time increases as length of array goes, but linearly
