import { Form } from "./components/Form.js";
import { UserList } from "./components/userList.js";


const app = document.getElementById("app");

const formComponent = new Form();
formComponent.render(app); //"render" means ew are printing the --- in the app

const userListComponent = new UserList();
userListComponent.render(app);