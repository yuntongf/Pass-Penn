import React from "react";
import FourYearPlan from "../components/FourYearPlan/FourYearPlan";
import Detail from "../components/SearchResult/Detail";
import { useSelector } from 'react-redux';
import Cart from "../components/Cart/Cart";
import { RootState } from "../store/configureStore";

const FourYearPlanPage = () => {
    const current = useSelector((store : RootState) => store.entities.current);
    const showCart = useSelector((store : RootState) => store.nav.showCart);

    return (
        <div>
            <div className="mt-4 d-flex justify-content-center">
                {showCart && <div className="m-2">
                    <Cart/>
                </div>}
                <div className="m-2">
                    <FourYearPlan/>
                </div>
                {current.id && 
                <div className="col-3 m-2">
                    <Detail/>
                </div>}
            </div>
        </div>
    )
}

export default FourYearPlanPage;