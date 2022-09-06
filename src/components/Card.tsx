import FlashOnIcon from "@material-ui/icons/FlashOn";
import { useNavigate } from "react-router-dom";

import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import LocalHospitalRoundedIcon from "@material-ui/icons/LocalHospitalRounded";
import React from "react";

export default function Card(props: Recipe) {
  const { id, image, imageType, title } = props;
  const history = useNavigate();
  return (
    <div
      onClick={() => {
        history(`${title}`);
      }}
      className="max-w-xl w-96   shadow-2xl mb-8  hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer "
    >
      <div className="flex-col align-middle h-40 bg-white pb-2 px-4 pt-3 pl-2 flex-grow text-sm text-gray-500">
        <h5 className="font-semibold mt-4 h-1/2 font-cardHeader text-3xl text-black text-center">
          {title}
        </h5>
        <div className=" flex justify-center space-x-3 ">
          {/* <p className="mb-2">
            <FlashOnIcon name="flashon" className="text-black"></FlashOnIcon>
            {Math.floor(calories)} Cals
          </p> */}
          {/* {cuisineType.length !== 0 ? (
            <p className="mb-2 ">
              <LocationOnRoundedIcon
                name="flashon"
                className="text-black"
              ></LocationOnRoundedIcon>
              {cuisineType[0]}
            </p>
          ) : null} */}

          {/* {dietLabels.length !== 0 ? (
            <p>
              <LocalHospitalRoundedIcon
                name="flashon"
                className="text-black"
              ></LocalHospitalRoundedIcon>
              {dietLabels[0]}
            </p>
          ) : null} */}
        </div>
      </div>
      <img className="object-cover w-full h-52 " src={image} alt="img" />
      {/* <ol className=''>
      {ingredientLines.map((ingredient) => (
        <li className='w-48'>{ingredient}</li>
      ))}
    </ol> */}
    </div>
  );
}
