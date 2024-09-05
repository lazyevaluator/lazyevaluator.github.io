const canvas = document.getElementById("canvas")
canvas.height =window.innerHeight
canvas.width = window.innerWidth

const context = canvas.getContext("2d")

let prevX = null
let prevY = null


context.lineWidth = 4

let draw = false

window.addEventListener("mousedown", (e) => draw = true)
window.addEventListener("touchstart", (e) => draw = true)

window.addEventListener("mouseup", (e) => draw = false)
window.addEventListener("touchend", (e) => draw = false)

window.addEventListener("mousemove", (e) => {

    if (prevX == null || prevY == null || !draw){
        prevX = e.clientX
        prevY = e.clientY
        return
    }

    let currentX = e.clientX
    let currentY = e.clientY

    context.beginPath()
    context.moveTo(prevX, prevY)
    context.lineTo(currentX, currentY)
    context.stroke()

    prevX = currentX
    prevY = currentY
})

// this could for sure be made less redundant with some more js, but i am 
// absolutely clueless with js and i don't want to spend too much time 
window.addEventListener("touchmove", (e) => {

    if (prevX == null || prevY == null || !draw){
        prevX = e.clientX
        prevY = e.clientY
        return
    }

    let currentX = e.clientX
    let currentY = e.clientY

    context.beginPath()
    context.moveTo(prevX, prevY)
    context.lineTo(currentX, currentY)
    context.stroke()

    prevX = currentX
    prevY = currentY
})
