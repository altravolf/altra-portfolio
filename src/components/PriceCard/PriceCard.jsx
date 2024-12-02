import './PriceCard.scss';
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function PriceCard({ plan, price, days }) {
    return (
        <div className="PriceCard Outfit-Bold">
            <h3 className=" "> - {plan} -</h3>
            <p className="price"> {price} {Number(price) ? "₹" : null} </p>
            <p className="days">{days} Days</p>
            <p> - Featured - </p>
            <p> - 24x7 Support - </p>
            <p> - Responsive Design - </p>

            <Link to="/contact" className="btn Poppins-Medium btn-cust"> Purchase Now</Link>
        </div>
    );
}

export default PriceCard;
