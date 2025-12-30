import { useParams, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import properties from "../data/properties.json";
import ImageGallery from "../components/ImageGallery";
import "../styles/PropertyPage.css";

function PropertyPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const property = properties.find(p => p.id === Number(id));

    if (!property) return <p>Property not found</p>;

    return (
        <div className="property-page container">
            {/* BACK BUTTON */}
            <button
                className="back-btn"
                onClick={() => navigate(-1)}
            >
                ← Back to Search
            </button>


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
                        <Tab><b>Description</b></Tab>
                        <Tab><b>Floor Plan</b></Tab>
                        <Tab><b>Location</b></Tab>
                    </TabList>

                    <TabPanel>
                        <p className="long-description">{property.longDescription}</p>
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
                            src={property.location}
                            width="100%"
                            height="350"
                            style={{ border: 0, borderRadius: "12px" }}
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    </TabPanel>

                </Tabs>
            </section>
        </div>
    );
}

export default PropertyPage;
