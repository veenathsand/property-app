import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import properties from "../data/properties.json";
import ImageGallery from "../components/ImageGallery";
import "../styles/PropertyPage.css";

function PropertyPage() {
    const { id } = useParams();
    const property = properties.find(p => p.id === Number(id));

    if (!property) return <p>Property not found</p>;

    return (
        <div className="property-page container">
            {/* HEADER */}
            <header className="property-header">
                <h1>£{property.price.toLocaleString()}</h1>
                <p className="property-meta">
                    {property.bedroom} bedrooms · {property.type} · {property.postcode}
                </p>
            </header>

            {/* GALLERY */}
            <ImageGallery images={property.images} />

            {/* DETAILS */}
            <section className="property-details">
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
                        <p>Map coming soon</p>
                    </TabPanel>
                </Tabs>
            </section>
        </div>
    );
}


export default PropertyPage;
