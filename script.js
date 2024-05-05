let listArr = [
    {
        id : 1,
        name: "yeasin",
        roll : "01",
        result: "pass"
    },
    {
        id : 2,
        name: "mehedi",
        roll : "02",
        result: "pass"
    },
    {
        id : 3,
        name: "sakib",
        roll : "03",
        result: "pass"
    },
    {
        id : 4,
        name: "sagor",
        roll : "04",
        result: "pass"
    },
    {
        id : 5,
        name: "rakib",
        roll : "05",
        result: "pass"
    },
    {
        id : 6,
        name: "siam",
        roll : "06",
        result: "pass"
    },
    {
        id : 7,
        name: "rohim",
        roll : "07",
        result: "pass"
    },
]

function searchList ( listArr , target){
            let b = 0;
            let e = listArr.length
           while( b < e){
            if( listArr[b].id !== target){
                b = b + 1
            }else if(listArr[b].id === target){
                return listArr[b]
            }else{
                return "faka"
            }
        }

           return "You are a fail"
}
let input = document.querySelector(".input")
let text = document.querySelector(".result")
let text2 = document.querySelector(".result2")
let text3 = document.querySelector(".result3")
let btn = document.querySelector(".btn")
let targetNum = input.value;
let target = Number(targetNum)
let result = searchList(listArr,target)
btn.addEventListener("click", ()=>{
    text.innerHTML ="Name is : " + result.name
    text2.innerHTML ="Your Roll is : " + result.roll
    text3.innerHTML ="You are : "  + result.result
    input.value = " "
})
