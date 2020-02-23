var algos = document.getElementsByClassName("algorithmButton");

for (var i = 0; i < algos.length; i++) {
  algos[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("highlight");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" highlight", "");
    }
    this.className += " highlight";
  });
}

function swap(el1, el2) {
    return new Promise(resolve => {
      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);
  
      const transform1 = style1.getPropertyValue("transform");
      const transform2 = style2.getPropertyValue("transform");
  
      el1.style.transform = transform2;
      el2.style.transform = transform1;
  
      var clonedElement1 = el1.cloneNode(true);
      var clonedElement2 = el2.cloneNode(true);
  
      window.requestAnimationFrame(function() {
        setTimeout(() => {
          el1.replaceWith(clonedElement2);
          el2.replaceWith(clonedElement1);
          resolve();
        }, 5);
      });
    });
  }
  
  async function bubbleSort(delay) {
    let blocks = document.querySelectorAll(".block");
    
    // disable menu
    document.getElementById("changeSize").disabled = true;
    for (var i = 0; i < algos.length; i++) {
      algos[i].className += " disableClick";
    }

    // reset results section
    document.getElementById("result").innerHTML = '';
    let result = document.getElementById("result");
      let res = document.createElement('h3');

      // check array is sorted or not
    var arr = [];
    for(i=0;i<blocks.length;i++){
      arr.push(Number(blocks[i].childNodes[0].innerHTML));
    }
    const isSorted = arr.slice(1).every((item, i) => arr[i] <= item);
    
    
    if(isSorted){ 

      res.innerHTML = 'Array is already Sorted!!';
      result.appendChild(res);
      
      // enable menu
      for (var k = 0; k < algos.length; k++) {
        algos[k].className = algos[k].className.replace("disableClick","");
      }
      var current = document.getElementsByClassName("highlight");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" highlight", "");
      }
      document.getElementById("changeSize").disabled = false;
    
    } else { 
      res.innerHTML = 'Bubble Sorting Started...';
      result.appendChild(res);
      
      var start = performance.now();
      
      for (let i = 0; i < blocks.length - 1; i += 1) {
        for (let j = 0; j < blocks.length - i - 1; j += 1) {
          blocks[j].style.backgroundColor = "#FF4949";
          blocks[j + 1].style.backgroundColor = "#FF4949";
    
          await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, delay)
          );
    
          const value1 = Number(blocks[j].childNodes[0].innerHTML);
          const value2 = Number(blocks[j + 1].childNodes[0].innerHTML);
    
          if (value1 > value2) {
            await swap(blocks[j], blocks[j + 1]);
            blocks = document.querySelectorAll(".block");
          }
    
          blocks[j].style.backgroundColor = "#58B7FF";
          blocks[j + 1].style.backgroundColor = "#58B7FF";
        }
    
        blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
      }
      
      blocks[0].style.backgroundColor = "#13CE66";
      res.innerHTML = res.innerHTML + ` Sorting Complete!!`;
      var end = performance.now();
      let time = document.createElement('p');
      time.innerHTML = `Time taken: ${((end-start)/1000).toFixed(4)} Sec`;
      res.appendChild(time);

      // enable menu and remove highlight
      for (var v = 0; v < algos.length; v++) {
        algos[v].className = algos[v].className.replace("disableClick","");
      }

      current = document.getElementsByClassName("highlight");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" highlight", "");
      }
      document.getElementById("changeSize").disabled = false;
    }
  }