const movies = [
  {
    rank: 1,
    title: "ill fill dis in later",
    year: 2025,
    director: "...",
    rating: 5,
    posterUrl: "",
    description: "...",
    tags: ["..."]
  },
  {
    rank: 2,
    title: "will fill",
    year: 2025,
    director: "...",
    rating: 4.5,
    posterUrl: "",
    description: "...",
    tags: ["..."]
  },
  {
    rank: 3,
    title: "scixviauofb",
    year: 2025,
    director: "...",
    rating: 4.5,
    posterUrl: "",
    description: "...",
    tags: ["..."]
  },
  {
    rank: 4,
    title: "grtdvcszxa",
    year: 2025,
    director: "...",
    rating: 4,
    posterUrl: "",
    description: "....",
    tags: ["..."]
  },
  {
    rank: 5,
    title: "htbgfv",
    year: 2025,
    director: "htgrf",
    rating: 4,
    posterUrl: "",
    description: "bgvf",
    tags: ["fd"]
  }
];

document.getElementById('film-count').textContent = movies.length;

function starsHtml(rating) {
  const full  = Math.floor(rating);
  const half  = (rating % 1) >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  let html = '';
  for (let i = 0; i < full;  i++) html += '<span class="star">&#9733;</span>';
  if (half)                        html += '<span class="star">&#9734;</span>';
  for (let i = 0; i < empty; i++) html += '<span class="star empty">&#9733;</span>';
  return html;
}

function posterHtml(url, title) {
  if (url) {
    return `<img class="poster-img" src="${url}" alt="${title}" onerror="this.style.display='none'">`;
  }
  return `
    <div class="poster-placeholder">
      <svg class="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="#3a3830" stroke-width="1.5">
        <rect x="2" y="3" width="20" height="18" rx="2"/>
        <path d="M8 7h.01M16 7h.01M8 12h8M8 16h5"/>
      </svg>
      <div class="placeholder-text">add poster url</div>
    </div>
  `;
}

const grid = document.getElementById('grid');

movies.forEach(movie => {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.innerHTML = `
    <div class="poster-wrap">
      ${posterHtml(movie.posterUrl, movie.title)}
      <div class="rank-badge">#${movie.rank}</div>
    </div>
    <div class="star-row">${starsHtml(movie.rating)}</div>
    <div class="movie-meta-title">${movie.title}</div>
    <div class="movie-meta-year">${movie.year}</div>
  `;
  card.addEventListener('click', () => openModal(movie));
  grid.appendChild(card);
});

function openModal(movie) {
  const ordinals = [
    '#1 of 2025', '#2 of 2025', '#3 of 2025', '#4 of 2025', '#5 of 2025',
    '#6 of 2025', '#7 of 2025', '#8 of 2025', '#9 of 2025', '#10 of 2025'
  ];

  document.getElementById('modal-rank').textContent    = ordinals[movie.rank - 1] || `#${movie.rank} of 2025`;
  document.getElementById('modal-title').textContent   = movie.title;
  document.getElementById('modal-year-dir').textContent = `${movie.year} · dir. ${movie.director}`;
  document.getElementById('modal-stars').innerHTML     = starsHtml(movie.rating);
  document.getElementById('modal-desc').textContent    = movie.description;

  const posterEl = document.getElementById('modal-poster');
  if (movie.posterUrl) {
    posterEl.innerHTML = `<img src="${movie.posterUrl}" alt="${movie.title}" onerror="this.style.display='none'">`;
  } else {
    posterEl.innerHTML = `
      <div class="modal-poster-placeholder">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2a2824" stroke-width="1.5">
          <rect x="2" y="3" width="20" height="18" rx="2"/>
          <path d="M8 7h.01M16 7h.01M8 12h8M8 16h5"/>
        </svg>
      </div>
    `;
  }

  const tagsEl = document.getElementById('modal-tags');
  tagsEl.innerHTML = movie.tags.map(t => `<span class="tag">${t}</span>`).join('');

  document.getElementById('overlay').classList.add('active');
}

document.getElementById('overlay').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

document.getElementById('modal-close').addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

function closeModal() {
  document.getElementById('overlay').classList.remove('active');
}