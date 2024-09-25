// here Producing the promise
function promiseDemo() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let data = {name : "Sarvjyoti", skills : ["Java", "Js", "Ts", "mongodb", "mysql", "react", "redux","node"]}

            if(data) {
                resolve(data);
            }else {
                reject(new Error("Rejected"));
            }

        }, 2000);

    })
}

// here consuming the promise
promiseDemo()
.then((d) => console.log(d))
.catch((err) => console.log(err))