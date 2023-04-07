import { useSelector, useDispatch } from "react-redux";
import {
    reset,
    incrementByAmount
} from './counterSlice';
import { useState } from "react";
import { useLocation } from 'react-router-dom';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const location = useLocation();

    const [incrementAmount, setIncrementAmount] = useState(count);

    const addValue = incrementAmount || "";

    const resetAll = () => {
        setIncrementAmount("");
        dispatch(reset());
    }

    return (
        <section>
            <p>{count}</p>
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
export default Counter