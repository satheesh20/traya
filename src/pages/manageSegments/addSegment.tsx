import AddSegment from "../../components/segment_managment/addSegment";
import SiteTitle from "../../components/siteTitle";
import Layout from "../../components/layout";

function Add_Segment() {
    return ( 
    <>
    <SiteTitle title="Add Segment" />
    <Layout>
        <AddSegment />
    </Layout>
    </> 
    );
}

export default Add_Segment;