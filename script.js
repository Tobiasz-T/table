
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

fetch('plik.json')
    .then(response => response.json())
    .then(dane => {
        const tbody = document.querySelector('#tabela1 tbody');
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

fetch('plik.json')
    .then(response => response.json())
    .then(dane => {
        const tbody = document.querySelector('#tabela2 tbody');
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

fetch('plik.json')
    .then(response => response.json())
    .then(dane => {
        const tbody = document.querySelector('#tabela3 tbody');
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

fetch('plik.json')
    .then(response => response.json())
    .then(dane => {
        const tbody = document.querySelector('#tabela4 tbody');
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
// Elementy
    const tablist = document.querySelector('nav[role="tablist"]');
    const tabs    = () => [...tablist.querySelectorAll('[role="tab"]')];
    const panels  = () => [...document.querySelectorAll('section[role="tabpanel"]')];

// Funkcja strzałkowa do pokazywania sekcji
    const showPanel = (id) => {
      panels().forEach(p => p.setAttribute('data-active', String(p.id === id)));
      tabs().forEach(btn => btn.setAttribute('aria-selected', String(btn.dataset.target === id)));
      // (Opcjonalnie) aktualizacja hash w URL
      history.replaceState(null, '', '#' + id);
    };
// Delegacja kliknięcia (funkcja strzałkowa)
    tablist.addEventListener('click', (e) => {
      const btn = e.target.closest('[role="tab"]');
      if (!btn) return;
      showPanel(btn.dataset.target);
    });