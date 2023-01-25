import { Router } from "./routes.js";

const router = new Router();

router.routes();

router.add('/', './pages/home.html');
router.add('/universe', './pages/universe.html');
router.add('/explorer', './pages/explorer.html');

router.add('menuHome', document.querySelector("#menu-home"));
router.add('menuUniverse', document.querySelector("#menu-universe"));
router.add('menuExplorer', document.querySelector("#menu-explorer"));

router.currentPage();

window.onpopstate = () => router.handle();
window.route = () => router.routes()