import React, {useEffect, useRef} from "react";

const Ref = () => {
    // const inputEl = useRef(null);
    const numRef = useRef(0);
    // console.log(numRef);

    // componentDidMount
    useEffect(() => {
        // console.log(numRef.current);
    }, []);

    const onRef = () => {
        numRef.current = numRef.current + 1
    };

    return(
        <div>
            {/*<input*/}
            {/*    type="text"*/}
            {/*    placeholder='ref'*/}
            {/*    ref={inputEl}*/}
            {/*/>*/}
            <button
                onClick={onRef}
            >{numRef.current}</button>
        </div>
    )
};

export default Ref;