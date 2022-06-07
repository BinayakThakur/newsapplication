import { Card, Container, Grid } from "@mui/material";

import { useContext } from "react";
import { DataContext } from "../Datacontext";
import ComplexGrid from "./NewsCard";

const Feed = () => {
    const { articles } = useContext(DataContext);
    var feed=[];
    
    if(articles!=undefined){
        articles.map(article => {
            feed.push(
              
                   <Card sx={{mt:2}}>
                    <ComplexGrid media={article.media} topic={article.topic} date={article.published_date} title={article.title} author={article.author} summary={article.summary}> 

                    </ComplexGrid>   
                   </Card>
            );
        });
    }
    return (
        <div>
        <Container>
        {feed}       
        </Container>
        </div>
    );
    }
export default Feed;