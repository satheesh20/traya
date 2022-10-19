import SiteTitle from "../../components/siteTitle";
import AddUser from "../../components/user_managment/addUser";
import Layout from "../../components/layout";

function AddUsers() {
    return ( 
        <>
        <SiteTitle title="add-user" />
        <Layout>
            <AddUser />
        </Layout>
        </>
     );
}

export default AddUsers;