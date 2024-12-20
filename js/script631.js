const handleGetTotal = () => {
    const total = localStorage.getItem("total"),
          container = document.querySelector('.container');

    document.querySelector(".total").innerText =  total;

    if(parseInt(total) < 10 ) document.querySelector('.total').style.right = '31%'

    document.querySelector('.total')
        .style.fontSize = `${container.clientHeight / 17}px`

    localStorage.removeItem('responses')
    localStorage.removeItem('total')

}

document.addEventListener('DOMContentLoaded', handleGetTotal)