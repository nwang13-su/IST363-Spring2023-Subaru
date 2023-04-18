import { getAllVehicles } from '../../lib/api';
import Layout from '../../components/Layout';
import Link from 'next/link'

export async function getStaticProps() {
    const vehiclesData = await getAllVehicles();
    return {
      props: {
        vehiclesData
      }, // will be passed to the page component as props
    }
  }

const VehiclesPage = ({vehiclesData}) => {
    return (
        <Layout vehicles={vehiclesData}>
        <h1>Vehicles</h1>
        {vehiclesData.map((vehicle, index) => {
          const {slug, title} = vehicle.node;
            return <div key={index}>
                <h2><Link href={`/vehicles/${slug}`}>{title}</Link></h2>
            </div>
        })}
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