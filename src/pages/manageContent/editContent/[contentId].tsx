import EditContent from "../../../components/manage_content/EditContent";
import SiteTitle from "../../../components/siteTitle";
import Layout from "../../../components/layout";

function EditContentwithId() {
    return ( 
        <>
            <SiteTitle title="edit-content" />
            <Layout>
                <EditContent />
            </Layout>
        </>
     );
}

export default EditContentwithId;