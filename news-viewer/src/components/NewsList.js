import React, {useEffect, useState} from "react";
import styled from "styled-components";
import NewsItem from './NewsItem';
import axios from "axios";

// const NewsListBlock

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 2rem auto 0;
  @media screen and (max-width: 768px){
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
};

// END OF CHATPER 14.5
/*const NewsList = () => {
    return (
        <NewsListBlock>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
        </NewsListBlock>)
        ;
};*/

const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query=category==='all'?'' :`&category=${category}`;
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apikey=c59c6db75bd0445fa9e37c984fa42902`
                );
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);

    if (loading) {
        return <NewsList>대기 중...</NewsList>;
    }

    if (!articles) {
        return null;
    }

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
                )
            )}
        </NewsListBlock>
    );
};

export default NewsList;