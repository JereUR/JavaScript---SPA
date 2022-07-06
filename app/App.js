import { Loader } from "./components/Loader.js";
import { Title } from "./components/Title.js";
import { ajax } from "./helpers/ajax.js";
import api from "./helpers/wp_api.js";

export function App() {
  const d = document,
    $root = d.getElementById("root");
  $root.appendChild(Title());
  $root.appendChild(Loader());

}
