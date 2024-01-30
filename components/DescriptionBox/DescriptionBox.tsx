import React from "react";
import './DescriptionBox.css'
const DescriptionBox=()=>{
    return(
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box-fade">Reviews (72)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                    blanditiis eum exercitationem fuga labore minima modi numquam odio quas ullam!.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, provident!</p>
            </div>

        </div>
    );
}

export default DescriptionBox;