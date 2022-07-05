const p = new Promise((resolve, reject) => {
    const circle = document.querySelector('.circle')
    const cancelZone = document.querySelector('.content__wrapper')
    cancelZone.addEventListener('click', () => {
        reject('rejected')
    })


    circle.addEventListener('click', () => {
        setTimeout(() => {
            resolve('promise successful')
        }, 3000);
    },{once: true})
})

p.then(
    resolved => {
        alert( resolved )
    },
    error => {
        alert( error )
    }
)
































/*
const circle = document.querySelector('.circle')





circle.addEventListener('click', function () {


    const p = new Promise(function (resolve, reject) {

        setTimeout(resolve, 3000);






    })

        .then(
            () => {
                alert('Promise successful');
            },
        )
        .catch(
            () => {
                alert('promise stopped');
            }
        )


    console.log(p)


}, {once: true});

*/


/*
document.addEventListener('click', function (){

    const p = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000)
        document.addEventListener('click', reject)

    }).then(()=>{
        console.log('2sec passed')
    }).catch(()=>{
        console.log('error')
    })
})
*/
