


const intial_state = {
  about: [
    {
      icon: 'vpn_key',
      head: "A Complete Solution",
      sub: "From blast freezing and warehousing to Canada-wide distribution, we are ideally positioned to manage your entire storage and distribution chain."
    },
    {
      icon: "access_time",
      head: "Twenty-four Hour Operation",
      sub: "As one of the first cold storage facilities to introduce a 24-hour service solution, we save our customers time and money by providing superior service around the clock."
    },
    {
      icon: 'zoom_out_map',
      head: "State-of-the-art Inventory Management",
      sub: "When it comes to warehousing technologies, CCS is an industry leader. Our innovative systems provide our customers with immediate access to product data in real time."
    },
    {
      icon: 'location_on',
      head: "National Warehouses with Cross Docking",
      sub: "With warehouses and distribution centres in Kitchener, Mississauga, Montréal and Calgary, and additional cross docking locations ranging from Ottawa to Winnipeg, we deliver seamless storage and distribution across Canada."
    },
    {
      icon: 'local_shipping',
      head: "Fully Equipped Docks",
      sub: "Refrigerated docks, fully automated warehouses, and our experienced team of warehouse professionals ensure quick turn-around times and maximum storage efficiency and security for your products."
    },
    {
      icon: 'add_road',
      head: "Federally Approved by CFIA",
      sub: "Our consistently high CFIA rating is your guarantee of dependability and accountability. The safety and security of your product is our top priority."
    }
  ]
}


export default function aboutReducer(state = intial_state, action) {
  switch (action.type) {
    default:
      return state;
  }
}