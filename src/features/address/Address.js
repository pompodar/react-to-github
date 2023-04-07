import { useSelector, useDispatch } from "react-redux";
import {database} from '../../firebase';
import {
    reset,
    incrementByAmount,
} from './addressSlice';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const Address = () => {
    const addr = useSelector((state) => state.address.addr);
    const dispatch = useDispatch();
    const location = useLocation();

    const [incrementAmount, setIncrementAmount] = useState(addr);

    useEffect(() => {
        const starCountRef = database.ref('resume/');
        
        starCountRef.once('value').then((snapshot) => {
            snapshot.forEach(childSnapshot => {
            const data = childSnapshot.val();
            const key = childSnapshot.key;
            if(key == "address") {
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