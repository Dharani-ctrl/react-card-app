import React from "react";
import Card from "./Card";
import "./App.css";
const App = ()=>{
  return(
    <div className="app">
      <header className="app-header">
        <h1>Static Website</h1>
        <div className="card-list">
          <Card
          
            title={"HP 15s Intel Core i3 "}
            price={"₹45,990"}
            description={"8GB RAM | 512GB SSD | 15.6-inch FHD Display | Windows 11 Home | MS Office Home & Student 2021"}
            image={"https://www.livemint.com/lm-img/img/2025/02/21/600x338/best_laptop_under_Rs_30000_1740122015828_1740122045813.jpg"}
          >
          </Card>
          <Card
            title={"POCO C75"}
            price={"₹7,999"}
            description={"6GB RAM | 128GB Storage | 50MP Triple Camera | 5000mAh Battery | 6.71-inch Display"}
            image={"https://img.nieuwemobiel.nl/poco-c75-colors-overview-675c425fe11af.jpg"}>
          </Card>
          <Card
            title={"SAMSUNG Tizen TV"}
            price={"₹14,999"}
            description={"32-inch | HD Ready | Smart TV | Tizen OS | Voice Assistant"}
            image={"https://kaydeeelectronics.in/cdn/shop/files/untitled-design-2024-08-12t114354184-66b9aae66262d.webp?v=1737196904&width=1445"  }
          ></Card>
          <Card
          title={"Godrej Fridge"}
          price={"₹24,690 "}
          description={"260L | Double Door | Frost Free | Inverter Compressor | 3 Star Rating"}
          image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGr_ipCuozViYk2t_ykQdqmpWoC4irJnzUTw&s"}
          ></Card>
          <Card
          title={"Home Theater System"}
          price={"₹3,999 "}
          description={"80W | Surround Sound | Bluetooth Connectivity | USB & AUX Support"}
          image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVxifz_JNCbb_qR0TEX_iP7osBdTyM9-Kkw&s"}
          ></Card>
          <Card 
          title={"Sofa Set"}
          price={"₹40,000"}
            description={" 3+2 Seater | Modern Design | Pink Color"}
            image={"https://storyathome.com/cdn/shop/files/1_5944058e-c889-402d-87b2-fd2830ee7164.jpg?v=1721989520"} 
          >
            
          </Card>
          <Card
          title={"Protein Powder"}
          price={"₹2,499"}
            description={"2kg | Whey Protein | Chocolate Flavor | Muscle Gain"}
            image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPf4S1NC_3dL5rGzeA4F_iDnl3PckQx_3JiQ&s"}
          ></Card>
          <Card
          title={"Quaker Oats"}
            price={"₹400"}
            description={"2kg | Instant Oats | Healthy Breakfast | High Fiber"}
            image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqIGuLCWT1SM9m2ZvtlDsTNYs_gIJKnxIgg&s"}
          ></Card>
        </div>
      </header>
    </div>
    
  )
}
export default App;