import CallToAction from '../../components/CallToAction';
import ColorPicker from '../../components/ColorPicker';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import Showcase from '../../components/Showcase';
import Image from 'next/image';

import TrimPicker from '../../components/TrimPicker';

import { getAllVehicleSlugs, getVehicleDataBySlug } from '../../lib/api'

export async function getStaticPaths() {
    const vehicles = await getAllVehicleSlugs();
    //console.log({vehicles});
    const paths = vehicles.map((vehicle) => {
        return {
            params: {
                id: vehicle.node.slug
            }
        }
    })
    
    return {
      paths: paths,
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps({params}) {
    const { id } = params;
    console.log({id});
    const vehicleData = await getVehicleDataBySlug(id);
    return {
      // Passed to the page component as props
      props: { 
        vehicleData
      },
    }
  }
  
  export default function SingleVehiclePage({ vehicleData }) {
    const { title, featuredImage, vehicleInformation } = vehicleData;
    const { showcase, trimLevels, vehicleColors } = vehicleInformation;
    return <Layout>
        <Showcase 
          subheadline={`Subaru ${title}`}
          headline={showcase.headline ? showcase.headline : null}
          backgroundImage={featuredImage ? featuredImage.node : null}
        />
        <Container>
          <TrimPicker trimLevels={trimLevels}/>
          <ColorPicker vehicleColors={vehicleColors}/>
        </Container>
        <CallToAction vehicleName={title}/>
    </Layout>
  }



/*
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout"

import { getAllCarSlugs, getSingleVehicleBySlug } from '../../lib/api'
// coming from single file
export async function getStaticPaths() {
    const slugs = getAllCarSlugs();
    const paths = slugs.map(slug => {
          return {
              params: {
                  id: slug,
              }
          }
    })
    return {
      paths,
      fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const slug = params.id;
    // Get external data from the file system, API, DB, etc.
    const data = getSingleVehicleBySlug(slug);
  
    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
      props: {
        data
      }
    }
  }
  

const SingleCarTemplate = ({data}) => {
    const { model, slug } = data;
    return <Layout>
        <h4>
            <Link href="/vehicles">
                &laquo; Back to Vehicles page
            </Link>
        </h4>
        <h1>Single Car</h1>
        <Image
          src={`/vehicles/${slug}/medium.webp`}
          alt={`${model} car`}
          width={350}
          height={185}
        />
    </Layout>
}
export default SingleCarTemplate;

*/