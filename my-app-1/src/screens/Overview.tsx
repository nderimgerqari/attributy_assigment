import { Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";

export const Overview = () => {
	const [data, setData] = useState([]);

	const navigate = useNavigate();


	const edit = (id: any) => {
		navigate(`/details/${id}`);
	};

	const columns: any = [
		{
			title: "Image",
			dataIndex: "mission_name",
			key: "mission_name",
		},
		{
			title: "Mission name",
			dataIndex: "mission_name",
			key: "mission_name",
		},
		{
			title: "Flight number",
			dataIndex: "flight_number",
			key: "flight_number",
		},
		{
			title: 'operation',
			dataIndex: 'flight_number',
			render: (item: any) => {
				return (
					<Typography.Link onClick={() => edit(item)}>
						View
					</Typography.Link>
				)
			},
		},
	];

	const getData = async () => {

		const customOptions = {

			method: "GET",
			url: "https://api.spacexdata.com/v3/launches",
		};

		axios(customOptions)
			.then((response) => {
				console.log(response.data)
				setData(response.data)
			})
			.catch((error) => {
				console.log(error?.response?.data);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className='overview__wrapper'>


			<div className='overview__termin'>
				<div className='overview-table'>
					<Table columns={columns} dataSource={data} pagination={false} />
				</div>
			</div>
		</div>
	);
};
