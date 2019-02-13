import React from 'react'
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    card:{
        minWidth: '100%',
        marginBottom: 10,
        padding: 20,
        display: "flex"
    },
    img: {
        width: "100%"
    },
    gridList: {
        width: 500,
        height: 450,
    },
    cardMedia: {
        flex: 1

    },
    typography:{
        marginBottom: 10,
    },
    cardDetails :{
        flex: 2
    }
    
})

const Results = (props) => (
    <div>
    {
        props.status !== "error" &&
        props.articles.map((article, i) =>
        <Card className={props.classes.card} id={i}>
       
        <CardMedia
        className={props.classes.cardMedia}
        image={article.urlToImage}
        />
        <div className={props.classes.cardDetails}>
        <CardContent>
        <Typography component="h2" variant="h5" className={props.classes.typography}>
        {article.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" className={props.classes.typography}>
        {article.publishedAt}
        </Typography>
        <Typography variant="subtitle1" paragraph className={props.classes.typography}>
        {article.content}
        </Typography>
        <Typography variant="subtitle1" color="primary" className={props.classes.typography}>
        <a href={article.url} target="_blank"> Read more </a>
        </Typography>
        </CardContent>
        </div>
        </Card>
        )
    }
    {
        props.status === "nothing" && 
        <p>nothing found.</p>
    }
    {
        props.status === "error" && 
        <p>please type something.</p>
    }
    
    </div>
    )
    
    export default withStyles(styles)(Results)
    