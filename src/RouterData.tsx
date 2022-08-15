import React from 'react';
import { GoHome } from 'react-icons/go';
import { AiOutlineUserAdd } from 'react-icons/ai';
const AllDoctor = React.lazy(() => import('./Component/Doctors/AllDoctor'));
const AllPatientsView = React.lazy(() => import('./Component/Patients/AllPatientsView'));
const MainDashboard = React.lazy(() => import('./Component/MainDashboard/MainDashboard'));
const ViewDoctor = React.lazy(() => import('./Component/Doctors/ViewDoctor'));
const ViewPatients = React.lazy(() => import('./Component/Patients/ViewPatients'));
const SignupPage = React.lazy(() => import('./Component/LoginComponent/SignupPage'));
const ProductsPage = React.lazy(() => import('./Component/ProductsPage/ProductsPage'));
export const RouterData = [
  {
    path: '/',
    component: <SignupPage />,
    layout: '/'
  },
  {
    name: 'Dashbaord',
    path: '/maindashboard',
    component: <MainDashboard />,
    submenu: false,
    layout: '/dashboard',
    key: 'sub1',
    visibleInMenu: true,
    icon: <GoHome />
  },
  {
    path: '/viewPatients',
    name: 'All Patients',
    layout: '/dashboard',
    icon: <AiOutlineUserAdd />,
    key: 'sub-patient1',
    component: <ViewPatients />,
    visibleInMenu: false
  },
  {
    path: '/ViewDoctor',
    name: 'View Doctor',
    layout: '/dashboard',
    icon: <AiOutlineUserAdd />,
    key: 'sub-doc2',
    component: <ViewDoctor />,
    visibleInMenu: false
  },

  {
    name: 'Doctors',
    path: '',
    layout: '/dashboard',
    submenu: true,
    key: 'sub4',
    icon: <AiOutlineUserAdd />,
    menuItems: [
      {
        path: '/AllDoctor',
        name: 'All Doctor',
        layout: '/dashboard',
        icon: <AiOutlineUserAdd />,
        key: 'sub-doc1',
        component: <AllDoctor />,
        visibleInMenu: true
      }
    ]
  },
  {
    name: 'Patients',
    path: '',
    // component: <Patients />,
    layout: '/dashboard',
    key: 'sub5',
    submenu: true,
    icon: <AiOutlineUserAdd />,
    menuItems: [
      {
        path: '/AllPatients',
        name: 'All Patients',
        layout: '/dashboard',
        icon: <AiOutlineUserAdd />,
        key: 'sub-patient1',
        component: <AllPatientsView />,
        visibleInMenu: true
      }
    ]
  },
  {
    path: '/Products',
    name: 'Products',
    layout: '/dashboard',
    icon: <AiOutlineUserAdd />,
    key: 'product1',
    component: <ProductsPage />,
    visibleInMenu: true
  }
];
