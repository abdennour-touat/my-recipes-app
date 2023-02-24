// import {
//   AnyAction,
//   createAsyncThunk,
//   createSlice,
//   PayloadAction,
//   ThunkAction,
// } from "@reduxjs/toolkit";
// import type { RootState } from "../../App/store";
// import { searchRecipe } from "./recipeService";
// type RequestState = "pending" | "fulfilled" | "rejected";

// // Define a type for the slice state
// interface RecipeState {
//   recipeName: string;
//   recipes: Recipe[];
//   selectedRecipe: Recipe;
// }

// // Define the initial state using that type
// const initialState = {
//   data: {
//     recipeName: "",
//     recipes: [],
//     selectedRecipe: {
//       id: "",
//       image: "",
//       imageType: "",
//       title: "",
//     },
//   } as RecipeState,
//   status: "" as RequestState,
// };
// //async function to get the data from the api
// export const getRecipes = createAsyncThunk<Recipe[], ParamsType>(
//   "recipes/getRecipes",
//   async ({ recipeName, recipesNumber }, { rejectWithValue }) => {
//     try {
//       const response = searchRecipe(recipeName, recipesNumber);
//       return response;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const recipeSlice = createSlice({
//   name: "recipeData",
//   // `createSlice` will infer the state type from the `initialState` argument
//   initialState,
//   reducers: {
//     reset: (state) => {
//       state = initialState;
//     },
//     setRecipeName: (state, action: PayloadAction<string>) => {
//       state.data.recipeName = action.payload;
//     },
//     setSelectedRecipe: (state, action: PayloadAction<Recipe>) => {
//       state.data.selectedRecipe = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getRecipes.pending, (state, action) => {
//       state.status = "pending";
//     });
//     builder.addCase(getRecipes.fulfilled, (state, action) => {
//       state.data.recipes = action.payload;
//       state.status = action.meta.requestStatus;
//     });
//     builder.addCase(getRecipes.rejected, (state, action) => {
//       state.status = action.meta.requestStatus;
//     });
//   },
// });

// export const { reset, setRecipeName, setSelectedRecipe } = recipeSlice.actions;
// export const selectedRecipe = (state: RootState, recipe: RecipeState) =>
//   state.recipes.data;
// export const selectedStatus = (state: RootState, status: RequestState) =>
//   state.recipes.status;

// // Other code such as selectors can use the imported `RootState` type

// export default recipeSlice;
