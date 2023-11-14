import React from 'react'
import { FaStar,FaStarHalf } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from 'styled-components';

const Star = ({stars,reviews}) => {
    console.log("stars",stars);

    // To show the number of stars in the form of star ratings
    const starratings=Array.from({length:5},(elem,index)=>{
        // index stars from zero
        console.log("printstars",index)
        return (
            <span>
                {(index<=stars-1)?<FaStar className="icon"/>:(index<=stars+0.5-1)?<FaStarHalf className="icon"/>:<AiOutlineStar className="icon"/>}
            </span>
        )
    })
  return (<Wrapper>
        <div className="icon-style">
        {starratings}
        </div>
        <p>
            ({reviews} customer reviews)
        </p>
  </Wrapper> 
  )
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Star