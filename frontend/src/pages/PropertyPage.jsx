import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import properties from "../data/properties.json";
import ImageGallery from "../components/ImageGallery";

function PropertyPage() {
    const { id } = useParams();
    const property = properties.find((p) => p.id === Number(id));

    if (!property) {
        return <p>Property not found.</p>;
    }

    return (
        <div className="container">
            <h1>
                £{property.price.toLocaleString()} – {property.type}
            </h1>
            <p>
                {property.bedrooms} bedrooms · {property.postcode}
            </p>

            {/* Image Gallery */}
            <ImageGallery images={property.images} />

            {/* Tabs */}
            <Tabs>
                <TabList>
                    <Tab>Description</Tab>
                    <Tab>Floor Plan</Tab>
                    <Tab>Location</Tab>
                </TabList>

                <TabPanel>
                    <p>{property.longDescription}</p>
                </TabPanel>

                <TabPanel>
                    <img
                        src={property.floorPlan}
                        alt="Floor Plan"
                        className="floorplan"
                    />
                </TabPanel>

                <TabPanel>
                    <iframe
                        title="Google Map"
                        src={property.location}
                        width="100%"
                        height="300"
                        loading="lazy"
                    ></iframe>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default PropertyPage;