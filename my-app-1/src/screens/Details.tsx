import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Details = () => {
	const [data, setData]: any = useState({});
    let { id } = useParams();

	const getData = async () => {

		const customOptions = {
			method: "GET",
			url: "https://api.spacexdata.com/v3/launches",
		};

		axios(customOptions)
			.then((response) => {
				console.log(response.data)

                const mission = response.data.find((x: any) => x.flight_number == id)
				setData(mission)
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

                <img src={data?.links?.mission_patch_small} alt="mission_patch_small"/>

                    <ul>
                        <li>Flight number: {data?.flight_number}</li>
                    </ul>
                    <ul>
                        <li>Mission name: {data?.mission_name}</li>
                    </ul>
                    <ul>
                        <li>Launch date: {data?.launch_date_local}</li>
                    </ul>
                    <ul>
                        <li>Launch year: {data?.launch_year}</li>
                    </ul>
                    <ul>
                        <li>Article link: {data?.article_link}</li>
                    </ul>
                    <ul>
                        <li>Wikipedia: {data?.wikipedia}</li>
                    </ul>
                    <ul>
                        <li>Mission name: {data?.mission_name}</li>
                    </ul>
				</div>
			</div>
		</div>
	);
};
