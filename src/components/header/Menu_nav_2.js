import React from "react";
import classes from './Menu_nav_2.module.scss'
import { NavLink } from "react-router-dom";

export function Menu_nav_2() {
    return (
        <nav className={classes.Menu}>
            <div className={classes.Container}>
                <ul className={classes.Menu__Elem}>
                    <li className={classes.Menu__Elem_Item}>
                        <NavLink to='/Items?category=iPhone' className={classes.Item_Link}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="54" viewBox="0 0 38 54" width="38">
                                <path d="m0 0h38v54h-38z" fill="none"/>
                                <path d="m38 6.7828a9.2369 9.2369 0 0 0 -.1385-1.938 3.5344 3.5344 0 0 0 -.87-1.7051 3.3946 3.3946 0 0 0 -1.6353-.9605 7.5013 7.5013 0 0 0 -1.9041-.1784q-.1766-.0008-.3564-.0008h-12.9857-.3459c-.231 0-.4744.0009-.6825.0061a7.4466 7.4466 0 0 0 -1.0257.0855 3.9612 3.9612 0 0 0 -.9365.268 3.34 3.34 0 0 0 -.909.5818 3.4569 3.4569 0 0 0 -1.0393 1.7631 6.1645 6.1645 0 0 0 -.1584 1.2955c-.0057.1672-.01.3338-.0108.5006-.0019.2581-.0019.5141-.0019.7722v37.9447a9.2162 9.2162 0 0 0 .1383 1.9379 3.5341 3.5341 0 0 0 .87 1.7052c.0477.0508.1012.0922.1512.1393a3.2926 3.2926 0 0 0 .6841.5 3.5936 3.5936 0 0 0 .8.3211 5.268 5.268 0 0 0 1.0116.1532c.2968.0195.5951.024.8925.0252.1854.0008.3757.0007.5628 0h13.1842a8.5281 8.5281 0 0 0 1.9464-.15 3.43 3.43 0 0 0 1.696-.9314 3.5183 3.5183 0 0 0 .9154-1.7234 8.9628 8.9628 0 0 0 .1475-1.9771v-37.9447c0-.164 0-.3291 0-.49zm-13.968-3.3337a.403.403 0 0 1 -.3635.3986.4124.4124 0 0 1 -.3833-.199.4184.4184 0 0 1 0-.4.4119.4119 0 0 1 .3833-.1985.4029.4029 0 0 1 .3635.3989zm.768-.8641a.133.133 0 0 1 .1328-.1329h3.0845a.1329.1329 0 0 1 .1328.1329v.0208a.1329.1329 0 0 1 -.1328.1328h-3.0842a.1329.1329 0 0 1 -.1331-.1328zm12.2 4.6061v14.93 23.1174a8.037 8.037 0 0 1 -.1224 1.7345 2.5073 2.5073 0 0 1 -.6532 1.2439 2.42 2.42 0 0 1 -1.2121.6591 7.7069 7.7069 0 0 1 -1.7176.124h-12.2595c-.4089 0-1.0815.0005-1.4835 0-.3324-.0014-.6328-.0081-.9156-.03a4.1076 4.1076 0 0 1 -.7363-.1148 2.4078 2.4078 0 0 1 -1.1622-.6779 2.53 2.53 0 0 1 -.6218-1.2333 8.374 8.374 0 0 1 -.1158-1.7265v-37.9447c0-.2541-.0016-.5187.0054-.7719.001-.1694.0036-.3373.01-.5007a5.1426 5.1426 0 0 1
                                    .126-1.0515 2.4688 2.4688 0 0 1 .7381-1.2636 2.34 2.34 0 0 1 .6379-.4078 2.958 2.958 0 0 1 .702-.1991 6.3709 6.3709 0 0 1 .8878-.0724c.1836-.0046.3967-.0051.602-.0053h2.23a.9334.9334 0 0 1 .1808.0095.2961.2961 0 0 1 .1575.0761.254.254 0 0 1 .08.1559c.0113.072.02.3109.0453.4524a1.1682 1.1682 0 0 0 .1351.3775 1.216 1.216 0 0 0 .4444.4473 1.2345 1.2345 0 0 0 .4678.1528 3.7519 3.7519 0 0 0 .5.0158h5.1014a3.7519 3.7519 0 0 0 .5-.0158 1.2351 1.2351 0 0 0 .4678-.1528 1.2163 1.2163 0 0 0 .4445-.4473 1.168 1.168 0 0 0 .135-.3775 3.5351 3.5351 0 0 0 .0312-.4059.2543.2543 0 0 1 .0938-.2024.2961.2961 0 0 1 .1562-.0761.9341.9341 0 0 1 .1806-.0093h2.1918.1957a6.5763 6.5763 0 0 1 1.6523.145 2.4074 2.4074 0 0 1 1.1621.678 2.5288 2.5288 0 0 1 .6217 1.2332 8.3783 8.3783 0 0 1 .1158 1.7277zm-21.7212 42.3536c-.0133-.0142-.0234-.0306-.0365-.0449a4.3209 4.3209 0 0 1 -.3916-.5h-10.186c-.1211 0-.3839 0-.5083 0a5.8933 5.8933 0 0 1 -1.4852-.13 2.11 2.11 0 0 1 -1.0194-.5977 2.25 2.25 0 0 1 -.5478-1.0951 7.6771 7.6771 0 0 1 -.104-1.5683v-34.7672c0-.1118 0-.3507 0-.4653a6.9868 6.9868 0 0 1 .1265-1.65 2.19 2.19 0 0 1 .65-1.12 2.05 2.05 0 0 1 .5586-.3592 2.6007 2.6007 0 0 1 .62-.1764 5.6812 5.6812 0 0 1 .7979-.0653c.182-.0046.3955-.0053.5983-.0053h.1656.1491 1.9507a.8557.8557 0 0 1 .1648.0085.2508.2508 0 0 1 .2165.2118.8972.8972 0 0 1 .013.1648 2.4437 2.4437 0 0 0 .0284.37 1.0684 1.0684 0 0 0 .1232.3449 1.11 1.11 0 0 0 .4058.4083 1.1277 1.1277 0 0 0 .4271.1394 3.4164 3.4164 0 0 0 .4559.0146h5.0972a3.4667 3.4667 0 0 0 .4514-.014v-1.3755c0-.2553-.0006-.516.0021-.7721.0008-.1637.0049-.33.0105-.5h-9.3466l-.3147-.0007c-.2112 0-.4338.0008-.6242.0056a6.7541 6.7541 0 0 0 -.9366.0785 3.5957 3.5957 0 0 0 -.855.2461 3.0445 3.0445 0 0 0 -.83.5342 3.1768 3.1768 0 0 0 -.9488 1.6189 7.8849 7.8849 0 0 0 -.1567 1.9083v.45 34.7671a8.5247 8.5247 0 0 0 .1264 1.7794 3.252 3.252 0 0 0 .794 1.5657 3.0968 3.0968 0 0 0 1.4931.8819 6.8119 6.8119 0 0 0 1.7386.1643c.1693.0006.3431.0006.5139 0h11.118a4.3219 4.3219 0 0 1 -.5052-.4553zm-5.9377-43.0335a.13.13 0 0 1 .13-.13h3.0586a.13.13 0 0 1 .13.13v.02a.13.13 0 0 1 -.13.13h-3.059a.13.13 0 0 1 -.13-.13zm-1.5711.833a.423.423 0 0 1 .3933-.2042.4111.4111 0 0 1 0 .8187.4236.4236 0 0 1 -.3937-.2043.43.43 0 0 1 .0004-.4102z" fill="#1d1d1f"/>
                            </svg>
                            <p>iPhone 15</p>
                        </NavLink>
                    </li>
                    <li className={classes.Menu__Elem_Item}>
                        <NavLink to='/Items?category=iPad' className={classes.Item_Link}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="54" viewBox="0 0 41 54" fill="none">
                                <g clip-path="url(#clip0_3_12)">
                                    <path d="M32 6V5C32 4.73478 31.8946 4.48043 31.7071 4.29289C31.5196 4.10536 31.2652 4 31 4H3C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5V47C2 47.2652 2.10536 47.5196 2.29289 47.7071C2.48043 47.8946 2.73478 48 3 48H10C10.0381 48.4101 10.1732 48.8053 10.394 49.1531C10.6148 49.5008 10.915 49.7911 11.27 50H3C2.20435 50 1.44129 49.6839 0.87868 49.1213C0.31607 48.5587 0 47.7956 0 47L0 5C0 4.20435 0.31607 3.44129 0.87868 2.87868C1.44129 2.31607 2.20435 2 3 2H31C31.7956 2 32.5587 2.31607 33.1213 2.87868C33.6839 3.44129 34 4.20435 34 5V6H32ZM38 7C38.7956 7 39.5587 7.31607 40.1213 7.87868C40.6839 8.44129 41 9.20435 41 10V47C41 47.7956 40.6839 48.5587 40.1213 49.1213C39.5587 49.6839 38.7956 50 38 50H14C13.2044 50 12.4413 49.6839 11.8787 49.1213C11.3161 48.5587 11 47.7956 11 47V10C11 9.20435 11.3161 8.44129 11.8787 7.87868C12.4413 7.31607 13.2044 7 14 7H38ZM39 10C39 9.73478 38.8946 9.48043 38.7071 9.29289C38.5196 9.10536 38.2652 9 38 9H14C13.7348 9 13.4804 9.10536 13.2929 9.29289C13.1054 9.48043 13 9.73478 13 10V47C13 47.2652 13.1054 47.5196 13.2929 47.7071C13.4804 47.8946 13.7348 48 14 48H38C38.2652 48 38.5196 47.8946 38.7071 47.7071C38.8946 47.5196 39 47.2652 39 47V10Z" fill="#1D1D1F"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_12">
                                    <rect width="41" height="54" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>iPad</p>
                        </NavLink>
                    </li>
                    <li className={classes.Menu__Elem_Item}>
                        <NavLink to='/Items?category=MacBook' className={classes.Item_Link}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outlines" width="85" height="54" viewBox="0 0 85 54">
                                <rect width="85" height="54" fill="none"/>
                                <path d="M47.6007,17.5l-15.8225,0v.0148a.9966.9966,0,0,1-.9967.9966h-3.563a.9966.9966,0,0,1-.9967-.9966V17.5l-15.8225,0-1.3253.0012c-.5021.0009-.8263.0021-1.0713.0043-.2291.0021-.3856.0049-.5117.0089a4.1339,4.1339,0,0,0-.4391.0319.7944.7944,0,0,0-.2431.0635.4178.4178,0,0,0-.1159.0816.4279.4279,0,0,0-.0847.12.7891.7891,0,0,0-.0624.24,4.1463,4.1463,0,0,0-.0316.4382c-.0038.1232-.0066.28-.0086.5095-.0019.2434-.0032.525-.0041,1.0284-.001.7351-.0015,27.47-.0015,27.47H32v.982a2.4943,2.4943,0,0,0,.5223,1.518H7.2891L7.0376,50.5H4.0029l-.2514-.5028H1.5179A1.5181,1.5181,0,0,1,0,48.4792v-.982H5s0-26.7366.0015-27.4728c.0009-.5075.0022-.7917.0041-1.0389.0022-.2439.0053-.4109.0094-.5453a5.5844,5.5844,0,0,1,.0455-.5987,2.27,2.27,0,0,1,.1963-.6816,1.9238,1.9238,0,0,1,.9041-.9029,2.27,2.27,0,0,1,.6815-.196,5.5426,5.5426,0,0,1,.6-.0458c.1349-.0044.3021-.0075.5465-.01.2476-.0023.5751-.0035,1.0825-.0044.3427-.0005.7506-.001,1.3272-.0012H47.6013c.5766,0,.9845.0007,1.3272.0012.5074.0009.8349.0021,1.0825.0044.2444.0021.4116.0052.5465.01a5.5426,5.5426,0,0,1,.6.0458,2.27,2.27,0,0,1,.6815.196,1.9238,1.9238,0,0,1,.9041.9029,2.27,2.27,0,0,1,.1963.6816,5.5844,5.5844,0,0,1,.0455.5987c.0041.1344.0072.3014.0094.5453l0,.0144h-1.5v-.0026c-.002-.2275-.0048-.3846-.0087-.5109a4.1105,4.1105,0,0,0-.0317-.4363.7884.7884,0,0,0-.0631-.2412.4235.4235,0,0,0-.2-.1991.7964.7964,0,0,0-.2433-.0635,4.13,4.13,0,0,0-.4393-.0319c-.1258-.004-.2823-.0068-.5109-.0089-.2455-.0022-.57-.0034-1.0719-.0043ZM85,
                                47.4971v.982a1.5181,1.5181,0,0,1-1.5181,1.518H81.2485l-.2514.5029H77.9624l-.2515-.5029H40.2891l-.2515.5029H37.0029l-.2514-.5029H34.5179A1.5181,1.5181,0,0,1,33,48.4791v-.982h5s.0005-22.6936.0015-23.43c.0009-.5075.0022-.8348.0041-1.0819.0022-.2439.0053-.411.0094-.5454a5.58,5.58,0,0,1,.0455-.5986,2.27,2.27,0,0,1,.1963-.6817,1.9242,1.9242,0,0,1,.9041-.9028,2.27,2.27,0,0,1,.6815-.196,5.5387,5.5387,0,0,1,.6-.0459c.1349-.0043.3021-.0074.5465-.0095.2476-.0023.5751-.0036,1.0825-.0044C42.4142,20.0006,43.3987,20,43.3987,20H74.6013c.5767,0,.9844.0006,1.3272.0012.5073.0008.8349.0021,1.0825.0044.2444.0021.4116.0052.5464.0095a5.5323,5.5323,0,0,1,.6.0459,2.268,2.268,0,0,1,.6816.196,1.9219,1.9219,0,0,1,.9041.9028,2.2784,2.2784,0,0,1,.1963.6817,5.5841,5.5841,0,0,1,.0454.5986c.0044.1344.0073.3015.01.5454.0019.2471.0032.5744.0041,1.0819.001.7361.0015,23.43.0015,23.43Zm-6.5,0S78.5,24.8055,78.4985,24.0694c-.0009-.5024-.0022-.827-.0041-1.072-.002-.2264-.0047-.3826-.0088-.5081a4.1746,4.1746,0,0,0-.0317-.44.7867.7867,0,0,0-.0633-.2408.43.43,0,0,0-.0825-.1161.4241.4241,0,0,0-.1164-.0821.798.798,0,0,0-.2437-.0637,4.1323,4.1323,0,0,0-.4395-.032c-.1257-.004-.2822-.0068-.5107-.0088-.2456-.0023-.57-.0035-1.072-.0043L74.6006,21.5l-12.8224,0v.0147a.9967.9967,0,0,1-.9967.9967h-3.563a.9967.9967,0,0,1-.9967-.9967V21.5H52.4989l-9.1,0-1.3253.0012c-.5021.0008-.8263.002-1.0713.0043-.2291.002-.3856.0048-.5119.0088a4.1232,4.1232,0,0,0-.4388.032.7914.7914,0,0,0-.2432.0635.42.42,0,0,0-.1159.0815.4315.4315,0,0,0-.0847.12.79.79,0,0,0-.0624.24,4.1506,4.1506,0,0,0-.0316.4382c-.0038.1233-.0066.28-.0086.5095-.0019.2435-.0032.5681-.0041,1.0714-.001.7352-.0015,23.4268-.0015,23.4268Z" fill="#1d1d1f"/>
                            </svg>
                            <p>Mac</p>
                        </NavLink>
                    </li>
                    <li className={classes.Menu__Elem_Item}>
                        <NavLink to='/Items?category=iMac' className={classes.Item_Link}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="54" viewBox="0 0 50 54" fill="none">
                                <g clip-path="url(#clip0_1_2)">
                                    <path d="M47.1875 10.0624H2.81247C1.89343 10.0624 1.14841 10.8075 1.14841 11.7265V40.5703C1.14841 41.4893 1.89343 42.2344 2.81247 42.2344H47.1875C48.1066 42.2344 48.8516 41.4893 48.8516 40.5703V11.7265C48.8516 11.2852 48.6763 10.8619 48.3642 10.5498C48.0521 10.2378 47.6289 10.0624 47.1875 10.0624ZM31.1016 42.789V50H18.8984V42.789H31.1016ZM47.7422 11.1718V36.6875H2.25778V11.1718H47.7422Z" fill="#1D1D1F"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_2">
                                        <rect width="50" height="54" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>iMac</p>
                        </NavLink>
                    </li>
                    <li className={classes.Menu__Elem_Item}>
                        <NavLink to='/Items?category=Watch' className={classes.Item_Link}>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 25 54" height="54" viewBox="0 0 25 54" width="25">
                                <path d="m0 0h25v54h-25z" fill="none"/>
                                <path d="m11.7706 48.1008.0005.4273c.0005.396-.2472.9283-.5505 1.1829l-.3395.285c-.6152-.0037-1.0943-.0127-1.5052-.0263.0515-.3703.2636-.8008.5287-1.0234l1.3135-1.1025c.3034-.2547.552-.139.5525.257zm-1.8161.1444
                                    1.2742-1.1227c.2971-.2618.53-.7998.5176-1.1956l-.0135-.4274c-.0125-.3958-.2657-.5054-.5629-.2437l-1.2742 1.1227c-.2971.2618-.53.7998-.5176 1.1956l.0135.4274c.0125.3958.2658.5055.5629.2437zm1.8061-5.3564h-.7822l-1.0737.9012c-.3033.2546-.551.7869-.5505 1.1829l.0005.4272c.0005.3961.2491.5117.5524.2571l1.3135-1.1026c.3033-.2546.551-.7869.5505-1.1829l-.0005-.4272c0-.0227-.0084-.0349-.01-.0557zm-1.8061.2001.2271-.2001h-.7807c.0323.3532.2699.4501.5536.2001zm-1.0212-.2001h-.7358l.1996.1675c.2754.2312.4958.1444.5362-.1675zm-1.8587 1.6328 1.2742 1.1226c.2972.2618.5505.1522.5629-.2437l.0134-.4274c.0125-.3958-.2204-.9338-.5175-1.1956l-1.0087-.8887h-.8263c-.0002.0039-.002.0057-.0021.0097l-.0134.4275c-.0125.3958.2204.9338.5175 1.1956zm.0115.7212c-.3033-.2546-.5519-.1389-.5525.2571l-.0005.4273c-.0005.396.2472.9283.5505 1.1829l1.3135 1.1026c.3033.2546.5519.1389.5524-.2571l.0006-.4273c.0005-.396-.2472-.9283-.5505-1.1829zm.0473 2.5683c-.2971-.2618-.5504-.1522-.5629.2437l-.0134.4274c-.0125.3958.2204.9338.5175 1.1956l.1658.1461c.6123.0569 1.0865.0986 1.6657.1269-.0456-.3673-.2432-.7921-.4985-1.017zm-1.5574.0326-.4005.3361.0127.1056c.0766.5608.261.9216.6218 1.1588.1871-.2726.3193-.629.3189-.9161l-.0005-.4273c-.0005-.396-.2491-.5117-.5524-.2571zm.5281-1.9168-.0135-.4274c-.0125-.3958-.2657-.5054-.5629-.2437l-.6364.5607.2087 1.7347.4866-.4287c.2971-.2618.53-.7998.5175-1.1956zm.0117-3.0524c-.2313-.0102-.4591-.0323-.6834-.0665l-.9213.7733c.1218.2971.1924.6111.2219.9183l.0836.6946.762-.6396c.3033-.2546.551-.7869.5505-1.1829l-.0005-.4272c-.0002-.0285-.0102-.0445-.0128-.07zm-2.3681-.5662c-.0025.0361-.0128.0754-.0117.1096l.0062.197c.1854.1415.3503.2811.4631.4232.0209.0263.0344.0561.0538.0831.0183-.0135.0345-.0158.0533-.0323l.4702-.4143c-.3582-.0935-.704-.2153-1.0349-.3663zm-1.3708-.8451c.2301.3076.5756.5757.9196.8245-.0057-.0736-.0245-.152-.0436-.2299-.3086-.1748-.602-.3728-.876-.5946zm18.2977.8414c.3458-.2495.6936-.5187.9291-.827-.2783.2236-.5753.4245-.8889.5997-.0177.077-.035.1543-.0402.2273zm-1.4502.3682.457.3836c.0248.0208.046.0242.0699.0401.0139-.0189.0231-.0399.0378-.0584.1091-.1376.267-.2727.4449-.4096l.0003-.2565c0-.0162-.0063-.0351-.0071-.0517-.3208.1449-.6562.2616-1.0028.3525zm-1.3647.2029c-.0005.009-.0046.0135-.0049.0228l-.0134.4274c-.0125.3958.2205.9338.5176
                                    1.1956l.8136.7168.0888-.7387c.0292-.3041.0988-.6147.2181-.9093l-.8915-.7855c-.2388.0372-.4815.0609-.7283.0709zm-.0417 2.6241-.0006.4273c-.0005.396.2472.9283.5505 1.1829l.5264.4419.2042-1.698-.7281-.6111c-.3033-.2547-.5519-.139-.5524.257zm.0953 2.5159-.0135.4274c-.0089.2811.1093.6307.2831.9055.3336-.2261.5533-.5521.6232-1.0632l.0242-.2012-.3542-.3121c-.2971-.2618-.5504-.1522-.5628.2436zm-1.0529-.172-1.3135 1.1025c-.2678.2249-.4818.6622-.5303 1.035.6737-.02 1.2273-.0621 1.699-.1466l.1473-.1237c.3033-.2546.551-.7869.5505-1.1829l-.0006-.4273c-.0006-.3959-.2492-.5116-.5524-.257zm-1.2637.4015 1.2742-1.1227c.2972-.2618.53-.7998.5176-1.1956l-.0134-.4274c-.0125-.3958-.2658-.5054-.5629-.2437l-1.2742 1.1227c-.2971.2618-.53.7998-.5176 1.1956l.0135.4274c.0124.3958.2657.5055.5628.2437zm1.806-5.3564h-.7822l-1.0737.9012c-.3033.2546-.551.7869-.5505 1.1829l.0005.4272c.0005.3961.2491.5117.5524.2571l1.3135-1.1026c.3033-.2546.551-.7869.5505-1.1829l-.0006-.4272c.0001-.0227-.0082-.0349-.0099-.0557zm-1.806.2001.2271-.2001h-.7807c.0322.3532.2698.4501.5536.2001zm-1.0212-.2001h-.7358l.1996.1675c.2753.2312.4957.1444.5362-.1675zm-1.8587 1.6328 1.2742 1.1226c.2971.2618.5504.1522.5629-.2437l.0135-.4274c.0125-.3958-.2205-.9338-.5176-1.1956l-1.0087-.8887h-.8264c-.0002.0039-.002.0057-.0021.0097l-.0134.4274c-.0124.3959.2205.9339.5176 1.1957zm.0115.7212c-.3033-.2546-.5519-.1389-.5524.2571l-.0006.4273c-.0005.396.2472.9283.5505 1.1829l1.3135 1.1026c.3033.2546.5519.1389.5524-.2571l.0006-.4273c.0005-.396-.2472-.9283-.5505-1.1829zm.0473 2.5683c-.2971-.2618-.5505-.1522-.5629.2437l-.0134.4274c-.0125.3958.2204.9338.5175 1.1956l.3655.3221c.5441.0005 1.0323-.001 1.4704-.0079-.0344-.376-.238-.8248-.5029-1.0582zm-1.8944-40.897c-.6151.0037-1.0943.0127-1.5052.0263.0515.3703.2636.8009.5287 1.0234l1.3135 1.1026c.3033.2546.5519.1389.5524-.2571l.0005-.4273c.0005-.396-.2472-.9283-.5505-1.1829zm.2887 4.7401c.2971.2618.5504.1521.5629-.2437l.0135-.4274c.0125-.3958-.2205-.9338-.5176-1.1956l-1.2742-1.1226c-.2971-.2618-.5504-.1522-.5628.2436l-.0135.4274c-.0125.3958.2205.9338.5176 1.1956zm-1.2627-.4014c-.3033-.2546-.5519-.1389-.5524.2571l-.0005.4273c-.0005.396.2471.9283.5505 1.1829l1.0873.9127h.7665c.0023-.0247.0121-.0399.0121-.0672l.0005-.4273c.0005-.396-.2472-.9283-.5505-1.1829zm.0473 2.5683c-.2872-.2531-.5287-.1526-.556.2116h.7962zm-1.5574.0326-.2133.179h.7516c-.0359-.3222-.2593-.4131-.5383-.179zm-.0483-2.5879-1.2742 1.1227c-.2971.2618-.53.7998-.5175
                                    1.1956l.0134.4274c.0002.0087.004.0128.0045.0212h.8109l1.0217-.9002c.2971-.2618.53-.7998.5175-1.1956l-.0134-.4274c-.0124-.3958-.2657-.5055-.5629-.2437zm.0483-2.5683-1.3135 1.1025c-.3033.2546-.551.7869-.5505 1.1829l.0005.4273c.0005.396.2491.5117.5525.2571l1.3135-1.1026c.3033-.2546.551-.7869.5505-1.1829l-.0006-.4273c-.0005-.396-.2491-.5116-.5524-.257zm-1.2637.4014 1.2742-1.1226c.2552-.2249.4529-.6497.4985-1.017-.5792.0284-1.0534.07-1.6657.1269l-.1658.146c-.2971.2618-.53.7998-.5175 1.1957l.0134.4274c.0125.3957.2658.5054.5629.2436zm-1.9451-.4743-.0127.1056.4004.3361c.3033.2546.5519.1389.5524-.2571l.0006-.4272c.0004-.287-.1318-.6435-.3189-.9161-.3608.2372-.5452.5979-.6218 1.1587zm.9023 2.7859.0135-.4274c.0125-.3958-.2205-.9338-.5176-1.1956l-.4865-.4287-.2086 1.7347.6364.5607c.2971.2618.5504.1521.5628-.2437zm-1.274.3052-.0836.6947c-.0295.3073-.1002.6212-.2219.9183l.9329.783c.2199-.033.443-.0545.6697-.0646.0034-.0292.0147-.0484.0148-.0817l.0005-.4273c.0005-.396-.2472-.9283-.5505-1.1829zm-.0239 2.5286-.4803-.4232c-.0187-.0165-.035-.0187-.0533-.0322-.0194.027-.033.0568-.0538.0831-.1127.1422-.2777.2817-.4631.4232l-.0062.197c-.0012.0376.0098.0806.0129.1205.3336-.1522.6824-.2747 1.0438-.3684zm-2.4466 1.2352v.002c.2817-.231.5854-.4354.9044-.6161.0209-.0825.04-.1652.046-.2429-.3569.2579-.7213.5345-.9504.857zm19.2952-.0075c-.2346-.326-.6053-.6058-.9667-.8666.0055.0771.0231.1588.0425.2402.3265.1825.6362.3915.9242.6264zm-1.8521-1.6c-.0147-.0185-.0239-.0396-.0378-.0585-.0239.0159-.0452.0194-.0699.0402l-.4674.3924c.3498.0911.6881.2084 1.0119.3545.0012-.0202.0085-.0429.0085-.0625l-.0003-.2565c-.178-.1369-.3359-.272-.445-.4096zm-1.9478-.2879.0134.4274c.0004.0141.0063.0211.0073.0344.2421.0099.4803.033.7147.069l.9026-.7953c-.1193-.2946-.1889-.6052-.2181-.9093l-.0889-.7388-.8135.7169c-.297.2619-.5299.7999-.5175 1.1957zm.529-1.9168.7281-.6112-.2042-1.698-.5264.4419c-.3033.2546-.551.7869-.5505 1.1829l.0006.4273c.0005.396.2491.5117.5524.2571zm.1057-2.5293.3542-.3121-.0242-.2012c-.0699-.5112-.2896-.8372-.6232-1.0633-.1738.2747-.2921.6244-.2832.9056l.0135.4274c.0125.3957.2658.5054.5629.2436zm-1.7605-2.0626c-.4717-.0845-1.0253-.1267-1.699-.1467.0485.3729.2625.8102.5303 1.035l1.3135 1.1026c.3033.2546.5519.1389.5524-.2571l.0006-.4273c.0005-.396-.2472-.9283-.5505-1.1829zm.0965 4.5788c.2971.2618.5504.1521.5629-.2437l.0134-.4274c.0125-.3958-.2204-.9338-.5176-1.1956l-1.2742-1.1227c-.2971-.2618-.5504-.1522-.5629.2437l-.0135.4274c-.0125.3958.2205.9338.5176
                                    1.1956zm-1.2628-.4014c-.3033-.2546-.5519-.1389-.5524.2571l-.0005.4273c-.0005.396.2472.9283.5505 1.1829l1.0873.9127h.7665c.0023-.0247.0121-.0399.0121-.0672l.0006-.4273c.0005-.396-.2472-.9283-.5505-1.1829zm.0474 2.5683c-.2872-.2531-.5287-.1526-.556.2116h.7962zm-1.5575.0326-.2133.179h.7516c-.0359-.3222-.2593-.4131-.5383-.179zm-.0482-2.5879-1.2742 1.1227c-.2971.2618-.53.7998-.5175 1.1956l.0134.4274c.0002.0087.004.0128.0045.0212h.8109l1.0217-.9002c.2971-.2618.53-.7998.5176-1.1956l-.0135-.4274c-.0125-.3958-.2658-.5055-.5629-.2437zm.0482-2.5683-1.3135 1.1025c-.3033.2546-.551.7869-.5505 1.1829l.0006.4273c.0005.396.2491.5117.5524.2571l1.3135-1.1026c.3033-.2546.551-.7869.5505-1.1829l-.0006-.4273c-.0004-.396-.249-.5116-.5524-.257zm-1.2636.4014 1.2742-1.1226c.2649-.2334.4685-.6823.5029-1.0582-.438-.0069-.9261-.0085-1.4703-.0079l-.3657.3221c-.2971.2618-.53.7998-.5175 1.1956l.0134.4274c.0126.3957.2659.5054.563.2436zm12.224 16.4312h-.9996v10.9588c0 2.0184-.9365 3.8159-2.3963 4.9888-.2783.2236-.5753.4245-.8889.5997-.1581.0884-.3214.168-.4874.2429-.321.1449-.6564.2616-1.0029.3525-.2083.0546-.4204.0986-.6364.1321-.2388.0371-.4815.0609-.7283.0708-.0869.0035-.1721.0131-.2598.0131h-11.0274-.1726c-.0959 0-.1892-.0102-.2841-.0143-.2313-.0102-.4591-.0323-.6834-.0665-.2206-.0336-.4372-.0779-.6498-.1334-.3582-.0934-.704-.2153-1.0349-.3663-.1688-.0771-.3343-.1595-.4949-.2505-.3086-.1748-.602-.3727-.876-.5945-1.449-1.1734-2.3769-2.9647-2.3769-4.9744v-16.0562c0-1.9958.9142-3.7776 2.3461-4.9513.2817-.231.5854-.4354.9044-.6161.1617-.0917.3284-.175.4985-.2526.3336-.1522.6824-.2747 1.0438-.3683.2131-.0552.4302-.0993.6513-.1326.2199-.033.443-.0545.6697-.0646.0955-.0042.1895-.0145.2862-.0145h.1751 11.0249c.0885 0 .1746.0097.2622.0132.2421.0099.4803.033.7147.069.2162.0332.4286.0768.6371.1311.3498.0911.6881.2084 1.0119.3545.1674.0755.3318.1559.4912.245.3265.1826.6362.3915.9242.6264 1.4388 1.1737 2.3587 2.9593 2.3587 4.9608v.2412h.9996zm-1.9996 0h-.0004v-4.8561h.0004v-.2412c0-1.7202-.8113-3.2515-2.0682-4.2411-.3303-.26-.6915-.481-1.0771-.6592-.4966-.2294-1.0323-.3864-1.596-.4553-.2164-.0265-.4352-.0444-.6586-.0444h-11.2001c-.2357 0-.4662.0204-.694.0498-.5576.072-1.0874.2294-1.5786.4586-.3788.1768-.7341.3947-1.0591.6506-1.257.9895-2.0683 2.5208-2.0683 4.2409v16.0561c0 1.7133.8046 3.2396 2.0529 4.2296.3272.2595.6854.4797 1.0674.6586.4906.2297 1.0199.3877 1.5769.4606.2306.0302.4641.0511.7028.0511h11.2c.2266 0 .4484-.0186.6677-.0458.5631-.0699 1.0982-.2274
                                    1.5941-.4574.3888-.1804.753-.4037 1.0853-.6672 1.2483-.9899 2.0529-2.5162 2.0529-4.2294z" fill="#1d1d1f"/>
                            </svg>
                            <p>Watch</p>
                        </NavLink>
                    </li>
                    <li className={classes.Menu__Elem_Item}>
                        <NavLink to='/Items?category=Airpods' className={classes.Item_Link}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="54" viewBox="0 0 48 54" fill="none">
                                <g clip-path="url(#clip0_1_2)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8918 48.2747C11.9202 48.7021 12.0961 49.1063 12.3894 49.4185C12.6828 49.7306 13.0754 49.9311 13.5002 49.986H15.34C15.8175 49.9285 16.2563 49.6948 16.5705 49.3307C16.8847 48.9666 17.0516 48.4982 17.0386 48.0175V37.1198C15.4035 37.7807 13.6554 38.1172 11.8918 38.1105V48.2747ZM16.6897 20.3938C14.6403 20.3655 12.6276 20.9381 10.8999 22.0408C9.23093 22.9658 7.76512 24.2172 6.58976 25.7205C7.57384 25.9683 8.50027 26.4053 9.3174 27.007C10.2031 27.6079 10.9526 28.3882 11.5175 29.2973C12.3536 30.4346 12.8971 31.7601 13.1001 33.157C13.2467 33.922 13.2467 34.7079 13.1001 35.4729C13.0505 35.7851 12.9685 36.0912 12.8556 36.3864C14.343 36.2643 15.8041 35.9217 17.1909 35.37L17.5512 35.1641C18.659 34.4796 19.6862 33.6726 20.6134 32.7581L20.742 32.6039C21.9159 31.4241 22.6435 29.8733 22.8007 28.2164C22.8925 26.3842 22.3719 24.5735 21.3211 23.0697C19.314 20.6509 17.6155 20.3934 16.7021 20.3934L16.6897 20.3938ZM19.4992 25.8491L16.7202 27.8562C16.4809 28.0321 16.1816 28.1058 15.888 28.0612C15.5944 28.0166 15.3306 27.8573 15.1544 27.6182V27.6118C14.9798 27.3548 14.9081 27.0417 14.9534 26.7343C14.9986 26.427 15.1576 26.1478 15.3988 25.952L18.1264 23.9321C18.3812 23.78 18.6838 23.7292 18.9743 23.7897C19.2648 23.8503 19.5219 24.0178 19.6946 24.2591C19.8674 24.5003 19.9432 24.7977 19.907 25.0922C19.8708 25.3867 19.7252 25.6569 19.4992 25.8491ZM12.0189 33.5688C11.7678 32.1584 11.1711 30.8322 10.282 29.7089C9.81373 28.9583 9.21194 28.2999 8.5064 27.7662C7.92254 27.3265 7.23613 27.0431 6.51214 26.9427C5.95065 26.8496 5.37421 26.9211 4.85248 27.1486C3.59464 27.7369 2.59687 28.7669 2.04891 30.0429C1.79391 30.6572 1.64136 31.3091 1.59733 31.9728C1.573 32.493 1.62942 33.0138 1.76457 33.5167C1.83066 33.7534 1.91234 33.9855 2.00907 34.2115C2.24271 34.7448 2.5362 35.2498 2.88389 35.7168C3.30372 36.3435 3.82057 36.8995 4.41507 37.3638C5.45107 38.1438 6.73812 38.5148 8.03036 38.406C8.74341 38.3765 9.4415 38.1921 10.0761 37.8656C10.6904 37.6105 11.2021 37.1577 11.53 36.5789C12.0409 35.6731 12.2141 34.6155 12.0189 33.594V33.5688ZM5.89974 36.3994C5.43953 36.2951 5.00565 36.0973 4.62498 35.8185C4.24432 35.5396 3.92498 35.1855 3.68678 34.7782C3.40576 34.417 3.19958 34.0034 3.08029 33.5615C2.961 33.1197 2.93099 32.6585 2.99203 32.205C3.17211 31.6132 3.85401 31.626 4.27859 32.205L6.38862 35.1127C6.71159 35.7174 6.46709 36.4508 5.90107 36.3994H5.89974ZM36.1117
                                        38.0976C34.3489 38.1088 32.6008 37.7766 30.965 37.1198V48.0175C30.9519 48.4985 31.119 48.967 31.4335 49.3311C31.748 49.6953 32.1872 49.9288 32.6649 49.986H34.5047C34.925 49.9314 35.3139 49.7343 35.6063 49.4275C35.8988 49.1207 36.0772 48.7229 36.1117 48.3005V38.0976ZM34.8251 35.5116C34.6862 34.7675 34.6862 34.0041 34.8251 33.26C35.0274 31.8629 35.571 30.5372 36.4076 29.4002C36.9826 28.4455 37.7599 27.6286 38.6849 27.007C39.502 26.4053 40.4285 25.9683 41.4125 25.7205C40.2369 24.2175 38.7711 22.9662 37.1024 22.0408C35.3715 20.9359 33.3544 20.3632 31.3011 20.3938C30.3747 20.3938 28.7279 20.6383 26.6564 23.0701C25.6051 24.5736 25.0845 26.3845 25.1768 28.2168C25.3334 29.8738 26.0612 31.4248 27.2355 32.6042L27.3642 32.7585C28.2908 33.6735 29.3181 34.4807 30.4263 35.1645L30.7866 35.3704C32.1733 35.9223 33.6344 36.2648 35.1219 36.3868C34.9945 36.1101 34.8954 35.8213 34.8261 35.5248L34.8251 35.5116ZM32.8675 27.5988C32.7813 27.7179 32.6725 27.8189 32.5472 27.8959C32.422 27.973 32.2828 28.0246 32.1376 28.0478C31.9924 28.0711 31.8441 28.0655 31.7011 28.0314C31.558 27.9972 31.4231 27.9353 31.304 27.849L28.5057 25.8496C28.2762 25.6601 28.1268 25.3909 28.0874 25.096C28.0479 24.801 28.1213 24.5021 28.293 24.259C28.4646 24.0159 28.7217 23.8466 29.0128 23.785C29.304 23.7234 29.6076 23.7741 29.863 23.9269L32.5906 25.9469C32.8404 26.1167 33.0129 26.3782 33.0708 26.6746C33.1286 26.971 33.067 27.2783 32.8994 27.5294L32.8675 27.5988ZM45.9157 30.0949C45.3683 28.8404 44.3858 27.826 43.1495 27.2386C42.6279 27.0114 42.0517 26.9399 41.4904 27.0327C40.7663 27.1326 40.0798 27.4161 39.4962 27.8562C38.7898 28.3891 38.1878 29.0476 37.72 29.7987C36.8299 30.9214 36.233 32.2479 35.9831 33.6586C35.7774 34.677 35.9417 35.7353 36.4463 36.6435C36.7735 37.2228 37.2853 37.6758 37.9001 37.9302C38.5473 38.2388 39.2545 38.4014 39.9716 38.4062C41.2579 38.5155 42.5396 38.1492 43.574 37.3769C44.173736.9095 44.6949 36.3494 45.1181 35.7178C45.4605 35.2497 45.7496 34.7447 45.98 34.2124C46.0757 33.9861 46.1574 33.7541 46.2245 33.5177C46.3633 33.0153 46.4241 32.4945 46.4046 31.9737C46.347 31.3246 46.1817 30.6897 45.9157 30.0949ZM44.3183 34.8299C44.0722 35.2384 43.7458 35.5927 43.3588 35.8714C42.9718 36.1501 42.5322 36.347342.0667 36.4511C41.5007 36.4511 41.2562 35.7692 41.6293 35.1644L43.7393 32.257C44.1125 31.6394 44.7944 31.6266 45.026 32.257C45.0845 32.7114 45.0521 33.1728 44.9306 33.6144C44.8091 34.0561 44.601 34.4694 44.3183 34.8299Z" fill="#1D1D1F"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_2">
                                        <rect width="48" height="54" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Airpods</p>
                        </NavLink>
                    </li>
                    <li className={classes.Menu__Elem_Item}>
                        <NavLink to='/Items?category=Gadgets' className={classes.Item_Link}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="54" viewBox="0 0 40 54" fill="none">
                                <g clip-path="url(#clip0_3_2)">
                                    <path d="M5.37361 38.0182C5.61583 38.0732 5.86907 38.1173 6.11129 38.1503C7.58667 38.3815 9.11709 38.4366 10.5925 38.4145H29.42C30.8954 38.4256 32.4258 38.3815 33.9012 38.1503C34.1544 38.1063 34.3966 38.0622 34.6388 38.0182C36.0592 37.7099 37.3914 37.1814 38.1291 36.3116C38.5695 35.7831 38.7897 35.1335 38.6906 34.3408C38.6576 33.9444 38.5915 33.57 38.5034 33.1957C38.4154 32.8213 38.3163 32.436 38.2282 32.0396C37.8538 30.4762 37.0501 27.2061 36.8079 26.2923C36.5877 25.4665 36.4555 25.0481 36.3234 24.6848C35.6628 23.1654 33.8681 22.4607 31.9744 22.1524C30.2788 21.8992 27.9336 21.9212 26.0508 21.9102H13.6643C11.7816 21.9212 9.71164 21.8882 8.01607 22.1524C6.1223 22.4717 4.32763 23.1654 3.66702 24.6848C3.52389 25.0481 3.39176 25.4665 3.18257 26.2923C2.94034 27.1951 2.1476 30.4762 1.76225 32.0396C1.66315 32.436 1.56406 32.8213 1.48699 33.1957C1.39891 33.57 1.33285 33.9444 1.29982 34.3408C1.20072 35.1445 1.42093 35.7941 1.86134 36.3116C2.61004 37.1924 3.94227 37.7209 5.37361 38.0182ZM23.7497 28.4613L25.2031 30.4982H25.2251L26.3812 28.4613H27.4602L25.8196 31.0157H24.6746L22.6597 28.4613H23.7497ZM19.2685 28.4613H20.0393V27.8667H21.0852L21.0962 28.4503H22.0982L22.1092 28.8466H21.0962L21.1183 30.289C21.1183 30.5092 21.3275 30.6193 21.7789 30.6193C21.9 30.6193
                                    22.0321 30.6083 22.1532 30.6083L22.1642 31.0267C21.966 31.0377 21.7569 31.0487 21.5477 31.0487C20.4687 31.0487 20.0503 30.8505 20.0503 30.344V28.8577H19.2575L19.2685 28.4613V28.4613ZM16.1196 27.7016C16.4059 27.5474 16.8022 27.4594 17.2206 27.4373C17.2427 27.6355 17.0995 27.8337 16.8133 27.9878C16.538 28.142 16.1196 28.2411 15.6902 28.2301C15.6792 28.0429 15.8333 27.8557 16.1196 27.7016V27.7016ZM12.9266 28.7365C13.268 28.4723 13.8625 28.2961 14.5121 28.2961C14.9966 28.2961 15.437 28.4503 15.7342 28.4503C16.0315 28.4503 16.56 28.2741 17.1766 28.2851C17.7161 28.2961 18.2226 28.4283 18.5308 28.6374C18.0354 28.7806 17.7161 29.0338 17.6941 29.3201C17.6831 29.6394 18.0794 29.9367 18.696 30.0578C18.5749 30.2449 18.3877 30.4211 18.1565 30.5863C17.8262 30.8285 17.4629 31.0487 16.9564 31.0487C16.4389 31.0487 16.2737 30.8945 15.6902 30.8945C15.1067 30.8945 14.9305 31.0377 14.413 31.0487C13.8955 31.0597 13.5322 30.7955 13.2239 30.5752C12.5963 30.1018 12.2 29.276 12.9266 28.7365ZM38.7236 37.1043V44.7124C38.7236 49.3697 33.2075 49.3807 29.486 49.4468H10.5154C6.80494 49.3697 1.28881 49.3587 1.28881 44.7014V37.1153C1.28881 37.0933 1.31083 37.0933 1.32184 37.1043C1.9274 37.9081 3.05044 38.6458 5.14239 39.0972C6.49665 39.3834 8.11516 39.5266 10.097 39.5266H29.8934C31.8753 39.5266 33.5048 39.3834 34.859 39.0972C36.962 38.6458 38.085 37.8971 38.6796 37.0823C38.7016 37.0713 38.7236 37.0823 38.7236 37.1043V37.1043Z" fill="#1D1D1F"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_2">
                                        <rect width="40" height="54" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Gadgets</p>
                        </NavLink>
                    </li>
                    <li className={classes.Menu__Elem_Item}>
                        <NavLink to='/Items?category=Accessories' className={classes.Item_Link}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="54" viewBox="0 0 35 54" fill="none">
                                <g clip-path="url(#clip0_3_16)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 46.1269L11.9999 9.93658C11.9871 9.28936 12.1042 8.64614 12.3443 8.04498C12.5845 7.44382 12.9427 6.89692 13.3979 6.43665C13.8531 5.97638 14.396 5.61208 14.9945 5.36532C15.5929 5.11855 16.2348 4.99433 16.8821 5H24.2698C24.0627 4.15287 23.5801 3.39853 22.8977 2.85551C22.2154 2.31249 21.3719 2.01156 20.4999 2H3.9C2.86566 2 1.87368 2.41089 1.14228 3.14228C0.410892 3.87368 0 4.86566 0 5.9V46.0999C0 47.1343 0.410892 48.1262 1.14228 48.8576C1.87368 49.589 2.86566 49.9999 3.9 49.9999H13.9208C13.3155 49.5538 12.8255 48.9696 12.4914 48.296C12.1572 47.6224 11.9887 46.8787 11.9998 46.1269ZM10 9.5C10 9.8283 9.93534 10.1534 9.8097 10.4567C9.68406 10.76 9.49991 11.0356 9.26777 11.2678C9.03562 11.4999 8.76002 11.6841 8.45671 11.8097C8.15339 11.9353 7.8283 12 7.5 12H4.5C3.83696 12 3.20107 11.7366 2.73223 11.2678C2.26339 10.7989 2 10.163 2 9.5V6.5C2 5.83696 2.26339 5.20107 2.73223 4.73223C3.20107 4.26339 3.83696 4 4.5 4H7.5C8.16304 4 8.79893 4.26339 9.26777 4.73223C9.73661 5.20107 10 5.83696 10 6.5V9.5ZM30.177 20H17.823C17.3282 20.0124 16.8586 20.2203 16.5169 20.5783C16.1752 20.9363 15.9893 21.4152 16 21.91V45.09C15.9893 45.5848 16.1752 46.0637 16.5169 46.4217C16.8586 46.7797 17.3283 46.9876 17.8231 47H30.1769C30.6717 46.9876 31.1414 46.7797 31.4831 46.4217C31.8248 46.0637 32.0107 45.5848 32 45.09V21.91C32.0107 21.4152 31.8248 20.9363 31.4831 20.5783C31.1414 20.2203 30.6718 20.0124 30.177 20ZM16.8829 6.00964H31.1171C31.6284 6.00997 32.1346 6.1112 32.6066 6.30752C33.0787 6.50385 33.5073 6.79141 33.8681 7.15372C34.2288 7.51603 34.5144 7.94596 34.7087 8.41889C34.9029 8.89181 35.0019 9.39842 35 9.90967V46.1008C35.0019
                                        46.6119 34.9029 47.1184 34.7087 47.5912C34.5145 48.064 34.2289 48.4939 33.8683 48.8561C33.5077 49.2183 33.0791 49.5058 32.6071 49.7021C32.1352 49.8984 31.6291 49.9996 31.118 49.9999H16.8828C15.853 49.9999 14.8654 49.5909 14.1373 48.8627C13.4091 48.1345 13 47.1469 13 46.1171L13.0001 9.89246C13.0001 9.38256 13.1005 8.87765 13.2957 8.40657C13.4908 7.93548 13.7768 7.50744 14.1374 7.14689C14.4979 6.78633 14.926 6.50033 15.397 6.3052C15.8681 6.11007 16.373 6.00964 16.8829 6.00964ZM15.7322 8.73223C15.2634 9.20107 15 9.83696 15 10.5V13.5C15 14.163 15.2634 14.7989 15.7322 15.2678C16.2011 15.7366 16.837 16 17.5 16H20.5C21.163 16 21.7989 15.7366 22.2678 15.2678C22.7366 14.7989 23 14.163 23 13.5V10.5C23 9.83696 22.7366 9.20107 22.2678 8.73223C21.7989 8.26339 21.163 8 20.5 8H17.5C16.837 8 16.2011 8.26339 15.7322 8.73223ZM32.191 47.1295C32.7203 46.5838 33.0113 45.8502 33 45.09V21.91C33.0114 21.1498 32.7204 20.4162 32.191 19.8705C31.6616 19.3248 30.9372 19.0117 30.177 19H17.823C17.0628 19.0117 16.3384 19.3248 15.809 19.8705C15.2796 20.4162 14.9886 21.1498 15 21.91V45.09C14.9886 45.8502 15.2797 46.5838 15.809 47.1295C16.3384 47.6752 17.0629 47.9883 17.8231 48H30.1769C30.9371 47.9883 31.6616 47.6752 32.191 47.1295Z" fill="#333333"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_16">
                                    <rect width="35" height="54" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Accessories</p>
                        </NavLink>
                    </li>
                    <li className={classes.Menu__Elem_Item}>
                        <NavLink to='/Items?category=Comparison' className={classes.Item_Link}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="54" viewBox="0 0 45 54" width="45">
                                <path d="m0 0h45v54h-45z" fill="none"/>
                                <path d="m14.5 13h-9a5.5066 5.5066 0 0 0 -5.5 5.5v26a5.5069 5.5069 0 0 0 5.5 5.5h9a5.5069 5.5069 0 0 0 5.5-5.5v-26a5.5066 5.5066 0 0 0 -5.5-5.5zm3.5 31.5a3.5042 3.5042 0 0 1 -3.5 3.5h-9a3.5042 3.5042 0 0 1 -3.5-3.5v-26a3.5042 3.5042 0 0 1 3.5-3.5h9a3.5042 3.5042 0 0 1 3.5 3.5zm26-8h1v6h-1zm-12-23.5h6v1h-6zm12 15.5h1v6h-1zm-12 20.5h6v1h-6zm-6-14.5h-1v-6h1zm0-8h-1v-6h1zm0 16h-1v-6h1zm14-28.45v-1.0247a5.5056 5.5056 0 0 1 5 5.4747h-1a4.4847 4.4847 0 0 0 -4-4.45zm4 30.45h1a5.5056 5.5056 0 0 1 -5 5.4747v-1.0247a4.4847 4.4847 0 0 0 4-4.45zm-14-31.4747v1.0247a4.4847 4.4847 0 0 0 -4 4.45h-1a5.5056 5.5056 0 0 1 5-5.4747zm0 35.9247v1.0251a5.5056 5.5056 0 0 1 -5-5.4751h1a4.4847 4.4847 0 0 0 4 4.45zm14-28.45h1v6h-1z" fill="#1d1d1f"/>
                            </svg>
                            <p>Comparison</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
