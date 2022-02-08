import { User } from './localStorage.js'

export function getUserData(entity: User) {
  if (entity.username == null) {
    return 'no name'
  }
  if (entity.avatarUrl == null) {
    return 'no url'
  }
  getFavoritesAmount(entity)

  function getFavoritesAmount(entity: User): string {
    if (entity.favoriteItemsAmount == null) {
      return 'no favorite items'
    }
  }
}



