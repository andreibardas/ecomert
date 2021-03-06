import React from "react";
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { Route, withRouter } from "react-router-dom";





class CollectionItem extends React.Component {
    myToken = "";

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loggedIn: null,
            token: "",
        };
    }
    


    render(){
        return(
            <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: "url(" +"imageURL" +")"
                }}
            />
            <div className="collection-footer">
                <span className="name">name</span>
                <span className="price">price</span>
            </div>
            <CustomButton>ADAUGA IN COS</CustomButton>
            </div>

        )
    }
}






/*
const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return(
    <div className="collection-item">
        <div
            className="image"
            style={{
                backgroundImage: "url(" +imageUrl +")"
            }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)}>ADAUGA IN COS</CustomButton>
        </div>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});


export default connect(null, mapDispatchToProps)(CollectionItem);
*/


export default withRouter(CollectionItem);