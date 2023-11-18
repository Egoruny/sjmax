const task = document.querySelectorAll(".task")

const buttons = document.querySelectorAll('button');

buttons.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (task[i]) {
            if (task[i].style.display === 'block') {
                task[i].style.display = 'none'
                buttons[i].style.backgroundColor = '#00A4E5'
            } else {
                task[i].style.display = 'block'
                buttons[i].style.backgroundColor = 'red'
            }
        }

        for (let index = 0; i < task.length; index++) {
            if (i !== index) {
                task[index].style.display = 'none'
                buttons[index].style.backgroundColor = '#00A4E5'
            }
        }
    })
})