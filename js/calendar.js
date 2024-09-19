const monthYear = document.getElementById("monthYear");
const datesContainer = document.getElementById("dates");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    monthYear.textContent = `${month + 1}/${year}`;

    // Limpa as datas anteriores
    datesContainer.innerHTML = "";

    // Descobre o primeiro dia do mês
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Adiciona espaços em branco para os dias antes do primeiro dia do mês
    for (let i = 0; i < firstDay; i++) {
        const blankDay = document.createElement("div");
        datesContainer.appendChild(blankDay);
    }

    // Adiciona os dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
        const dateElement = document.createElement("div");
        dateElement.textContent = day;
        dateElement.className = "date";
        datesContainer.appendChild(dateElement);
    }
}

// Funções para navegar entre os meses
prevButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Renderiza o calendário pela primeira vez
renderCalendar();
