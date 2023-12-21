
  ////////////////////////////////////////
  //Lazy loading image
  const Imgtargets = document.querySelectorAll('[data-src]');
  console.log(Imgtargets);
  const loading = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    console.log(entry);
    //Repalacing src with data-src
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
  };
  const imgobserver = new IntersectionObserver(loading, {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -10px 0px', // Adjust as needed
  });
  Imgtargets.forEach(img => imgobserver.observe(img));
  