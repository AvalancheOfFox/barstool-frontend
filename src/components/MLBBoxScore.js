import React, {useState, useEffect} from 'react'


const teamsInfo =[
    {
        "name": "Seattle Mariners",
        "league": "mlb",
        "colors": {
          "hex"   :   ["0C2C56",      "005C5C",           "C4CED4"]
        }
    },
    {
        "name": "Los Angeles Angels of Anaheim",
        "league": "mlb",
        "colors": {
          "hex"   :   ["BA0021",          "003263"]
        }
      },

    ]

const mainStyle = {
    backgroundColor: 'white',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    padding: "5px",
    margin: "auto",
   
}

const tableStyle = {
    margin: "5px",
    border: "1px solid grey",
    borderCollapse: "collapse"
}

const cellStyle = {
    border: "1px solid grey",
    padding: "10px",
}


const teamTitle = {
    fontWeight: "bold",
    margin: "5px",
    padding: "10px"
}

const lowerDivHome ={
    display: "block",
    backgroundColor: "#0C2C56",
    color: "white"
}

const lowerDivAway = {
    display: 'block',
    backgroundColor: "#BA0021",
    color: "white" 
}

const statsBlock = {
    backgroundColor: "lightgray",
    fontWeight: "bold",
    // margin: "5px",
    padding: "5px 10px 5px 10px",

}

const testData ={
    "league": "MLB",
    "away_team" : {
      "team_id" : "seattle-mariners",
      "abbreviation" : "SEA",
      "active" : true,
      "first_name" : "Seattle",
      "last_name" : "Mariners",
      "conference" : "American",
      "division" : "West",
      "site_name" : "Safeco Field",
      "city" : "Seattle",
      "state" : "Washington",
      "full_name" : "Seattle Mariners"
    },
    "home_team" : {
      "team_id" : "los-angeles-angels",
      "abbreviation" : "LAA",
      "active" : true,
      "first_name" : "Los Angeles",
      "last_name" : "Angels",
      "conference" : "American",
      "division" : "West",
      "site_name" : "Angel Stadium of Anaheim",
      "city" : "Anaheim",
      "state" : "California",
      "full_name" : "Los Angeles Angels"
    },
    "away_period_scores" : [ 0, 0, 2, 1, 0, 0, 0, 0, 0 ],
    "home_period_scores" : [ 0, 2, 0, 0, 0, 0, 1, 0, 1 ],
    "away_batter_totals" : {
        "sacrifices" : 1,
        "at_bats" : 29,
        "plate_appearances" : 34,
        "singles" : 3,
        "doubles" : 1,
        "triples" : 0,
        "home_runs" : 1,
        "sac_flies" : 1,
        "sac_hits" : 0,
        "stolen_bases" : 0,
        "caught_stealing" : 1,
        "rbi_with_two_outs" : 0,
        "total_bases" : 9,
        "runs" : 3,
        "hits" : 5,
        "rbi" : 3,
        "walks" : 4,
        "strike_outs" : 6,
        "left_on_base" : 10,
        "hit_by_pitch" : 0,
        "ops" : 0.575,
        "avg" : 0.172,
        "obp" : 0.265,
        "slg" : 0.31,
        "at_bats_per_home_run" : 29.0,
        "at_bats_per_rbi" : 9.667,
        "walk_rate" : 0.118,
        "plate_appearances_per_rbi" : 11.333,
        "plate_appearances_per_home_run" : 34.0,
        "extra_base_hits" : 2,
        "stolen_base_average" : 0.0,
        "strikeout_rate" : 0.207,
        "ops_string" : ".575",
        "slg_string" : ".310",
        "obp_string" : ".265",
        "avg_string" : ".172",
        "batting_highlights" : "5-29, HR, 3 R, 3 RBI, 2B"
      },
      "home_batter_totals" : {
        "sacrifices" : 2,
        "at_bats" : 33,
        "plate_appearances" : 38,
        "singles" : 9,
        "doubles" : 1,
        "triples" : 0,
        "home_runs" : 0,
        "sac_flies" : 0,
        "sac_hits" : 2,
        "stolen_bases" : 1,
        "caught_stealing" : 0,
        "rbi_with_two_outs" : 1,
        "total_bases" : 11,
        "runs" : 4,
        "hits" : 10,
        "rbi" : 4,
        "walks" : 3,
        "strike_outs" : 9,
        "left_on_base" : 11,
        "hit_by_pitch" : 0,
        "ops" : 0.675,
        "avg" : 0.303,
        "obp" : 0.342,
        "slg" : 0.333,
        "at_bats_per_home_run" : 0.0,
        "at_bats_per_rbi" : 8.25,
        "walk_rate" : 0.079,
        "plate_appearances_per_rbi" : 9.5,
        "plate_appearances_per_home_run" : 0.0,
        "extra_base_hits" : 1,
        "stolen_base_average" : 1.0,
        "strikeout_rate" : 0.273,
        "ops_string" : ".675",
        "slg_string" : ".333",
        "obp_string" : ".342",
        "avg_string" : ".303",
        "batting_highlights" : "10-33, 4 R, 4 RBI, 2B, SB"
    },
    "away_errors" : 1,
    "home_errors" : 0,
}

function generateRows(data) {
    console.log({'data:': data})
    const rows = [];
    
    // Create the first row for the away team
    const awayRow = (
      <tr key="away">
        <td style={teamTitle}>{data.away_team.abbreviation}</td>
        {data.away_period_scores.map((score, index) => <td key={`away-${index}`} style={cellStyle}>{score}</td>)}
       
          <td style={statsBlock}>{data.away_batter_totals.runs}</td>
          <td style={statsBlock}>{data.away_batter_totals.hits}</td>
          <td style={statsBlock}>{data.away_errors}</td>
        
      </tr>
    );
    rows.push(awayRow);
    
    // Create the second row for the home team
    const homeRow = (
      <tr key="home">
        <td style={teamTitle}>{data.home_team.abbreviation}</td>
        {data.home_period_scores.map((score, index) => <td key={`home-${index}`} style={cellStyle}>{score}</td>)}
       
          <td style={statsBlock}>{data.home_batter_totals.runs}</td>
          <td style={statsBlock}>{data.home_batter_totals.hits}</td>
          <td style={statsBlock}>{data.home_errors}</td>
        
      </tr>
    );
    rows.push(homeRow);
    
    return rows;
  }

const MLBBoxScore = () => {
    const [data, setData] = useState(null)
    const [awayTeam, setAwayTeam] = useState(null)
    const [homeTeam, setHomeTeam] = useState(null)

    useEffect(() => {
        fetch('http://localhost:6969/feeds/mlb')
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
 
      //JSX BELOW

      return (
        <main style={mainStyle}>
        <div >
          {/* <h1> {data.away_team.abbreviation} @ {data.home_team.abbreviation}</h1> */}
        
        <table style={tableStyle}>
            <thead>
                <tr>
                    <th></th>
                    <th>1</th>
				    <th>2</th>
				    <th>3</th>
				    <th>4</th>
				    <th>5</th>
				    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th style={statsBlock}>R</th>
                    <th style={statsBlock}>H</th>
                    <th style={statsBlock}>E</th>            
                </tr>
            </thead>
            
        <tbody>
            {generateRows(testData)}
        </tbody>

        </table>
        

        
        </div>
        <div style={{display: 'flex'}}>
            <div style={lowerDivAway}> {testData.away_team.last_name} </div> @ <div style={lowerDivHome}> {testData.home_team.last_name}</div>

        </div>
        </main>
      );
 }; // end of component
    
    export default MLBBoxScore;





