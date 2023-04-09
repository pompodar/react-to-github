import { useSelector, useDispatch } from "react-redux";
import {database} from '../../firebase';
import {
    reset,
    incrementByAmount,
} from './work1Slice';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const Work1 = () => {
    const working = useSelector((state) => state.work1.working);
    const dispatch = useDispatch();
    const location = useLocation();

    const [incrementAmount, setIncrementAmount] = useState(working);

    useEffect(() => {
        const starCountRef = database.ref('resume/');
        
        starCountRef.once('value').then((snapshot) => {
            snapshot.forEach(childSnapshot => {
            const data = childSnapshot.val();
            const key = childSnapshot.key;
            if(key == "work1") {
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
            <p className="work1">Work 1</p>
            <p>{working}</p>
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
export default Work1