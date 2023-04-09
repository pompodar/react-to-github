import { useSelector, useDispatch } from "react-redux";
import {
    reset,
    incrementByAmount
} from './photoSlice';
import { useState, useEffect } from "react";
import {database, storage} from '../../firebase';
import { useLocation } from 'react-router-dom';

const Photo = () => {
    const pic = useSelector((state) => state.photo.pic);
    const dispatch = useDispatch();
    const location = useLocation();

    const [incrementAmount, setIncrementAmount] = useState(pic);

    useEffect(() => {
        const starCountRef = database.ref('resume/');
        
        starCountRef.once('value').then((snapshot) => {
            snapshot.forEach(childSnapshot => {
            const data = childSnapshot.val();
            const key = childSnapshot.key;
            if(key == "photo") {
                dispatch(incrementByAmount(data))
            }
            });
        });
      }, [incrementAmount]);

    const addValue = incrementAmount || "";

    const resetAll = () => {
        setIncrementAmount("");
        dispatch(reset());
    }

    return (
        <section>
            <img src={pic} />

            {
				location.pathname == '/admin' && (
					<>
                        <input
                        type="file"
                        value={incrementAmount}
                        onChange={(e) => {
                            setIncrementAmount(e.target.value);
                            
                            const file = e.target.files[0]; // Get the first file selected by the user
                            const storageRef = storage.ref().child('my-files/my-image.jpg');
                            const uploadTask = storageRef.put(file);
                            uploadTask.then((snapshot) => {
                                return snapshot.ref.getDownloadURL();
                              }).then((downloadURL) => {
                                const starCountRef = database.ref('resume/');
                                starCountRef.update( { 
                                    photo: downloadURL
                                });
                                console.log('File available at', downloadURL);
                              }).catch((error) => {
                                console.error(error);
                              });
                        }
                        }
                        />
                        <div>
                            <button onClick={resetAll}>Reset</button>
                        </div>
                    </>
				)
			}
        </section>
    )
}
export default Photo