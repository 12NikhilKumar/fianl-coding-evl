import { Route, Switch } from "react-router-dom"
import { Admin } from "../pages/admin"
import { Dashboard } from "../pages/dashbord"
import Userinput from "../pages/user"

const Allroutes = ()=>{
    return (
        <>
                <Route exact path="/">
                    <Userinput/>
                </Route>
                <Route exact path="/dash">
                    <Dashboard/>
                </Route>
                <Route exact path="/admin">
                    <Admin/>
                </Route>
        </>
    )
}
export default Allroutes