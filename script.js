const grids = document.querySelectorAll('.grid')
const headings = document.querySelectorAll('.heading .wrapper .text')


function entrerScreen(index) {
    const grid = grids[index];
    const head = headings[index];
    const gridColumns = grid.querySelectorAll('.column')

    grid.classList.add('active')

    gridColumns.forEach(elemt => {
        elemt.classList.remove('animate-before', 'animate-after')
    })

    head.classList.remove('animate-before', 'animate-after')

}

function exitScreen(index, exitDelay) {
    const grid = grids[index];
    const head = headings[index];
    const gridColumns = grid.querySelectorAll('.column')

    gridColumns.forEach(elemt => {
        elemt.classList.add('animate-after')
    })
    head.classList.add('animate-after')

    setTimeout(() => {
        grid.classList.remove('active')
    }, exitDelay);
}


function setup({  timeScreen, delay }) {

    const ciclo = timeScreen + delay;
    let nextIndex = 0;


    function nextCiclo (){
        const currentIndex = nextIndex

        entrerScreen(currentIndex)
        setTimeout(() => {
            exitScreen(currentIndex, delay)
        }, timeScreen);

        nextIndex = nextIndex >= grids.length - 1 ?  0 : nextIndex + 1
    }
    nextCiclo()
    setInterval(nextCiclo, ciclo);

}


setup({
    timeScreen: 2000,
    delay: 200 * 7
})


