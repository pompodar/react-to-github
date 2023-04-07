import { useSelector, useDispatch } from "react-redux";
import {
    reset,
    incrementByAmount
} from './addressSlice';
import { useState } from "react";
import { useLocation } from 'react-router-dom';

const Address = () => {
    const addr = useSelector((state) => state.address.addr);
    const dispatch = useDispatch();
    const location = useLocation();

    const [incrementAmount, setIncrementAmount] = useState(addr);

    const addValue = incrementAmount || "";

    const resetAll = () => {
        setIncrementAmount("");
        dispatch(reset());
    }

    return (
        <section>
            <p>{addr}</p>
            {
				location.pathname == '/admin' && (
					<>
                        <input
                        type="text"
                        value={incrementAmount}
                        onChange={(e) => setIncrementAmount(e.target.value)}
                        />
                        <div>
                            <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                            <button onClick={resetAll}>Reset</button>
                        </div>
                    </>
				)
			}
        </section>
    )
}
export default Address