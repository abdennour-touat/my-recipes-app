import React, { Component } from "react";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import LocalHospitalRoundedIcon from "@material-ui/icons/LocalHospitalRounded";

class Card extends Component {
  state = {};
  render() {
    const { label, calories, image, ingredientLines, cuisineType, dietLabels } =
      this.props.card;
      console.log(dietLabels)
    return (
      <div className=" flex flex-wrap  max-w-sm m-2 h-screen- self-auto   mx-5  shadow-2xl mb-5 rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
        <div className="flex-col bg-white pb-2 px-4 pt-3 pl-2 flex-grow">
          <h5 className="font-semibold mb-2 font-cardHeader text-3xl">{label}</h5>
          <p className="mb-2 text-sm text-gray-500">
            <FlashOnIcon
              name="flashon"
              size="5xl"
              color="black"
              className="text-black"
            ></FlashOnIcon>
            {Math.floor(calories)} Cals
          </p>
          {cuisineType.length !== 0 ? <p className="mb-2 text-sm text-gray-500">
              <LocationOnRoundedIcon
                name="flashon"
                size="5xl"
                color="black"
                className="text-black"
              ></LocationOnRoundedIcon>
              {cuisineType[0]}
            </p>: null}
            
         {dietLabels.length !== 0?<p className=" text-sm text-gray-500">
              <LocalHospitalRoundedIcon
                name="flashon"
                size="5xl"
                color="black"
                className="text-black"
              ></LocalHospitalRoundedIcon>
              {dietLabels[0]}
            </p>: null}
        
        </div>
        <img className="rounded-xl items-end " src={image} alt="img" />
        {/* <ol className=''>
          {ingredientLines.map((ingredient) => (
            <li className='w-48'>{ingredient}</li>
          ))}
        </ol> */}
      </div>
    );
  }
}

export default Card;
