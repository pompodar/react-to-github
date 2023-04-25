import { useSelector, useDispatch } from "react-redux";
import {
    reset,
    incrementByAmount
} from './aboutMeSlice';
import { useState, useEffect } from "react";
import {database} from '../../firebase';
import { useLocation } from 'react-router-dom';

const AboutMe = () => {
    const about = useSelector((state) => state.aboutMe.about);
    const dispatch = useDispatch();
    const location = useLocation();

    const [incrementAmount, setIncrementAmount] = useState(about);

    useEffect(() => {
        const starCountRef = database.ref('resume/');
        
        starCountRef.once('value').then((snapshot) => {
            snapshot.forEach(childSnapshot => {
            const data = childSnapshot.val();
            const key = childSnapshot.key;
            if(key == "aboutMe") {
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
            <p>About Me</p>
            <p>{about}</p>

            {
				location.pathname == '/admin' && (
					<>
                        <input
                        type="text"
                        value={incrementAmount}
                        onChange={(e) => setIncrementAmount(e.target.value)}
                        />
                        <div>
                            <button onClick={() => dispatch(incrementByAmount(addValue))}>Edit</button>
                            <button onClick={resetAll}>Reset</button>
                        </div>
                    </>
				)
			}
        </section>
    )
}
export default AboutMe