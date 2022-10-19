import AddComponent from "../../components/manageComponents/addComponent";
import SiteTitle from "../../components/siteTitle";
import Layout from "../../components/layout";

function Add_Component() {
    return ( 
        <>
            <SiteTitle title='Add Component'/>
            <Layout>
                <AddComponent /> 
            </Layout>
        </>
    );
}

export default Add_Component;