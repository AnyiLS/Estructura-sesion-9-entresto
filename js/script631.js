const handleGetTotal = () => {
    const total = localStorage.getItem("total"),
          container = document.querySelector('.container');

    document.querySelector(".total").innerText = total

    document.querySelector('.total')
        .style.fontSize = `${container.clientHeight / 19}px`

    localStorage.removeItem('responses')
    localStorage.removeItem('total')

}

document.addEventListener('DOMContentLoaded', handleGetTotal)