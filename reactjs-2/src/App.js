import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="Parentbox">
        <div className="Foto">
          <img src="rx7.jpg" />
        </div>
        <div className="Deskripsi">
          <h1 className="Title">Mazda Rx 7</h1>
          <p className="Price">IDR 1.999.000.999</p>
          <p className="Spesifikasi">
            Spesifikasi Mazda rx7 Mazda RX 7 (FD) 2.6 Rotary TT (276 HP)
            SylinderR2. Kapasitas Mesin2616 cm3. Tenaga203 KW @ 6500 RPM 276 HP
            @ 6500 RPM 272 BHP @ 6500 RPM. Torsi218 lb-ft @ 5000 RPM 296 Nm @
            5000 RPM. Bahan BakarGasoline. Kapasitas bahan bakar-Sistem Bahan
            BakarElectronic Fuel Injection.
          </p>
          <h3 className="Type">Type</h3>
          <button class="button1">TYPE A</button>
          <button class="button2">TYPE B</button>
          <button class="button3">TYPE C</button>
          <br></br>
          <button class="button">Buy Now</button>
          <button class="tombol">Add To Wishlist!</button>
        </div>
      </div>
      <div className="Parentbox">
        <div className="Foto">
          <img src="rx7.jpg" />
        </div>
        <div className="Deskripsi">
          <h1 className="Title">Mazda Rx 7</h1>
          <p className="Price">IDR 1.999.000.999</p>
          <p className="Spesifikasi">
            Spesifikasi Mazda rx7 Mazda RX 7 (FD) 2.6 Rotary TT (276 HP)
            SylinderR2. Kapasitas Mesin2616 cm3. Tenaga203 KW @ 6500 RPM 276 HP
            @ 6500 RPM 272 BHP @ 6500 RPM. Torsi218 lb-ft @ 5000 RPM 296 Nm @
            5000 RPM. Bahan BakarGasoline. Kapasitas bahan bakar-Sistem Bahan
            BakarElectronic Fuel Injection.
          </p>
          <p className="Type">Color</p>
          <button class="button4"></button>
          <button class="button5"></button>
          <button class="button6"></button>
          <br></br>
          <h3 className="Type">Type</h3>
          <button class="button7">TYPE A</button>
          <button class="button8">TYPE B</button>
          <button class="button9">TYPE C</button>
          <br></br>
          <br></br>
          <font color="blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-1 h-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
            How to configure to car
          </font>
          <br></br>
          <hr align="center"></hr>
          <button class="tombol">$33.0000</button>
          <button class="button">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
export default App;
