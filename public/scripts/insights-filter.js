(() => {
  const init = () => {
    const filterSection = document.querySelector('.filters-section');
    const defaultTopic = filterSection?.dataset.defaultTopic || 'all';
    const filterBtns = document.querySelectorAll('.filter-btn');
    const postCards = document.querySelectorAll('.post-card');
    const resultsCount = document.getElementById('results-count');

    if (!filterBtns.length || !postCards.length || !resultsCount) {
      return;
    }

    const applyFilter = (topic) => {
      filterBtns.forEach((b) => b.classList.remove('filter-btn--active'));
      const activeBtn = Array.from(filterBtns).find((btn) => btn.getAttribute('data-topic') === topic);
      if (activeBtn) activeBtn.classList.add('filter-btn--active');

      let visibleCount = 0;
      postCards.forEach((card) => {
        const cardTopic = card.getAttribute('data-topic');
        if (topic === 'all' || cardTopic === topic) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (topic === 'all') {
        resultsCount.textContent = `Showing all ${visibleCount} articles`;
      } else {
        resultsCount.textContent = `Showing ${visibleCount} articles in "${topic}"`;
      }
    };

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const topic = btn.getAttribute('data-topic');
        if (topic) applyFilter(topic);
      });
    });

    applyFilter(defaultTopic);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
