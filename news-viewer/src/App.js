import React, {useCallback, useState} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import NewsPage from "./pages/NewsPage";
/*
const App = () => {
    const [data, setData] = useState(null);
    const onClick = async () => {
        // axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response=>{
        //   setData(response.data);
        // });
        try {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apikey=c59c6db75bd0445fa9e37c984fa42902');
            setData(response);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
        </div>
    )
};*/

const App =()=>{
    const [category,setCategory]=useState('all');
    const onSelect=useCallback(category=>setCategory(category),[]);
    return (
        <Route path={"/:category?"} component={NewsPage} />
    );
};

export default App;
