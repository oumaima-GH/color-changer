const changeColor = document.querySelector('#change-color-btn')


changeColor.addEventListener('click', function() {
    const colorBox = document.querySelector('#color-box')

    function getRandomColor() {
        const hexCode = 'ABCDEF0123456789'
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += hexCode[Math.floor(Math.random() * 16)]
        }
        return color
    }

    colorBox.style.background = getRandomColor()
})

