import { useState } from 'react';

import { getAllVehicles } from '../../lib/api';

import Container from '../../components/Container';
import Grid from '../../components/Grid';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Tabs from '../../components/Tabs';

import { filterAllVehicleTypes } from '../../lib/utilities';

export async function getStaticProps() {
    const vehiclesData = await getAllVehicles();
    return {
      props: {
        vehiclesData
      }, // will be passed to the page component as props
    }
  }

const VehiclesPage = ({vehiclesData}) => {
    const [activeVehicleType, setActiveVehicleType] = useState("all");
    const vehicleTypes = ["all", ...filterAllVehicleTypes(vehiclesData)];

    const filteredVehicles = vehiclesData.filter((vehicle) => {
        const { vehicleTypes } = vehicle.node.vehicleInformation;
        return activeVehicleType === "all" || vehicleTypes.includes(activeVehicleType)
    });
    return (
        <Layout>
          <Container>
            <Heading 
              level={1} 
              textAlign="center"
            >Vehicles</Heading>
            <Tabs 
              items={vehicleTypes} 
              activeItem={activeVehicleType}
              changeHandler={setActiveVehicleType}
            />
            <Grid 
              activeItem={activeVehicleType}
              items={filteredVehicles}
            />
          </Container>
        </Layout>
    )
}
export default VehiclesPage

/*
import Image from "next/image";
import Layout from "../../components/Layout"
import Link from 'next/link';

import { getAllVehicles } from '../../lib/api';

export async function getStaticProps() {
    // Get external data from the file system, API, DB, etc.
    const data = getAllVehicles();
    
    // The value of the 'props' key will be
    // passed to the 'Home' component
  return {
      props: {
        data
    }    
  }
}
const VehiclesPage = ({ data }) => {
    return <Layout>
        <h1>Vehicles</h1>
        {data.map((car) => {
        const {model, slug} =car;
        return <article>
            <Link href={`/vehicles/${slug}`}>
                <Image
                    src={`/vehicles/${slug}/medium.webp`}
                    alt={`${model} car`}
                    width={350}
                    height={185}
                />
            </Link>
            <h2>{ model }</h2>  
        </article>
    })}
    </Layout>
}
export default VehiclesPage
*/