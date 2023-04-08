import { useSelector, useDispatch } from "react-redux";
import {
    reset,
    incrementByAmount
} from './counterSlice';
import { useState, useEffect } from "react";
import {database} from '../../firebase';
import { useLocation } from 'react-router-dom';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const location = useLocation();

    const [incrementAmount, setIncrementAmount] = useState(count);

    useEffect(() => {
        const starCountRef = database.ref('resume/');
        
        starCountRef.once('value').then((snapshot) => {
            snapshot.forEach(childSnapshot => {
            const data = childSnapshot.val();
            const key = childSnapshot.key;
            if(key == "counter") {
                dispatch(incrementByAmount(data))
            }
            });
        });
      }, []);

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