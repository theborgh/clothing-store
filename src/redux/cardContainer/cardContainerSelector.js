import { createSelector } from 'reselect';

const selectCardContainer = state => state.cardContainer;

export const selectCardContainerSections = createSelector(
  [selectCardContainer],
  cardContainer => cardContainer.sections
)