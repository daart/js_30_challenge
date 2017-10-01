let checkedItems = {};
let lastActiveMap = {};
let checkedStack = [];
let lastIn = null;

const items = document.querySelectorAll('.item');

let isEmptyObj = obj => {
  for (let key in obj) return false;
  return true;
}

function onCheckboxClickHandler (e, item, index, arr) {
  if(!e.target.type && e.target.type !== 'checkbox') {
    item.children[0].checked = !item.children[0].checked;
  }

  if(e.shiftKey) {
    var lastChecked = checkedStack[checkedStack.length - 1];
    var lastCheckedIndex = Array.from(arr).indexOf(lastChecked);
    let start;
    let end;
    const toArray = Array.from(arr);

    if(index < lastCheckedIndex) {
      start = index;
      end = lastCheckedIndex;
    } else {
      start = lastCheckedIndex;
      end = index;
    }

    toArray.forEach((el, idx) => {
      if(idx > start && idx < end) {
        if(!e.target.type && e.target.type !== 'checkbox') {
          el.children[0].checked = !el.children[0].checked
        }
      }
    });
    
  } else {
    if(item.children[0].checked) {
      checkedStack.push(item);
    } else {
      checkedStack.splice(checkedStack.indexOf(item), 1);
    }
  }

  lastIn = checkedStack[checkedStack.length - 1];
  console.log(checkedStack);
}

let onSecondCheckboxClick = (e) => {
  console.log('2nd press: ', e.target);
}

items.forEach((item, index, arr) => {
  item.addEventListener('click', (e) => onCheckboxClickHandler.apply(this, [e, item, index, arr]));
});

let onKeypressHandler = (e) => {
  // console.log(e);

  if(e.keyCode !== 16 ) {
    return;
  } else {
    if(checkedItems.length) {
      items.forEach(item => {
        item.addEventListener('click', onCheckboxClickHandler)
      });
      // var res = Array.from(items).map(item => item === lastActive);
      // console.log(res);
    }
  }

}

document.addEventListener('keydown', onKeypressHandler)

