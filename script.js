const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const count = document.querySelector(".count");
const changeBy=document.querySelector(".changeBy");
const reset=document.querySelector(".reset-btn");


minusBtn.addEventListener("click", (e) => {
  const countValue = parseInt(count.innerText);
  const val=parseInt(changeBy.value);
  count.innerText = countValue - val;
});

plusBtn.addEventListener("click", (e) => {
  const countValue = parseInt(count.innerText);
  const val=parseInt(changeBy.value);
  count.innerText = countValue + val;
});

reset.addEventListener("click",()=>{
    count.innerText=0;
})
