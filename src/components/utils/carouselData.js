import bg1 from "../../assets/background-images/background-1.jpg";
import bg2 from "../../assets/background-images/background-2.jpg";
import bg3 from "../../assets/background-images/background-3.jpg";
import bg4 from "../../assets/background-images/background-4.jpg";
import bg5 from "../../assets/background-images/background-5.jpg";
import bg6 from "../../assets/background-images/background-6.jpg";

export const SLIDES = [
  {
    img: `https://images.unsplash.com/photo-1571716846252-df1324ce17bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
  },
  {
    img: `https://images.unsplash.com/photo-1493185659424-16c86605dd4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
  },
  {
    img: `https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80`,
  },
  {
    img: `https://images.unsplash.com/photo-1598550468793-d6306cd481c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
  },
  {
    img: `https://images.unsplash.com/photo-1591462391941-8e7b33fc4604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1554&q=80`,
  },
  {
    img: `https://images.unsplash.com/photo-1558492426-df14e290aefa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
  },
];

export const BACKUP_SLIDES = [
  { img: bg1 },
  { img: bg2 },
  { img: bg3 },
  { img: bg4 },
  { img: bg5 },
  { img: bg6 },
];

export const generateKey = (pre) => {
  const key = `${pre}_${new Date().getTime() + Math.random()}`;
  return key;
};

export const DARKMODE_SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1498736297812-3a08021f206f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1531594896955-305cf81269f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];
