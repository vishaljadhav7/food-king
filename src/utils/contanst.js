export  const navItems = [
    {
      id : 238713,
      title : "Home",
      url_Link : "/",   
    }, 
    {
      id : 762113,
      title : "About",
      url_Link : "/about",   
    },    
    {
        id : 236797,
        title : "Contact Us",
        url_Link : "/contact",   
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

export const filters = [
  {
    id : 1001,
    filterName : "fast delivery",
  },
  {
    id : 1002,
    filterName : "ratings 4.0+"
  },
  {
    id : 1003,
    filterName : "Pure Veg",
  }
]


export const RESTAURANT_MENU_API = `https://api.allorigins.win/get?url=${encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9634&lng=77.5855&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")}` ;

export const RESTAURANT_LIST_API = `https://api.allorigins.win/get?url=${encodeURIComponent("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9634&lng=77.5855&restaurantId=")}` ;


export const CARD_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";