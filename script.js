const movies = [
  {
    rank: 1,
    title: "the silence of the lambs",
    year: 2025,
    director: "jonathan demme",
    rating: 4.5,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_QL75_UY281_CR0,0,190,281_.jpg",
    description: "wow there isnt much to say about this one. ive been wanting to watch it for a while and finally when i got the chance to, it didnt disappoint. all the characters did an OUTSTANDING job in portraying their role, i had to remind myself they were just actors as the gory scenes were playing. the conversations between dr hannibal the cannibal and clarice were definitely the most interesting aspect of this movie, regardless of their relation which seemed offsetting at times but i look forward to watching the sequel soon!",
    tags: ["..."]
  },
  {
    rank: 2,
    title: "when i fly towards you",
    year: 2025,
    director: "shuang yuan",
    rating: 5,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODI3NzUwYTktMjlkYS00MDNiLTg0MjgtNWQ1NWZkYmQ2Mzk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "if there were more than 5 stars, i would rate this infinity stars. tell me why i was hooked to this show, i finished it in a single day bc it was THAT GOOD. i love this show so sososososososososo much and cant wait for season 2!! suzaizai&rangrang4everrrrrrrr",
    tags: ["..."]
  },
  {
    rank: 3,
    title: "the truman show",
    year: 2025,
    director: "peter weir",
    rating: 5,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzA3ZjZlNzYtMTdjMy00NjMzLTk5ZGYtMTkyYzNiOGM1YmM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "wow what if reality is actually a tv show...",
    tags: ["..."]
  },
  {
    rank: 4,
    title: "sita ramam",
    year: 2025,
    director: "hanu raghavapati",
    rating: 4.5,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYWE0NDNiNzEtNThmMi00NjZlLTk3NDAtYzIzOWNmNWQyYTI3XkEyXkFqcGc@._V1_.jpg",
    description: "YESSSS DULQUER SALMAANNN u have to watch this😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁",
    tags: ["..."]
  },
  {
    rank: 5,
    title: "paddington 2",
    year: 2025,
    director: "paul king",
    rating: 4,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTk1YzlhMTUtZmU5MC00NmRmLTlkZjItYzQ0NTY4Y2NiNzc4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "paddington will always be my favorite. i love him as much as he loves marmalade.",
    tags: ["..."]
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
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2c2924" stroke-width="1.5">
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
