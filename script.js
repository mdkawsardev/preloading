// window.addEventListener('load', function() {
//     document.getElementById('preloader').classList.add('hidden');
//     document.getElementById('content').classList.remove('hidden');
// });

// window.addEventListener('load', () => {
//     const myPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('hello')
//             resolve (

//     document.querySelector('.loader').classList.add('fadeOut')

//             )
//         }, 1500);
//     })
// }
// (async function(){
//     await myPromise();
//     document.getElementById('preloader').classList.add('hidden')
//     document.getElementById('content').classList.remove('hidden');
// }())
// })

const myPromise = (evt) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(evt);
        }, 1000);
    });
};

(async function () {
    try {
        await myPromise();
        await myPromise(
            document.querySelector(".loader").classList.add("fadeOut")
        );
        myPromise(
            document.getElementById("preloader").classList.add("hidden"),
            document.getElementById("content").classList.remove("hidden")
        )
    } catch (error) {
        console.log(error)
    }
}())

// myPromise().then(() => {
//     myPromise(document.querySelector(".loader").classList.add("fadeOut")).then(
//         () => {
//             myPromise(
//                 document.getElementById("preloader").classList.add("hidden"),
//                 document.getElementById("content").classList.remove("hidden")
//             );
//         }
//     );
// });
