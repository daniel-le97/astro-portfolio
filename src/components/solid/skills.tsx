import { For, onMount } from "solid-js";
import { createStore } from "solid-js/store";
let allSkills = [
    {
        title: "HTML5",
        src: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
        type: 'front-end'
    },
    {
        title: "CSS3",
        src: "https://armortechs.com/upload/image/blog/css-variables-css-3-logo.png",
        type: 'front-end'
    },
    {
        title: "JavaScript ES6",
        src: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png",
        type: 'front-end'
    },
    {
        title: "C-Sharp",
        src: "https://1.bp.blogspot.com/-U8C6UaajxeA/XV1J6Yo6x2I/AAAAAAAABQo/3v2OEgTGn9ggUqArXtGZpl_6zqbo09nmACLcBGAs/s1600/csharp_logo.png",
    },
    {
        title: "DotNet Core",
        src: "https://wpguru.co.uk/wp-content/uploads/2020/04/dotnet-logo.png",
    },
    {
        title: "Node Js",
        src: "https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png",
    },
    {
        title: "Vue.js 3",
        src: "https://imgs.search.brave.com/Hsy3vsixUOO8EgH22as2LpgNP6zF5hEx6P-pDoc0n0c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kMzN3/dWJyZmtpMGw2OC5j/bG91ZGZyb250Lm5l/dC83MThjNmU0ODk1/NjI0OTEyMWNmM2Nj/YTFhMjJhOTlmODM3/MmEzZjBkLzVmNjg5/L19udXh0L2ltZy9j/MmE2MDVmLnBuZw",
        type: 'front-end'
    },
    {
        title: "Svelte",
        src: "https://imgs.search.brave.com/AtFnftxXfySR-pIt0LrD64jshxNlrFjMfr9etQbLNAU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2dp/bGJhcmJhcmEvbG9n/b3MvbWFpbi9sb2dv/cy9zdmVsdGUtaWNv/bi5zdmc.svg",
        type: 'front-end'
    },
    {
        title: "React",
        src: "https://imgs.search.brave.com/qlFAtMUjOJ06EBhykDOXGUrmQ4UM2GdOmNiPAzXjS5w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvUmVhY3Rf/bG9nb19sb2dvdHlw/ZV9lbWJsZW0tNzAw/eDYyNi5wbmc",
        type: 'front-end'
    },
    {
        title: "Next.js",
        src: "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png",
    },
    {
        title: "Nuxt.js",
        src: "https://imgs.search.brave.com/ac3WGz-DgM03071K34NEHSDn6LTb8cM2YIrFfa7YAcM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FlL051eHRfbG9n/by5zdmc.svg",
    },

    {
        title: "BootStrap",
        src: "https://pluspng.com/img-png/bootstrap-logo-vector-png-bem-with-bootstrap-bootstrap-logo-1024.png",
        type: 'front-end'
    },
    {
        title: "TailWind CSS",
        src: "https://media.zeemly.com/zeemly/product/tailwind-css.png",
        type: 'front-end'
    },
    {
        title: "Sass",
        src: "https://vanseodesign.com/blog/wp-content/uploads/2015/09/sass-logo-2.png",
        type: 'front-end'
    },
    {
        title: "MongoDb",
        src: "https://pluspng.com/img-png/logo-mongodb-png-hundreds-of-popular-mongodb-articles-400.png",
        type: 'back-end'
    },

    {
        title: "MySQL",
        src: "https://findicons.com/files/icons/977/rrze/720/database_mysql.png",
    },
    {
        title: "PostgreSQL",
        src: "https://cdn.freebiesupply.com/logos/thumbs/2x/postgresql-logo.png",
    },
    {
        title: "Prisma.io",
        src: "https://imgs.search.brave.com/KhQAV89DalGsyHLIk36WzppNhJCg02NbIehcQjuSTeU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nL28vYnVz/aW5lc3MvdnNjb2Rl/LXByb2dyYW0taXRl/bS1pY29uL3ByaXNt/YS5wbmc",
    },
    {
        title: "Auth0",
        src: "https://www.pngrepo.com/png/349297/512/auth0.png",
    },
    {
        title: "Auth.js",
        src: "https://authjs.dev/img/logo/logo-sm.webp",
    },

    {
        title: "Github",
        src: "https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg",
    },

    {
        title: "Git",
        src: "https://3.bp.blogspot.com/-xhNpNJJyQhk/XIe4GY78RQI/AAAAAAAAItc/ouueFUj2Hqo5dntmnKqEaBJR4KQ4Q2K3ACK4BGAYYCw/s1600/logo%2Bgit%2Bicon.png",
    },
    {
        title: "FireBase",
        src: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
    },
    {
        title: "PocketBase",
        src: "https://seeklogo.com/images/P/pocketbase-logo-CA73994F09-seeklogo.com.png",
    },
]
const SkillsComponent = () => {
  
    const [ skills, setSkills ] = createStore<typeof allSkills>([]);

    function getLogs(){
        setSkills(allSkills.filter(skill => skill.type === 'front-end'))
    }
    function getDatabases(){
        setSkills(allSkills.filter(skill => skill.type === 'database'))
    }

    onMount(() => setSkills(allSkills))

    return (

        <div class="w-full max-w-6xl space-y-2">
            <div class="relative border border-default bg-offset px-6 pb-4 pt-8">
                <h3
                    class="absolute right-4 top-0 -translate-y-1/2 uppercase tracking-tight text-xs"
                >
                    <div class="badge-container">
                        <span class="rounded-full border border-current bg-default px-4 py-1"
                        ><button onclick={getLogs}>Programming Languages</button></span>
                        <span class="rounded-full border border-current bg-default px-4 py-1"
                        ><button onclick={getDatabases}>Databases</button></span>
                        <span class="rounded-full border border-current bg-default px-4 py-1"
                        >Frameworks</span>
                        <span class="rounded-full border border-current bg-default px-4 py-1"
                        >Technology Platforms</span>
                    </div>
                </h3>
                <ul class="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
                    <For each={ skills }>{ ( skill ) => (
                        <li>
                            <div class="flex flex-col items-center gap-2">
                                <img src={ skill.src } alt={ skill.title } class="h-12" />

                                <span>{ skill.title }</span>
                            </div>
                        </li>
                    ) }</For>
                </ul>
            </div >
        </div >


    );
};

export default SkillsComponent;

