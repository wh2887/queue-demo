let screen = document.querySelector("#screen");
let createNumber = document.querySelector("#createNumber");
let callNumber = document.querySelector("#callNumber");
let newNumber = document.querySelector("#newNumber");
let spanQueue = document.querySelector("#queue");

let n = 0;
let queue = [];
createNumber.onclick = () => {
  n += 1;
  queue.push.call(queue, n);
  newNumber.innerHTML = queue;
};

callNumber.onclick = () => {
  if (queue.length === 0) {
    return alert("所有号码都已取餐，无需叫号");
  }
  const m = queue.shift.call(queue);
  screen.innerHTML = `请${m}号来宾到前台取餐！`;
  spanQueue.innerHTML = queue;
};
