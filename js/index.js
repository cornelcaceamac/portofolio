const createInscreenObserver = (className) => {
  return new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      }
    });
})}

const addObserverForCollection = (collection, linkedObserver) => {
  for(let i=0; i<collection.length; i++){
    linkedObserver.observe(collection[i]);
  }
}

const infoObserver = createInscreenObserver('info__box--animation');
const projectsObserver = createInscreenObserver('projects__container--animation');
const s90 = createInscreenObserver('skills__progress--col-90--animation');
const s80 = createInscreenObserver('skills__progress--col-80--animation');
const s70 = createInscreenObserver('skills__progress--col-70--animation');
const s60 = createInscreenObserver('skills__progress--col-60--animation');
const s50 = createInscreenObserver('skills__progress--col-50--animation');
const s40 = createInscreenObserver('skills__progress--col-40--animation');
const s30 = createInscreenObserver('skills__progress--col-30--animation');

infoObserver.observe(document.querySelector('.info__box'));
projectsObserver.observe(document.querySelector('.projects__container'));
const s90elems = document.getElementsByClassName('skills__progress--col-90');
const s80elems = document.getElementsByClassName('skills__progress--col-80');
const s70elems = document.getElementsByClassName('skills__progress--col-70');
const s60elems = document.getElementsByClassName('skills__progress--col-60');
const s50elems = document.getElementsByClassName('skills__progress--col-50');
const s40elems = document.getElementsByClassName('skills__progress--col-40');
const s30elems = document.getElementsByClassName('skills__progress--col-30');


addObserverForCollection(s90elems, s90);
addObserverForCollection(s80elems, s80);
addObserverForCollection(s70elems, s70);
addObserverForCollection(s60elems, s60);
addObserverForCollection(s50elems, s50);
addObserverForCollection(s40elems, s40);
addObserverForCollection(s30elems, s30);