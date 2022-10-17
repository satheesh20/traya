import AddContent from "../../components/manage_content/addContent";
import SiteTitle from "../../components/siteTitle";
import Layout from "../layout";

function Add_Content() {
    return ( 
        <>
            <SiteTitle title='Add Component'/>
            <Layout>
                <AddContent /> 
            </Layout>
        </>
    );
}

export default Add_Content;