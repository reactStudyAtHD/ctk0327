import React, {useEffect, forwardRef, useImperativeHandle, useRef} from "react";

export default forwardRef((props, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => {
        return {
            getValue: () => {
                console.log("getValue");
                return inputRef.current.value;
            }
        };
    });

    useEffect(() => {
        setTimeout(() => inputRef.current.focus(), 10)
    }, []);
    return <input type="text" ref={inputRef} defaultValue={props.value}/>;
})
