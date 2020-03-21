import React, {useState, useMemo, useCallback, useRef,} from "react";

const getAverage = numbers => {
    console.log("call getAverage");
    if (numbers instanceof Array) {
        if (numbers.length === 0) {
            return 0;
        }
        return numbers.reduce((a, b) => a + b) / numbers.length;
    }
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl=useRef(null);

    const onChange = useCallback(e => {
        console.log("call onChange");
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(e => {
        console.log("call onInsert");
        if (!isNaN(parseInt(number))) {
            const nextList = list.concat(parseInt(number));
            setList(nextList);
        }
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);

    const onClear = useCallback(e => {
        console.log("call onClear");
        setList([]);
        setNumber('');
        inputEl.current.focus();
    }, [list, number]);

    const avg = useMemo(() => getAverage(list), [list]);
    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <button onClick={onClear}>초기화</button>
            <ul>
                {
                    list.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))
                }
            </ul>
            <div>
                <b>평균값 : {avg}</b>
            </div>
        </div>
    )
};

export default Average;