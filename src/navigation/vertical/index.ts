import { AUDIT_PARTNER } from "../../utils/constants";
export default [
  {
    title: AUDIT_PARTNER.MENU.spanish.home,
    to: { name: 'sgaddsg' },  // /SG/addsg
    icon: { icon: 'tabler-smart-home' },
    //disabled: true
  },
  {
    title: 'Ingresos',
    to: { name: 'ingresos-ingresos' },    // /Ingresos/ingresos
    icon: { icon: 'tabler-shopping-cart' },
  },
  {
    title: 'ingresos-replica',
    to: { name: 'second-page' },      // /second-page
    icon: { icon: 'tabler-key' },
  },
  {
    title: 'tablas',
    to: { name: 'ingresos-registro-ingresos' },   ///Ingresos/registroIngresos
    icon: { icon: 'tabler-key' },
  },

]
