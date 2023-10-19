// routes.js

const loadView = (view) => {
  return () => import(`../views/${view}.vue`);
};

export default [
  {
    path: '/',
    redirect: { name: 'Dashboard' }, // Tentukan halaman default di sini
  },
  {
    path: '/service-talent',
    name: 'ServiceTalentPage',
    component: loadView('ServiceTalent/IndexPage'),
  },
  {
    path: '/login',
    name: 'Login',
    component: loadView('Login/IndexPage'),
  },
  {
    path: '/register',
    name: 'Register',
    component: loadView('Login/RegisterPage'),
  },
  {
    path: '/form',
    name: 'Form',
    component: loadView('Form/IndexPage'),
  },
  { 
    path: '/dashboard',
    name: 'Dashboard',
    component: loadView('Home'), 
  },
  { 
    path: '/about',
    name: 'About',
    component: loadView('Main/About'), 
  },
  { 
    path: '/contact',
    name: 'ContactUs',
    component: loadView('Main/Contact'), 
  },
  { 
    path: '/member',
    name: 'Member',
    component: loadView('Member/IndexPage'), 
  },
];
