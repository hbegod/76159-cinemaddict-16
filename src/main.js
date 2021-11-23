import { RenderPosition, renderTemplate } from './render.js';
import { createSiteMenuTemplate } from './view/site-menu-view.js';
import { createFilmCardTemplate } from './view/film-card-view.js';
import { createShowMoreButtonTemplate } from './view/show-more-button-view.js';
import { createPopupFilmDetailsTemplate } from './view/popup-film-details-view.js';
import {createUserRankTemplate} from './view/user-rank-view.js';

const FILM_CARD_COUNT = 5;
const siteMainElement = document.querySelector('.main');
const siteFilmContainer = siteMainElement.querySelector('.films-list__container');

renderTemplate(siteMainElement, createSiteMenuTemplate(), RenderPosition.AFTERBEGIN);

for (let i = 0; i < FILM_CARD_COUNT; i++) {
  renderTemplate(siteFilmContainer, createFilmCardTemplate(), RenderPosition.BEFOREEND);
}

renderTemplate(siteMainElement, createShowMoreButtonTemplate(),RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createUserRankTemplate(), RenderPosition.BEFOREEND );
renderTemplate(siteMainElement, createPopupFilmDetailsTemplate(), RenderPosition.BEFOREEND );
