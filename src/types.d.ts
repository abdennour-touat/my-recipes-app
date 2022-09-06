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
