import React from 'react';
import { DataItem } from './MenuItemDataDesc.styled';

const MenuItemDataDesc = ({dataItem}:any) => {
  return (
	<DataItem>
		{dataItem && dataItem.map((item:any, id:number) => (
			<ul key={id}>
				<p>{item.title}</p>
				{item.data && item.data.map((item:any, id:number) => (
				<li key={id}>{item}</li>
				))}
			</ul>
		))}
	</DataItem>
  )
}
export default MenuItemDataDesc