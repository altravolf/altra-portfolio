import { useContext } from "react";
import './HeightFix.scss';
import MyContext from "../../data/MyContext";

function HeightFix() {

    const { isHeight } = useContext(MyContext);
    return (
        <div className="HeightFix" style={{ height: `${isHeight}px` }}>
        </div>
    );
}

export default HeightFix;
