import React from "react";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import LocalHospitalRoundedIcon from "@material-ui/icons/LocalHospitalRounded";
import WarningIcon from "@material-ui/icons/Warning";
import FastfoodIcon from "@material-ui/icons/Fastfood";
export default function SideArticle({
  img,
  cautions,
  calories,
  dietLabels,
  dishType,
  healthLabels,

  label,
  cuisineType,
}) {
  return (
    <div className=" mt-44 shadow-xl rounded-2xl px-20 md:px-28 pb-14   text-xl text-center">
      <img src={img} alt="img" className="rounded-xl m-auto mb-6" />
      <div className="  bg-white pb-2 px-4 pt-3 pl-2 text-sm text-gray-500 rounded-2xl mb-6">
        <h5 className="font-semibold mb-2 pl-3 font-cardHeader text-3xl text-black">
          {label}
        </h5>
        <div
          className="pl-4 text-lg tracking-wide leading-relaxed 
        "
        >
          <p className="mb-2">
            <FlashOnIcon name="flashon" className="text-black"></FlashOnIcon>
            {Math.floor(calories)} Cals
          </p>
          {cuisineType.length !== 0 ? (
            <p className="mb-2 ">
              <LocationOnRoundedIcon
                name="flashon"
                className="text-black"
              ></LocationOnRoundedIcon>
              {cuisineType[0]}
            </p>
          ) : null}

          {dietLabels.length !== 0 ? (
            <p className="mb-2 ">
              <LocalHospitalRoundedIcon
                name="flashon"
                className="text-black"
              ></LocalHospitalRoundedIcon>
              {dietLabels[0]}
            </p>
          ) : null}
          {cautions.length !== 0 ? (
            <p className="mb-2 ">
              <WarningIcon name="flashon" className="text-black"></WarningIcon>
              {cautions.map((dl, index) => (
                <span key={index}> {dl} </span>
              ))}
            </p>
          ) : null}
          {dishType.length !== 0 ? (
            <p className="mb-2  ">
              <FastfoodIcon
                name="flashon"
                className="text-black"
              ></FastfoodIcon>
              <span className="ml-2 mt-1">{dishType[0]}</span>
            </p>
          ) : null}
        </div>
      </div>
      <div className="font-cardHeader font-semibold text-center bg-white rounded-2xl px-7 py-6">
        <h3 className="font-semibold mb-2 pl-3 font-cardHeader text-3xl text-black">
          Health labels:
        </h3>
        {healthLabels.map((hl, index) => (
          <span key={index} className="tracking-wide leading-relaxed ">
            {" "}
            {hl}, <span> </span>{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
