const lists = document.querySelectorAll('.list');
const rightBox = document.getElementById('right');
const leftBox = document.getElementById('left');

for(let list of lists) {
    list.addEventListener('dragstart', (e) => {
        let selected = e.target;

        rightBox.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        rightBox.addEventListener('drop', (e) => {
            rightBox.append(selected);
            selected = null;
        })

        leftBox.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        leftBox.addEventListener('drop', (e) => {
            rightBox.append(selected);
            selected = null;
        })
    })
}
