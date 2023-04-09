export default function scrollPage (id: string){
    let element = document.getElementById('7899')

    console.log(element?.getBoundingClientRect())

    window.scroll({
        left: 0,
        top: element?.getBoundingClientRect().top,
        behavior: 'smooth'
    })

}