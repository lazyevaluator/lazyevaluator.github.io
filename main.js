const canvas = document.getElementById("canvas")
canvas.height =window.innerHeight
canvas.width = window.innerWidth

const context = canvas.getContext("2d")

context.fillStyle = "red"
context.fillRect(100, 100, 100, 100)