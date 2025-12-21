const COLORS = {
  COMPARING: '#FF6B6B',
  SWAPPING: '#4ECDC4',
  SORTED: '#13CE66',
  DEFAULT: '#6C5CE7'
};

const ANIMATION_DURATION = 250; // ms

async function swap(el1, el2) {
  const duration = ANIMATION_DURATION / (sortSpeedValue * sortSpeedValue);
  
  //replaced previous logic of swapping with transform for better performance
  const rect1 = el1.getBoundingClientRect();
  const rect2 = el2.getBoundingClientRect();
  const distance = rect2.left - rect1.left;
  
  el1.style.transform = `translateX(${distance}px)`;
  el2.style.transform = `translateX(${-distance}px)`;
  
  await delayAnimation(duration);
  
  const parent = el1.parentNode;
  const next1 = el1.nextSibling === el2 ? el1 : el1.nextSibling;
  const next2 = el2.nextSibling;
  
  parent.insertBefore(el2, next1);
  parent.insertBefore(el1, next2);
  
  el1.style.transform = '';
  el2.style.transform = '';
}

// Disables interactive elements during sorting
function disableMenu() {
  const elements = [
    document.getElementById("changeSize"),
    document.getElementById("genBlocks"),
    ...document.querySelectorAll('.algo-button') // More semantic selector
  ];
  
  elements.forEach(el => {
    if (el) {
      el.disabled = true;
      el.classList.add("disableClick");
    }
  });
}

// Re-enables interactive elements after sorting
function enableMenu() {
  const elements = [
    document.getElementById("changeSize"),
    document.getElementById("genBlocks"),
    ...document.querySelectorAll('.algo-button')
  ];
  
  elements.forEach(el => {
    if (el) {
      el.disabled = false;
      el.classList.remove("disableClick");
    }
  });
  
  // Remove highlight from currently selected algorithm
  document.querySelector(".highlight")?.classList.remove("highlight");
}

function isSorted(arr) {
  return arr.every((val, i, array) => i === 0 || array[i - 1] <= val);
}

function getValue(block) {
  return parseInt(block.getAttribute('block-value'), 10);
}

function highlightBlocks(block1, block2, color) {
  block1.style.backgroundColor = color;
  block2.style.backgroundColor = color;
}

function resetBlockColors(...blocks) {
  blocks.forEach(block => {
    block.style.backgroundColor = COLORS.DEFAULT;
  });
}

function delayAnimation(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

async function highlightSortedBlocks(blocks, animate = true) {
  if (animate) {
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].style.backgroundColor = COLORS.SORTED;
      await delayAnimation(20); // Quick cascade effect
    }
  } else {
    blocks.forEach(block => {
      block.style.backgroundColor = COLORS.SORTED;
    });
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getAllBlocks() {
  return Array.from(document.querySelectorAll('.block'));
}
