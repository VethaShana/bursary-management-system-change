import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles({
	card: {
		display: 'flex'
	},
	cardDetails: {
		flex: 1
	},
	cardMedia: {
		width: 160
	}
})

export default function FeaturedPost(props) {
	const classes = useStyles()
	const { post } = props

	return (
		<Grid item xs={12} md={6}>
			<CardActionArea component="a" href="#">
				<Card className={classes.card}>
					<div className={classes.cardDetails}>
						<CardContent>
							<Typography component="h2" variant="h5">
								{post.title}
							</Typography>
							<Typography variant="subtitle1" paragraph>
								{post.description}
							</Typography>
						</CardContent>
					</div>
				</Card>
			</CardActionArea>
		</Grid>
	)
}

FeaturedPost.propTypes = {
	post: PropTypes.object
}
