import Segment_Management from "../../components/segment_managment";
import SiteTitle from "../../components/siteTitle";
import Layout from "../layout";

function ManageSegent() {
    return (
            <>
                <SiteTitle title="Manage Segment" />
                <Layout>
                    <Segment_Management />
                </Layout>
            </> 
    );
}

export default ManageSegent;