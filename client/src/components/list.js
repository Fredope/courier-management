import React, { Component } from 'react';
import './list.css';

import Shipment from './shipment';

export default class List extends Component {
  render() {
    return (
      <div className="list">
      	<table>
      		<caption>{this.props.caption}</caption>
      		<thead>
      			<tr>
      				{this.props.headings.map(heading => {
      					return <th scope="col" key={heading}>{heading}</th>
      				})}
      			</tr>
      		</thead>
      		<tbody>
      			{this.props.shipments.map(shipment => {
      				return <Shipment key={shipment._id} orderStatus={shipment.status}/>
      			})}
      		</tbody>
      	</table>
      </div>
    );
  }
}
