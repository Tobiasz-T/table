fetch('plik.json')
    .then(response => response.json())
    .then(dane => {
        const tbody = document.querySelector('#tabela tbody');
        dane.forEach(osoba => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${osoba.imie}</td>
            <td>${osoba.nazwisko}</td>
            <td>${osoba.wiek}</td>
          `;
          tbody.appendChild(tr);
        });
      })
      .catch(error => console.error('Błąd ładowania danych:', error));