export class Router {
    pages = {};

    add(name, link) {
        this.pages[name] = link;
    };

    routes() {
        const link = document.querySelectorAll('a');

        for (let i of link) {
            i.addEventListener('click', (event) => {
                event.preventDefault();

                window.history.pushState({}, '', event.target.href);

                this.currentPage();
            });
        };
    };

    handle() {
        const { pathname } = window.location;
        const route = this.pages[pathname] || './pages/404.html';

        fetch(route).then((event) => (event.text())).then((event) => {
            document.querySelector('#page').innerHTML = event;
        });

        return pathname;
    };

    currentPage() {
        const body = document.querySelector('body');
        const page = this.handle();
        
        if (page == '/') {
            body.style.backgroundImage = 'url("./assets/backgroud-home.png")';

            this.pages['menuHome'].style.color = '#FFFFFF';
            this.pages['menuUniverse'].style.color = '#C4C4CC';
            this.pages['menuExplorer'].style.color = '#C4C4CC';

        } if (page == '/universe') {
            body.style.backgroundImage = 'url("./assets/backgroud-universe.png")';

            this.pages['menuUniverse'].style.color = '#FFFFFF';
            this.pages['menuHome'].style.color = '#C4C4CC';
            this.pages['menuExplorer'].style.color = '#C4C4CC';

        } if (page == '/explorer') {
            body.style.backgroundImage = 'url("./assets/backgroud-explorer.png")';

            this.pages['menuExplorer'].style.color = '#FFFFFF';
            this.pages['menuUniverse'].style.color = '#C4C4CC';
            this.pages['menuHome'].style.color = '#C4C4CC';

        } if (page != '/' & page != '/explorer' & page != '/universe' ) {
            body.style.backgroundImage = 'url("./assets/backgroud-not-fund.jpg")';
        };
    };
};