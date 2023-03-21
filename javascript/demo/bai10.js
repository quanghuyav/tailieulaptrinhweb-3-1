// function getData(name,callback){
//     var time = 1000+1000*Math.random()
//     callback(name,time)
    
// }

// getData('data1', ()=> setTimeout(()=>console.log("Đây là thông tin của "+ name+" trong khoảng "+time ),time))



// // console.log(1)
// // setTimeout(()=>console.log(2),1)
// // console.log(3)

// // // Đồng bộ: 1 > 2
// // // JS là ngôn ngữ bất đồng bộ: 2 > 1
// // // những hàm mà mất thời gian chờ thì sẽ xử lí bất đồng bộ: setTimeout, setinterval, fetch, đọc file...
// // // JS: đơn luồng log1, settimeoutlog2, log3
// // // JS: eventloop: log2

// function getData(name){
//     ///////////////////
//     ///////////////////
//     var time = 1000+Math.random()*1000 // 1000-2000 ms
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             resolve([name,time])
//             reject("thất bại")
//         },time)
//     })
// }

// // // //callback >> xử lí bất đồng bộ

// getData("facebook.com").then(function(data){
//     console.log("đã thực hiện xong việc lấy data từ "+ data[0] +" trong khoảng "+data[1])
//     return getData('www.google.com')
// }).then(function(data){
//     console.log("đã thực hiện xong việc lấy data từ "+ data[0] +" trong khoảng "+data[1])
//     return getData("youtbe")
// }).then(function(data){
//     console.log("đã thực hiện xong việc lấy data từ "+ data[0] +" trong khoảng "+data[1])
// }).catch(function(err){
//     console.log(err)
// })



// // getData("www.facebook.com").then((data) => console.log(data.name,data.time))
// // getData("www.facebook.com", (x,y) =>{
// //     console.log("đã thực hiện xong việc lấy data từ "+ x +" trong khoảng "+y)
// //     getData('Google',(x,y)=>{
// //         console.log("đã thực hiện xong việc lấy data từ "+ x +" trong khoảng "+y)
// //         getData('youtube',(x,y)=>{
// //             console.log("đã thực hiện xong việc lấy data từ "+ x +" trong khoảng "+y)
            
// //         })
// //     })
   
// // })



// // Chưa có callback: nhập link >> cái hàm xử lí hết >> trả về kq
// // Callback: nhập link, nhâpp callback: hàm xử lí công việc > ra kết quả + callback >> trả về cái gì
// // ES5: callback
// // ES6: promise, chaining promise


// // var myPromise = new Promise((resolve, reject) => {
// //     // isSuccess = !!Math.round(Math.random()*10)%2
// //     // if(isSuccess) resolve([1,2,3,4,5])
// //     // else reject("thất bại")
// //     resolve({name: "huy", age: 24})
// // })

// // myPromise.then().catch(function(err){
// //     console.log(err)
// // }) 











// const promiseDemo = function() {
//     return new Promise((resolve, reject)=>{
//         resolve('thành công')
//     })
// // }
// // promiseDemo().then(data => console.log(data))


//  async function getData(name){
//     let data
//     try{
//     data = await fetch(name).then(function(res){
//         return res.json()
//     })
//     }
//     catch {

//     }
//     return data
//  }

// // getData("https://randomfox.ca/floof")
// // getData("https://randomfox.ca/floof")




// //  function getData1(name){
// //     res = await fetch(name)
// //     console.log( await res.json())

// // }
// console.log( getData("https://randomfox.ca/floof"))
// // getData("https://randomfox.ca/floof")
