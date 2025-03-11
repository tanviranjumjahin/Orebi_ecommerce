/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // font family start 
      fontFamily: {
        dm: "DM Sans"
      },
      // font family End
      // container start 
      maxWidth: {
        'menuContainer': '1320px',
      },
      // container End 
      // color start  
      colors: {
        'headerBg': '#FFFFFF',
        'menuText': '#767676',
        'myacccolor': '#797979',
        'menuHover': '#262626',
        'categoryBG': '#F5F5F3',
        'borderBG': '#97979766',
        'BannerBG': '#F5F7F9',
        'BannerBG': '#F5F7F9',
        'FooterBg': '#6D6D6D',
      },
      // color end  
      // width start 
      width: {
        logoW: "15%",
        menuW: "70%",
      },
      // width end 
      // background image start 
      backgroundImage: {
        bannerimg: "url('../src/assets/banner.png')",

      }
      // background image end 

    },
  },
  plugins: [
    require('daisyui'),
  ],
}

