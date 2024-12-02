import PriceCard from "../PriceCard/PriceCard";
import './Price.scss';

function Price() {
    return (
        <div className="Price container">
            <PriceCard plan={"Basic"} price={4000} days={4} />
            <PriceCard plan={"Premium"} price={8000} days={8} />
            <PriceCard plan={"Business"} price={"Negotiable"} days={"Negotiable"} />


        </div>
    );
}

export default Price;
