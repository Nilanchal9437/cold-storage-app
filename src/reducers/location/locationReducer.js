import kitchen from "../../images/location/kitchener.jpg";
import missuga from "../../images/location/mississauga.jpg";
import calgary from "../../images/location/calgary2.jpg";
import montreal from "../../images/location/montreal.jpg";
import dorval from "../../images/location/dorval2.jpg";


const intial_state = {
  location: [
    {
      img: kitchen,
      head: "Kitchener, Ontario",
      subhead: "299 Trillium Drive, N2E 1W9",
      link: "http://maps.google.ca/maps?q=299+Trillium+Drive,+N2E+1W9&hnear=299+Trillium+Dr,+Kitchener,+Ontario+N2E+1W9&gl=ca&t=m&z=16&vpsrc=0",
      time: "24 Hour Service",
      area: "21 acres",
      distance: "Over 20 million cubic feet",
      paragrap: "automated cold storage warehouse blast freezer, cooler and refrigerated docks order picking and distribution full export and import capabilities located near Highway 401"
    },
    {
      img: missuga,
      head: "Mississauga, Ontario",
      subhead: "2660 Meadowpine Blvd, L5N 7E6",
      link: "https://www.google.ca/maps?q=2660+Meadowpine+Blvd,+L5N+7E6&qscrl=1&um=1&ie=UTF-8&hq&hnear=0x882b6afee37c5491:0x79a745b0c335ab3b,2660+Meadowpine+Blvd,+Mississauga,+ON+L5N+8C7&gl=ca&ei=5ioLT-WcE8HL0QGlw",
      time: "24 Hour Service",
      area: "24 acres",
      distance: "Over 30 million cubic feet",
      paragrap: "blast freezer, cooler and refrigerated docks order picking and distribution full export and import capabilities approved to export to European Union countries located at the junction of Highway 401, Highway 407 and Winston Churchill Blvd."
    },
    {
      img: calgary,
      head: "Calgary, Alberta",
      subhead: "4767 27th Street SE, T2B 3M5",
      link: "http://maps.google.ca/maps?q=4767+27th+Street+SE,+T2B+3M5&hnear=4767+27+St+SE,+Calgary,+Alberta+T2B+3M1&gl=ca&t=m&z=16&vpsrc=0",
      time: "Over 3.5 million cubic feet",
      area: "cooler and freezer",
      distance: "refrigerated docks",
      paragrap: "order picking and distribution full export and import capabilities located near the Deerfoot Trail and the Trans Canada Highway"
    },
    {
      img: montreal,
      head: "Montréal, Québec",
      subhead: "3051 rue Henry-Ford, J7V 0A1",
      link:"http://maps.google.ca/maps?q=3051+rue+Henry-Ford,+J7V+0A1&ie=UTF8&hnear=3051+Henry+Ford,+Vaudreuil-Dorion,+Qu%C3%A9bec+J7V+8P2&gl=ca&t=m&z=16&vpsrc=0",
      time: "Over 2.1 million cubic feet",
      area: "cooler and freezer capability",
      distance: "refrigerated docks",
      paragrap: "order picking and distribution located on highway 30 - Vaudreuil-Dorion"
    },
    {
      img: dorval,
      head: "Dorval, Québec",
      subhead: "10000 Ryan Ave, H9P 3A1",
      link: "http://maps.google.ca/maps?q=10000+Ryan+Ave,+H9P+3A1&ie=UTF8&hnear=10000+Avenue+Ryan,+Dorval,+Qu%C3%A9bec+H9P+1A2&gl=ca&t=m&z=16&vpsrc=0",
      time: "Over 5 million cubic feet",
      area: "freezer capability",
      distance: "refrigerated docks",
      paragrap: "order picking and distribution located beside airport"
    },
  ]
}


export default function locationReducer(state = intial_state, action) {
  switch(action.type) {
    default:
      return state;
  }
}