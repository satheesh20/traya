import SiteTitle from "../../components/siteTitle";
import Manage_content from "../../components/manage_content";
import Layout from "../../components/layout";

function User_Managment() {
    return ( 
        <>
            <SiteTitle title="Content Management"/>
            <Layout>
                <Manage_content/>
            </Layout>
        </>
     );
}

export default User_Managment;