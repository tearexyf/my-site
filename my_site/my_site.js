const btns=document.querySelectorAll('.btn')
const photosets=document.querySelectorAll('.gallery__photoset')

btns.forEach(btn =>{
    btn.addEventListener('click',()=>{
        const btnId=btn.getAttribute('data-btn')
        photosets.forEach(photoset=>{
            photoset.classList.remove('active')
        })
        document.getElementById(btnId).classList.add('active')
    })
})
document.getElementById('home-link').addEventListener('click', ()=>{
    document.querySelectorAll('.gallery__photoset').forEach(photoset=>{
        photoset.classList.remove('active')
    })
})