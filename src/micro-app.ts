export const microApps = [
  {
    name: "create-react-app18",
    entry: process.env.REACT_APP_create_react_app18 || "",
    activeRule: "/create-react",
  },
  {
    name: "vite-vue3",
    entry: process.env.REACT_APP_vite_vue3 || "",
    activeRule: "/vite-vue3",
  },
  {
    name: "vuecli-vue3",
    entry: process.env.REACT_APP_vuecli_vue3 || "",
    activeRule: "/vuecli-vue3",
  },
  {
    name: "vue-cli-vue2",
    entry: process.env.REACT_APP_vueclivue2 || "",
    activeRule: "/vue-cli-vue2",
  },
  {
    name: "vite-react18",
    entry: process.env.REACT_APP_vite_react18 || "",
    activeRule: "/vite-react18",
  },
];

const apps = microApps.map((item) => {
  return {
    ...item,
    container: "#subapp-viewport",
    props: {
      routerBase: item.activeRule, // 下发基础路由
    },
  };
});

export default apps;
