
let inputValue = document.getElementById('enter');
let tableContainer = document.getElementById('table-container');
let number = 0;

function register() {
    number = Number(inputValue.value);
    
    let html = `<table class="table-auto border-collapse w-full max-w-md mx-auto">`;
    
    for (let i = 1; i <= number; i++) {
        html += `<tr>`;
        
        for (let j = 1; j <= number; j++) { 
            
            if ((i + j) % 2 === 0) {
                html += `<td class="w-10 h-10 bg-white border border-gray-800"></td>`;
            } else {
                html += `<td class="w-10 h-10 bg-black border border-gray-800"></td>`;
            }
        }
        
        html += `</tr>`; 
    }
    
    html += `</table>`;
    tableContainer.innerHTML = html; 
}
