"use strict";

// const [state, setState] = useState(null);

// useEffect(() => {
//   // const a = /.....//
//   setState([]);

//   const iterval = setInterval(() => {
//     fetch("...").then();
//   }, 1000);

//   document.addEventListener("scroll", () => {
//     ///.....
//   });

//   return () => {
//     clearInterval(iterval);
//     document.removeEventListener("scroll");
//   };
// }, []);

// useEffect(() => {}, [state]);

// const [state, setState] = useState([]);

// this.state = [];
// this.setState([]);

// <Banner isBlackTheme={isBlackTheme} />;

// const Button = () => {
//   return <button>Hello</button>;
// };

// const Main = () => {
//   const [state, setState] = useState([]);
//   const img = <img src="https..." />;

//   // return <Banner data={img} />
//   //   return <Banner>{img}</Banner>;
//   return (
//     <StyledBanner>
//       {/* {img} */}
//       {/* <img src="https..." /> */}
//       <Bunner />
//       {/* {[1, 2, 3].map((item) => {
//         return <Button />;
//       })} */}
//     </StyledBanner>
//   );
// };

// const StyledBanner = memo(({ children }) => {
//   const [state, setState] = useState([]);
//   const ref = useRef(null); // {current: HTMLDivElemen}
//   const a = "12";

//   return (
//     <div ref={ref}>
//       <h1>Hello world!</h1>
//       {children}
//     </div>
//   );
// });

// const a = `https://ab.onliner.by/volkswagen/amarok/2-pokolenie/city/minsk?price%5Bfrom%5D=1000&price%5Bto%5D=1000000&price%5Bcurrency%5D=BYN&include_vat=true&exchange=true&year%5Bfrom%5D=2014&year%5Bto%5D=2024&body_type%5B0%5D=sedan&body_type%5B1%5D=universal&body_type%5B2%5D=suv&body_type%5B3%5D=hatchback&body_type%5B4%5D=liftback&body_type%5B5%5D=minibus&body_type%5B6%5D=coupe&body_type%5B7%5D=minivan&body_type%5B8%5D=pickup&body_type%5B9%5D=cabriolet&body_type%5B10%5D=limousine&body_type%5B11%5D=van&engine_type%5B0%5D=gasoline&engine_type%5B1%5D=diesel&engine_type%5B2%5D=electric&gas=true&hybrid=true&engine_capacity%5Bfrom%5D=0.7&engine_capacity%5Bto%5D=1.5&transmission%5B0%5D=automatic&transmission%5B1%5D=mechanical&drivetrain%5B0%5D=front&drivetrain%5B1%5D=rear&drivetrain%5B2%5D=all&odometer%5Bto%5D=150000&color%5B0%5D=white&color%5B1%5D=silver&color%5B2%5D=grey&color%5B3%5D=brown&color%5B4%5D=violet&color%5B5%5D=blue&color%5B6%5D=skyblue&color%5B7%5D=black&color%5B8%5D=red&color%5B9%5D=beige&color%5B10%5D=maroon&color%5B11%5D=orange&color%5B12%5D=yellow&color%5B13%5D=golden&color%5B14%5D=green&state%5B0%5D=owned&state%5B1%5D=new&state%5B2%5D=emergency&seller_type%5B0%5D=autohaus&seller_type%5B1%5D=dealer&seller_type%5B2%5D=individual&warranty=true&manual_control=true&customs_clearance=true&carplay=true&navigation_system=true&yandex_auto=true&android_auto=true&bluetooth=true&aux=true&usb=true&outlet_12v=true&outlet_220v=true&multimedia_for_rear_passengers=true&power_windows%5B0%5D=front&power_windows%5B1%5D=all&wheel_configuration%5B0%5D=out&wheel_configuration%5B1%5D=electro&suspension%5B0%5D=springloaded&suspension%5B1%5D=pneumatic&suspension%5B2%5D=hydraulic&suspension%5B3%5D=active&suspension%5B4%5D=adaptive&conditioner%5B0%5D=basic&conditioner%5B1%5D=climate_control&conditioner%5B2%5D=one_zone_climate_control&conditioner%5B3%5D=two_zone_climate_control&conditioner%5B4%5D=multi_zone_climate_control&parktronic%5B0%5D=rear&parktronic%5B1%5D=front&camera%5B0%5D=backview&camera%5B1%5D=wholeview&onboard_computer=true&auxiliary_heater=true&keyless_entry=true&digital_dashboard=true&remote_engine_start=true&park_assist=true&decklid_electricdrive=true&multiwheel=true&headlamps%5B0%5D=halogen&headlamps%5B1%5D=xenon&headlamps%5B2%5D=led&headlamps%5B3%5D=matrix&headlamps%5B4%5D=laser&fog_lights=true&light_washer=true&rain_sensor=true&light_sensor=true&adaptive_lighting_system=true&automatic_highbeams_control=true&electrical_heating%5B0%5D=wiper&electrical_heating%5B1%5D=side_mirrors&electrical_heating%5B2%5D=windshield&wheels%5B0%5D=steel&wheels%5B1%5D=alloy&wheels_size%5B0%5D=R12&wheels_size%5B1%5D=R14&wheels_size%5B2%5D=R13&wheels_size%5B3%5D=R15&wheels_size%5B4%5D=R16&wheels_size%5B5%5D=R17&wheels_size%5B6%5D=R18&wheels_size%5B7%5D=R19&wheels_size%5B8%5D=R20&wheels_size%5B9%5D=R21&wheels_size%5B10%5D=R22&wheels_size%5B11%5D=R23&wheels_size%5B12%5D=R24&wheels_size%5B13%5D=R25&wheels_size%5B14%5D=R26&wheels_size%5B15%5D=R27&wheels_size%5B16%5D=R28&toned_glasses=true&drawbar=true&central_locking=true`;
// console.log(a.length);

