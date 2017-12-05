import React from 'react'
import NavBar from '../navbar/navbar.js'
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme  } from 'victory'

export default class ProfileContainer extends React.Component {

  render() {
    const data = [
      {quarter: 1, earnings: 13000},
      {quarter: 2, earnings: 16500},
      {quarter: 3, earnings: 14250},
      {quarter: 4, earnings: 19000}
    ];
    return(
      <div>
        <NavBar />
        <VictoryChart theme={VictoryTheme.material} domainPadding={20}>

          <VictoryAxis
         // tickValues specifies both the number of ticks and where
         // they are placed on the axis
           tickValues={[1, 2, 3, 4]}
           tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
       <VictoryAxis
         dependentAxis
         // tickFormat specifies how ticks should be displayed
         tickFormat={(x) => (`$${x / 1000}k`)}
       />
          <VictoryLine data={data}
            x="quarter"
            y="earnings"
          />
        </VictoryChart>
      </div>
    )
  }
}
