import { renderBlock } from './lib.js'


export function renderUserBlock(favoriteItemsAmount: number, userName: string, avatarUrl?: string) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
  const hasFavoriteItems = favoriteItemsAmount ? true : false;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarUrl ? avatarUrl : './img/ekaterina.jpg'}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName ? userName : 'Екатерина'}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