// output при 53 и лимите 10
// [[1, 2, 3, ... 11], [12, 13, 14, ... 22], [23, 24, ... 33 элементов], [10], [10]]

// // output при 7 элементах массива и лимите 10
// [[1, 2, 3, ... 7]]

// // output при 29 элементах массива и лимите 11
// [[1, 2, 3, ... 15], [16, 17, 18, ... 29 (14 элементов)]]

// // output при 35 элементах массива и лимите 10
// [[1, 2, 3, ... 12 (12 элементов)], [13, 14, 15, ... 24 (12 элементов)], [25, 26, 27, ... 35 (11 элементов)]]

// // output при 48 и лимите 10
// [[1, 2, 3, ... 12], [13, 14, 15, ... 24], [12 элементов], [12]]

const getArray = (count) => new Array(count).fill(null).map((_, i) => ++i);
const array = getArray(53); // 53 || 32 || 77
const limit = 10; // 7 || 13 || 22

const makeDivisionArray = (array, limit) => {
  const arrayCount = Math.floor(array.length / limit);

  const emptyLinesSizeInfo = Object.fromEntries(
    getArray(arrayCount).reduce((res, item) => [...res, [item, 0]], [])
  );

  const { linesSize } = array.reduce(
    (result) => {
      ++result.linesSize[result.currentCard];

      if (result.currentCard + 1 in result.linesSize) {
        ++result.currentCard;
      } else {
        result.currentCard = 1;
      }

      return result;
    },
    { linesSize: emptyLinesSizeInfo, currentCard: 1 }
  );

  const res = array.reduce(
    (result, item) => {
      if (result[result.length - 1].length < linesSize[result.length]) {
        result[result.length - 1].push(item);
      } else {
        result.push([item]);
      }

      return result;
    },
    [[]]
  );

  return res;
};

makeDivisionArray(array, limit);
makeDivisionArray(getArray(39), 15);
