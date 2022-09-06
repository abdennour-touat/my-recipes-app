import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "../features/recipe/recipeSlice";
// ...

export const store = configureStore({
  reducer: {
    recipes: recipeSlice.reducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
