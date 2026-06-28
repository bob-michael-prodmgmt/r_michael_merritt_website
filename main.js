// Mobile nav toggle
document.addEventListener('click', e => {
  const t = e.target.closest('[data-nav-toggle]');
  if (t) document.querySelector('.nav-links')?.classList.toggle('open');
  else if (!e.target.closest('.nav-links')) document.querySelector('.nav-links')?.classList.remove('open');
});

// Reveal-on-scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Living resume: simple client-side filter (Executive page)
function filterResume(q){
  q = (q||'').toLowerCase().trim();
  document.querySelectorAll('[data-resume-row]').forEach(row => {
    const txt = row.getAttribute('data-keywords') + ' ' + row.textContent;
    row.style.display = (!q || txt.toLowerCase().includes(q)) ? '' : 'none';
  });
}
document.addEventListener('input', e => {
  if (e.target.matches('[data-resume-search]')) filterResume(e.target.value);
});
document.addEventListener('click', e => {
  const chip = e.target.closest('[data-resume-filter]');
  if (chip){
    document.querySelectorAll('[data-resume-filter]').forEach(c=>c.classList.remove('chip'));
    document.querySelectorAll('[data-resume-filter]').forEach(c=>c.classList.add('chip','neutral'));
    chip.classList.remove('neutral');
    filterResume(chip.getAttribute('data-resume-filter'));
    const s=document.querySelector('[data-resume-search]'); if(s) s.value=chip.getAttribute('data-resume-filter');
  }
});
