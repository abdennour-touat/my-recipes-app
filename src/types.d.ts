interface Recipe {
  id: string;
  title: string;
  image: string;
  imageType: string;
}

type ParamsType = {
  recipeName: string;
  recipesNumber: number;
};

interface RecipeDetails {
  summary: string;
  title: string;
  analyzedInstructions: Array;
}
