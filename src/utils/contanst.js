export  const navItems = [
    {
      id : 238713,
      title : "Home",
      url_Link : "/",   
    }, 
    {
      id : 236797,
      title : "Contact Us",
      url_Link : "/contact",   
    },
    {
      id : 762113,
      title : "Cart",
      url_Link : "/cart",   
    },       
    {
        id : 576313,
        title : "Instamart",
        url_Link : "/instamart",   
     },    
     {
        id : 968213,
        title : "Sign Up",
        url_Link : "/signup",   
      },           
]

export const filterItems = [
  {
    id : 23535245,
    value :  "default"
  },
  {
    id : 10992322,
    value : "delivery time" 
  },
  {
    id : 243411123,
    value : "high ratings+"
  },
  {
    id : 6745333,
    value : "low to high (costForTwo)"
  },
  {
    id : 34234353,
    value : "high to low (costForTwo)"
  }
]


export const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

export const RESTAURANT_MENU_API = `https://api.allorigins.win/get?url=${encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9634&lng=77.5855&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")}` ;

export const RESTAURANT_LIST_API = `https://api.allorigins.win/get?url=${encodeURIComponent("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9634&lng=77.5855&restaurantId=")}` ;


export const CARD_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";


export const INSTA_MART_API = `https://api.allorigins.win/get?url=${encodeURIComponent("https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP")}` ;

export const INSTA_MART_CDN = "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/"