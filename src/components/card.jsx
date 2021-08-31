import FlashOnIcon from "@material-ui/icons/FlashOn";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import LocalHospitalRoundedIcon from "@material-ui/icons/LocalHospitalRounded";
import React from 'react'

export default function card(props) {
  const { label, calories, image, cuisineType, dietLabels } = props.card
  return (
    <div className=" flex flex-wrap  max-w-sm m-2   mx-5  shadow-2xl mb-5 rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
    <div className="flex-col bg-white pb-2 px-4 pt-3 pl-2 flex-grow text-sm text-gray-500">
      <h5 className="font-semibold mb-2 font-cardHeader text-3xl text-black">{label}</h5>
      <p className="mb-2">
        <FlashOnIcon
          name="flashon"
          size="5xl"
          color="black"
          className="text-black"
        ></FlashOnIcon>
        {Math.floor(calories)} Cals
      </p>
      {cuisineType.length !== 0 ? <p className="mb-2 ">
          <LocationOnRoundedIcon
            name="flashon"
            size="5xl"
            color="black"
            className="text-black"
          ></LocationOnRoundedIcon>
          {cuisineType[0]}
        </p>: null}
        
     {dietLabels.length !== 0?<p >
          <LocalHospitalRoundedIcon
            name="flashon"
            size="5xl"
            color="black"
            className="text-black"
          ></LocalHospitalRoundedIcon>
          {dietLabels[0]}
        </p>: null}
    
    </div>
    <img className="rounded-xl " src={image} alt="img" />
    {/* <ol className=''>
      {ingredientLines.map((ingredient) => (
        <li className='w-48'>{ingredient}</li>
      ))}
    </ol> */}
  </div>
  )
}
