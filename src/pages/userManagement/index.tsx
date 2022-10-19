import SiteTitle from "../../components/siteTitle";
import USerManagment from "../../components/user_managment";
import Layout from "../../components/layout";

function User_Managment() {
    return ( 
        <>
            <SiteTitle title="user-management"/>
            <Layout>
                <USerManagment/>
            </Layout>
        </>
     );
}

export default User_Managment;