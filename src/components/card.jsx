import React, { Component } from "react";
import FlashOnIcon from '@material-ui/icons/FlashOn';

class Card extends Component {
  state = {};
  render() {
    const { label, calories, image, ingredientLines } = this.props.card;
    return (
      <div className="max-w-sm m-2  mx-5 h-auto shadow-xl mb-5 rounded-xl">
        <div className="flex-col bg-gray-50 pb-4 px-4 pt-2 pl-2 ">
          <h5 className="font-bold mb-2 text-xl ">{label}</h5>
          <p className="mb-0 text-sm text-gray-500">
           
            <FlashOnIcon name="flashon" size="5xl" color="black" className='text-black'></FlashOnIcon> {Math.floor(calories)} Cals
          </p>
        </div>
        <img className="rounded-xl  " src={image} alt="img" />
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
