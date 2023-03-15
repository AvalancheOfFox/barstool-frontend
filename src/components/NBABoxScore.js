import React, {useState, useEffect} from 'react'

const testData = {
    "league": "NBA",
    "away_team" : {
      "team_id" : "oklahoma-city-thunder",
      "abbreviation" : "OKC",
      "active" : true,
      "first_name" : "Oklahoma City",
      "last_name" : "Thunder",
      "conference" : "West",
      "division" : "Northwest",
      "site_name" : "Chesapeake Energy Arena",
      "city" : "Oklahoma City",
      "state" : "Oklahoma",
      "full_name" : "Oklahoma City Thunder"
    },
    "home_team" : {
      "team_id" : "miami-heat",
      "abbreviation" : "MIA",
      "active" : true,
      "first_name" : "Miami",
      "last_name" : "Heat",
      "conference" : "East",
      "division" : "Southeast",
      "site_name" : "AmericanAirlines Arena",
      "city" : "Miami",
      "state" : "Florida",
      "full_name" : "Miami Heat"
    },
    "away_period_scores" : [ 26, 23, 22, 35 ],
    "home_period_scores" : [ 31, 28, 36, 26 ]
}

const scoreboard = {
    margin: "0 auto",
    textAlign: 'center',
    borderCollapse: 'collapse'
}

const cells = {
    padding: '10px'
}

const bold = {
    fontWeight: 'bold'
}

const borderCells = {
    borderCollapse: 'collapse',
    border: '1px solid gray'
}


const NBABoxScore = () => {
    const [data, setData] = useState(null)
    const [homeTeam, setHomeTeam] = useState(null)
    const [awayTeam, setAwayTeam] = useState(null)


    useEffect(() => {
        fetch('http://localhost:6969/feeds/nba')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(testData)
            setAwayTeam(data.away_team)
            setHomeTeam(data.home_team)
        })
    }, [])
    
    if(!data) {
        console.log('no data')
        // return <div> Loading ... </div>
    }

    //JSX

    return (
        <main>
      <div>
        <h1>NBA Scores</h1>
        <table style={scoreboard}>
          <thead>
            <tr>
              <th></th>
              <th style={cells}>{testData.away_team.full_name}</th>
              <th style={cells}>{testData.home_team.full_name}</th>
            </tr>
          </thead>
          <tbody>
            {testData.away_period_scores.map((score, index) => (
              <tr key={index} style={borderCells}>
                <td style={borderCells}>Q{index + 1}</td>
                <td style={borderCells}> {score}</td>
                <td>{testData.home_period_scores[index]}</td>
              </tr>
            ))}
          </tbody>
          <tfoot style={bold}>
            <tr>
              <td>Total</td>
              <td>{testData.away_period_scores.reduce((a, b) => a + b, 0)}</td>
              <td>{testData.home_period_scores.reduce((a, b) => a + b, 0)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
    )








}

export default NBABoxScore