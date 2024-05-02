// script.js
// function generateCard() {
//     const bingoCard = document.getElementById('bingoCard');
//     bingoCard.innerHTML = ''; // Clear existing card
//     const rows = 5;
//     const cols = 5;
//     const maxNumber = 75;

//     for (let i = 0; i < rows; i++) {
//         const row = bingoCard.insertRow();
//         for (let j = 0; j < cols; j++) {
//             const cell = row.insertCell();
//             const number = Math.floor(Math.random() * maxNumber) + 1;
//             cell.innerHTML = number;
//         }
//     }
// }

// script.js
function generateCard() {
    const bingoCard = document.createElement('table');
    const rows = 5;
    const cols = 5;
    const maxNumber = 75;

    for (let i = 0; i < rows; i++) {
        const row = bingoCard.insertRow();
        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell();
            cell.innerHTML = Math.floor(Math.random() * maxNumber) + 1;
            cell.style.border = '1px solid black';
            cell.style.textAlign = 'center';
            cell.style.fontSize = '20px';
        }
    }
    return bingoCard;
}

function generateMultipleCards() {
    const numCards = parseInt(document.getElementById('numCards').value);
    const bingoContainer = document.getElementById('bingoCard');
    bingoContainer.innerHTML = ''; // Clear existing content

    for (let i = 0; i < numCards; i++) {
        const card = generateCard();
        bingoContainer.appendChild(card);
    }
}

// function downloadPDF() {
//     const bingoContainer = document.getElementById('bingoCard');
//     html2canvas(bingoContainer).then(canvas => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jspdf.jsPDF({
//             orientation: 'portrait',
//             unit: 'px',
//             format: [canvas.width, canvas.height]
//         });
//         pdf.addImage(imgData, 'PNG', 0, 0);
//         pdf.save('bingo_cards.pdf');
//     });
// }

function downloadPDF() {
    const element = document.getElementById('bingoCard'); 
    html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [canvas.width, canvas.height]
        });
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('bingo_cards.pdf');
    }).catch(error => console.error('Error generating PDF:', error));
}
