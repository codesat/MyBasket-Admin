import avatarurl from './assets/puzzle.png'
import p1 from './assets/images/prdimg.png'
import p2 from './assets/images/prdimg2.jpg'
import p3 from './assets/images/real1.jpg'
import p4 from './assets/images/dell2.jpg'

export const data = [
    {
      name: 'Jan',
     "Active User": 4000,

    },
    {
      name: 'Feb',
     "Active User": 3000,

    },
    {
      name: 'Mar',
     "Active User": 2000,

    },
    {
      name: 'Apr',
      "Active User": 2780,

    },
    {
      name: 'May',
      "Active User": 1890,

    },
    {
      name: 'Jun',
     "Active User": 2390,

    },
    {
      name: 'Jul',
      "Active User": 3490,

    },
  ];

  export const proddata = [
    {
      name: 'Jan',
     "Sales": 4000,

    },
    {
      name: 'Feb',
     "Sales": 3000,

    },
    {
      name: 'Mar',
     "Sales": 2000,
    },

  ];

  const prdarray=[
    "https://res.cloudinary.com/codercloud/image/upload/v1657779214/productimages/prdimg_tlzwm8.png",
    "https://res.cloudinary.com/codercloud/image/upload/v1657779225/productimages/dell2_bwt31r.jpg",
    "https://res.cloudinary.com/codercloud/image/upload/v1657779231/productimages/real2_lewb05.jpg",
    "https://res.cloudinary.com/codercloud/image/upload/v1657779214/productimages/prdimg2_qmpce6.jpg",
  ];

  export const productrows = [
    {
         id: 1,
          name: 'Cello Bottle',
          imgurl:prdarray[0],
          stock:12,
          status:"active",
          price:"$125.84"
          },
    {
    id: 2,
        name: 'Dell Laptop',
        imgurl:prdarray[1],
        stock:45,
        status:"active",
        price:"$150.84"
        },
{
    id: 3,
        name: 'Realme Phone',
        imgurl:prdarray[2],
        stock:89,
        status:"active",
        price:"$230"
        },
{
id: 4,
    name: 'Apple Smart Watch',
    imgurl:prdarray[3],
    stock:98,
    status:"out of stock",
    price:"$150"
    },

  ];

  const imagearray=[
    "https://res.cloudinary.com/codercloud/image/upload/v1657779192/Users%20image/p4_f0uufr.jpg",
    "https://res.cloudinary.com/codercloud/image/upload/v1657779192/Users%20image/p3_lpp8yo.jpg",
    "https://res.cloudinary.com/codercloud/image/upload/v1657779191/Users%20image/p1_xgxyls.jpg",
    "https://res.cloudinary.com/codercloud/image/upload/v1657779191/Users%20image/p5_jgvxdg.jpg",
  ];

export const userrows=[
  {
    id: 1,
      username: 'Alawat Rai',
     avatarurl:imagearray[0],
     email:"rai@gmail.com",
     status:"active",
     transactions:"$8900"
     },
{
id: 2,
   username: 'Amy Jakcson',
   avatarurl:imagearray[1],
   email:"amy@gmail.com",
   status:"inactive",
   transactions:"$120.84"
   },
{
id: 3,
   username: 'Parker dane',
   avatarurl:imagearray[2],
   email:"parker@gmail.com",
   status:"active",
   transactions:"$75"
   },
{
id: 4,
username: 'Ram Kait',
avatarurl:imagearray[3],
email:"ram@gmail.com",
status:"active",
transactions:"$1204"
},

];