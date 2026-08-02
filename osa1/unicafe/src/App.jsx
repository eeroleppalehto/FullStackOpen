import { useState } from 'react'


const Button = ({text, onClick}) => {
	return <button onClick={onClick}>{text}</button>
}

const StatisticsLine = ({text, value}) => {
	return <tr>
		<td>{text}</td>
		<td>{value}</td>
	</tr> 
}

const Statistics = ({good, neutral, bad}) => {
	const total = good + neutral + bad
	const isNoFeedBack = total === 0
	
	let content
	
	if (isNoFeedBack) {
		content = <p>No Feedback given</p> 
	} else {
		const positiveRate = `${100*(good / total)}%`
		const average = (good - bad) / total

		const lines = [
			<StatisticsLine key="Good" text="Good" value={good} />,
			<StatisticsLine key="Neutral" text="Neutral" value={neutral} />,
			<StatisticsLine key="Bad" text="Bad" value={bad} />,
			<StatisticsLine key="Average" text="Average" value={average} />,
			<StatisticsLine key="Positive" text="Positive" value={positiveRate} />
		]

		content = <table><tbody>{lines}</tbody></table>
	}


	return (
		<>
			<h1>Statistics</h1>
			{content}
		</>
	)
}


const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	return (
		<div>
			<h1>Give Feedback</h1>
			<Button text="Good" onClick={() => setGood(good + 1)}/>
			<Button text="Neutral" onClick={() => setNeutral(neutral + 1)}/>
			<Button text="Bad" onClick={() => setBad(bad + 1)}/>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
  	)
}

export default App