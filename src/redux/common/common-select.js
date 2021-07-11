import { createSelector } from "reselect";

const selectCommon = (state) => state.common;

export const selectAllCommon = createSelector(
  [selectCommon],
  (common) => common
);

export const selectLoader = createSelector(
  [selectCommon],
  (common) => common.loader
);

export const selectError = createSelector(
  [selectCommon],
  (common) => common.error
);

export const selectClients = createSelector(
  [selectCommon],
  (common) => common.clients
);
