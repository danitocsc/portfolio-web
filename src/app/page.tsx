import Image from "next/image";
import ProjectsCollage from "@/components/ProjectsCollage";
import { SiNextdotjs, SiPython, SiVercel, SiGooglegemini, SiAnthropic, SiOpenai } from "react-icons/si";


export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_800px_at_50%_-200px,rgba(99,102,241,0.20),transparent)] dark:bg-[radial-gradient(1200px_800px_at_50%_-200px,rgba(139,92,246,0.25),transparent)] dark:bg-gradient-to-b dark:from-slate-950 dark:via-indigo-950/50 dark:to-slate-950 text-slate-900 dark:text-slate-100">


      <main className="mx-auto max-w-7xl px-6 pt-10 flex flex-col gap-10">
        <section 
          style={{
            marginBottom: "8px",
            width: "100%",
            marginTop: "16px",
            marginLeft: "auto",
            marginRight: "auto",
            ["--stylex-logical-start" as any]: "left",
            ["--stylex-logical-end" as any]: "right",
            ["--xtyhzte" as any]: "374px",
            ["--x1h184of" as any]: "768px",
            ["--x10tbaz9" as any]: "16px",
            ["--x1if4rky" as any]: "16px",
            ["--x84l2g7" as any]: "250px",
            ["--x1ikr0bq" as any]: "12px",
            ["--xlx7u6e" as any]: "0px",
            ["--xik8ccv" as any]: "0px",
            ["--x1g8fdq7" as any]: "0px",
            ["--xexklgv" as any]: "0px",
            ["--xc79r3t" as any]: "0px",
            ["--x1sb3civ" as any]: "0px",
            ["--x1dka7z" as any]: "0px",
            ["--x1k4myr1" as any]: "1px",
            ["--x1bu8lrs" as any]: "0px",
            ["--x1fx80fs" as any]: "0px",
            ["--x1qhsdun" as any]: "1px",
            ["--xdemnd9" as any]: "1px",
            ["--x1gepq4w" as any]: "0px",
            ["--x1wp4dm2" as any]: "0px",
            ["--xeuc15l" as any]: "0px",
            ["--x8g8wmh" as any]: "0px",
            ["--x16si9m3" as any]: "0px",
            ["--xo3rck8" as any]: "0px",
            ["--x8gv6bx" as any]: "0px",
            ["--xfrk6k2" as any]: "solid",
            ["--xbnnbcs" as any]: "1px",
            ["--x1iqrbwf" as any]: "12px",
            ["--x4bzwim" as any]: "2px",
            ["--xk37jod" as any]: "auto",
            ["--xoir9yd" as any]: "12px",
            ["--xgwz7a" as any]: "16px",
            ["--xwutvj3" as any]: "12px",
            ["--xdaiwkk" as any]: "12px",
            ["--xgam6tz" as any]: "16px",
            ["--xa3t32q" as any]: "0px",
            ["--x17m3bg8" as any]: "0px",
            ["--xovr52e" as any]: "0px",
            ["--x16mvtsk" as any]: "5px",
            ["--x4yl131" as any]: "4px",
            ["--xs2xjav" as any]: "5px",
            ["--xbxt6u0" as any]: "5px",
            ["--x6cgvui" as any]: "5px",
            ["--x1151t8p" as any]: "10px",
            ["--x1lst64k" as any]: "6px",
            ["--x3j9qmu" as any]: "6px",
            ["--xmo9kjt" as any]: "6px",
            ["--x1s825o0" as any]: "12px",
            ["--xyeoegy" as any]: "5px",
            ["--xez4x4z" as any]: "5px",
            ["--x1pbyom4" as any]: "5px",
            ["--x1h23lpg" as any]: "10px",
            ["--x178rz4h" as any]: "5px",
            ["--x19jd6gk" as any]: "5px",
            ["--x1m0kmm" as any]: "5px",
            ["--x18og1a8" as any]: "10px",
            ["--x198yf9l" as any]: "5px",
            ["--x17s2s01" as any]: "10px",
            ["--x8scjvk" as any]: "5px",
            ["--xkd1r8e" as any]: "5px",
            ["--x1napzm8" as any]: "5px",
            ["--x6jkwj7" as any]: "5px",
            ["--x1et33sf" as any]: "5px",
            ["--x15843vv" as any]: "10px",
            ["--x1apez3n" as any]: "5px",
            ["--x1prtngd" as any]: "10px",
            ["--xa6vsrr" as any]: "5px",
            ["--x17re1hs" as any]: "5px",
            ["--x1ftodw5" as any]: "4px",
            ["--x155matd" as any]: "4px",
            ["--x1yfdafw" as any]: "4px",
            ["--x1it9t5o" as any]: "8px",
            ["--x1602v8z" as any]: "5px",
            ["--xqfjaf7" as any]: "5px",
            ["--x1n945xb" as any]: "5px",
            ["--x9huxp1" as any]: "10px",
            ["--x287wji" as any]: "0px",
            ["--xyowug9" as any]: "0px",
            ["--x1u0655h" as any]: "0px",
            ["--xjvkmi1" as any]: "4px",
            ["--x1hmaw5b" as any]: "5px",
            ["--xjen6ej" as any]: "3px",
            ["--x1adnsjm" as any]: "8px",
            ["--x1c4lz48" as any]: "8px",
            ["--x19q6y20" as any]: "8px",
            ["--xv29y53" as any]: "8px",
            ["--x1tkfw0i" as any]: "8px",
            ["--x1f9f2th" as any]: "0px",
            ["--x1bom0sp" as any]: "0px",
            ["--xs0bd1e" as any]: "0",
            ["--x7z3nr7" as any]: "12px",
            ["--x3ytj5f" as any]: "8px",
            ["--x6ixmsi" as any]: "12px",
            ["--x10brjbm" as any]: "auto",
            ["--x18kqi07" as any]: "12px",
            ["--x12pvdnb" as any]: "auto",
            ["--x19rz69o" as any]: "none",
            ["--xbx14lq" as any]: "auto",
            ["--x10y4ran" as any]: "12px",
            ["--xnrljl1" as any]: "16px",
            ["--xju61ic" as any]: "8px",
            ["--xg3eg28" as any]: "8px",
            ["--x1hcq818" as any]: "12px",
            ["--x1hvovgm" as any]: "12px",
            ["--xiessm1" as any]: "8px",
            ["--xh89adf" as any]: "8px",
            ["--x1pkp4r4" as any]: "12px",
            ["--x6pwzom" as any]: "12px",
            ["--x15nmaec" as any]: "8px",
            ["--x79phgq" as any]: "16px",
            ["--xn98y3a" as any]: "12px",
            ["--xn9bwek" as any]: "16px",
            ["--x1lzl6ls" as any]: "3px",
            ["--x1nkglug" as any]: "8px",
            ["--x189z1lz" as any]: "0 2px 4px 0 rgba(0, 0, 0, .5)",
            ["--x1o6ias2" as any]: "none",
            ["--x3nbg8q" as any]: "0",
            ["--x19gqeph" as any]: "1",
            ["--xjl0f5w" as any]: ".4",
            ["--x11tx24z" as any]: ".4",
            ["--x1bt26c2" as any]: ".2",
            ["--x8jlfy6" as any]: "1",
            ["--x132c4bx" as any]: ".5",
            ["--xnzvq2j" as any]: "1",
            ["--x1mhjrx2" as any]: ".4",
            ["--x1ad7l02" as any]: ".4",
            ["--xqpeelq" as any]: "12px",
            ["--x1rl2gpv" as any]: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            ["--x1oyn4z3" as any]: "16px",
            ["--xpoq6yp" as any]: "400",
            ["--x1a730wv" as any]: "20px",
            ["--x1xbp41d" as any]: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            ["--x4cz878" as any]: "16px",
            ["--x1d6k8u6" as any]: "14px",
            ["--xiqovf7" as any]: "18px",
            ["--bubbleContentUserBackgroundColor" as any]: "#000000",
            ["--bubbleContentUserColor" as any]: "#FFFFFF",
            ["--buttonSendBackgroundColor" as any]: "#0866FF",
            ["--x1ev4bvd" as any]: "#F0F0F0",
            ["--xer23z7" as any]: "rgba(0, 0, 0, .06)",
            ["--x1bxvvwh" as any]: "#000000",
            ["--xiw6jcg" as any]: "#323436",
            ["--xlq2kmo" as any]: "#FFFFFF",
            ["--xx6r3m5" as any]: "rgba(0, 0, 0, .06)",
            ["--x1wb1v04" as any]: "#080809",
            ["--xo864yi" as any]: "transparent",
            ["--x1wabinx" as any]: "#cdcfd1",
            ["--x13t7dcq" as any]: "rgba(0, 0, 0, .05)",
            ["--xfsprpa" as any]: "transparent",
            ["--x1aumypx" as any]: "transparent",
            ["--x97wcsu" as any]: "transparent",
            ["--xl9ojqf" as any]: "#080809",
            ["--xacx6cu" as any]: "transparent",
            ["--x1upcoxv" as any]: "rgba(0, 0, 0, .05)",
            ["--x1y02xta" as any]: "transparent",
            ["--x2v0w26" as any]: "transparent",
            ["--xbakyew" as any]: "transparent",
            ["--xftuvfa" as any]: "#080809",
            ["--x126rt5m" as any]: "transparent",
            ["--x1iz8wdo" as any]: "rgba(0, 0, 0, .05)",
            ["--xdg47pa" as any]: "transparent",
            ["--xdstih4" as any]: "rgba(21, 33, 39, .2)",
            ["--x17h09wl" as any]: "#445664",
            ["--xmqvuy9" as any]: "#FFFFFF",
            ["--xdvz3pk" as any]: "#0866FF",
            ["--x1lgju46" as any]: "transparent",
            ["--x1evxk78" as any]: "#FFFFFF",
            ["--x1pwsir7" as any]: "#cdcfd1",
            ["--x6r21d0" as any]: "#0759F2",
            ["--x1f8qg8u" as any]: "transparent",
            ["--xlucz4u" as any]: "transparent",
            ["--xe31vrr" as any]: "#E2E5E9",
            ["--xsl46bp" as any]: "#080809",
            ["--x1r17ggk" as any]: "#E2E5E9",
            ["--xeq63j5" as any]: "rgba(0, 0, 0, .05)",
            ["--xqu9v5" as any]: "#E2E5E9",
            ["--x154p3i6" as any]: "transparent",
            ["--x1xj48ei" as any]: "#FFFFFF",
            ["--xqx1b3w" as any]: "#cdcfd1",
            ["--x1clyshj" as any]: "rgba(0, 0, 0, .05)",
            ["--x1f8hdz3" as any]: "transparent",
            ["--xz27ylr" as any]: "transparent",
            ["--x1f1vpbm" as any]: "transparent",
            ["--xw6x4cz" as any]: "transparent",
            ["--x1t42zyj" as any]: "transparent",
            ["--x19fognk" as any]: "#080809",
            ["--x1nycba7" as any]: "transparent",
            ["--x11nuaxw" as any]: "rgba(0, 0, 0, .05)",
            ["--xt2duer" as any]: "transparent",
            ["--xkg1yw" as any]: "#FFE3DE",
            ["--x17xti0e" as any]: "transparent",
            ["--x198b9t9" as any]: "#FFE3DE",
            ["--xcv04am" as any]: "rgba(0, 0, 0, .05)",
            ["--x32uek6" as any]: "transparent",
            ["--x16oxp5a" as any]: "#F0F0F0",
            ["--xzsxl4p" as any]: "rgba(0, 0, 0, .05)",
            ["--x9yfhik" as any]: "8px",
            ["--x14ofxiu" as any]: "16px",
            ["--x1kpccw5" as any]: "#000000",
            ["--xe5i04x" as any]: "#8A8D91",
            ["--xiv1y0m" as any]: "#B0B3B8",
            ["--xd9u4s4" as any]: "#E2E5E9",
            ["--x1b39yh6" as any]: "linear-gradient(90deg, grey, white, grey)",
            ["--xq6rgv9" as any]: "transparent",
            ["--x1rhfrof" as any]: "#000000",
            ["--x12qb30c" as any]: "#FFFFFF",
            ["--xqt9fth" as any]: "#F53947",
            ["--xzdavdm" as any]: "#8A8D91",
            ["--x1p42rpq" as any]: "#FFFFFF",
            ["--x1fowau0" as any]: "#FFFFFF",
            ["--x4cdsqv" as any]: "rgba(0, 0, 0, .15)",
            ["--x18tv962" as any]: "rgba(0, 0, 0, .05)",
            ["--x1mxho3s" as any]: "var(--bubbleContentUserBackgroundColor)",
            ["--x1drzc3" as any]: "#F0F0F0",
            ["--x215qz1" as any]: "#0866FF",
            ["--x5lf19y" as any]: "#FFFFFF",
            ["--x125vgxg" as any]: "#000000",
            ["--xw4mkmd" as any]: "transparent",
            ["--x15j2dhm" as any]: "#CED0D4",
            ["--x1h50e4l" as any]: "#080809",
            ["--x11psvdz" as any]: "#65676B",
            ["--x149dqt" as any]: "#FFFFFF",
            ["--xbdfujg" as any]: "#000000",
            ["--x1s39hm7" as any]: "#e1e4e8",
            ["--x1p8ippb" as any]: "#f6f8fa",
            ["--x15bmxmr" as any]: "#000000",
            ["--xkvygis" as any]: "#65686C",
            ["--xwxij5g" as any]: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5))",
            ["--xyaxlxh" as any]: "#FFFFFF",
            ["--xepydxb" as any]: "#F1F4F766",
            ["--x1196mbi" as any]: "#FFFFFF",
            ["--x1dxmqov" as any]: "#CCD3DB",
            ["--xadhof8" as any]: "#F53947",
            ["--x1a4bunx" as any]: "#000000",
            ["--x1ihezxe" as any]: "#FFFFFF",
            ["--xx5vayt" as any]: "cubic-bezier(.08, .52, .52, 1)",
            ["--x6a00ex" as any]: "cubic-bezier(.08, .52, .52, 1)",
            ["--xvv23fx" as any]: ".1s",
            ["--x1pfwwdm" as any]: "reverse",
            ["--x1osw725" as any]: "8s",
            ["--xakqpoz" as any]: "x19100ke-B",
            ["--x1clm63l" as any]: "linear",
            ["--x117ptrb" as any]: "opacity .2s ease",
            ["--xcqs4f3" as any]: "transform 50ms linear",
            ["--xg3aput" as any]: "0ms",
            ["--x19wb9r" as any]: "0s",
            ["--xo7axmw" as any]: ".2s",
            ["--xtkxyfg" as any]: ".2s",
            ["--xm2qnaw" as any]: ".4s",
            ["--x1hcjaay" as any]: ".4s",
            ["--x10e0ozs" as any]: "2s",
            ["--x11zsdp1" as any]: "x1gpjdt6-B",
            ["--x6slekt" as any]: "linear",
            ["--xmypfwe" as any]: "2s",
            ["--x61we9e" as any]: "x16ddlwn-B",
            ["--xwbpd4y" as any]: "12px",
            ["--x1e5o1xa" as any]: "8px",
            ["--x10124fl" as any]: "24px",
            ["--x1d8jg19" as any]: "24px",
            ["--x19huaox" as any]: "24px",
            ["--xl8uc24" as any]: "50%",
            ["--x139ry6a" as any]: "50%",
            ["--xiyfnn2" as any]: "50%",
            ["--x1ttpv1t" as any]: "6px",
            ["--x1wtafy2" as any]: "6px",
            ["--x82vd9a" as any]: "6px",
            ["--xjnrlz3" as any]: "5px",
            ["--x16xtl57" as any]: "5px",
            ["--x18ttt0t" as any]: "5px",
            ["--x1tixki8" as any]: "50%",
            ["--x1ciwlvv" as any]: "50%",
            ["--xiyjxiy" as any]: "50%",
            ["--xlxghfy" as any]: "50%",
            ["--x1ruj3lq" as any]: "50%",
            ["--x1epajyq" as any]: "50%",
            ["--xu3wp72" as any]: "50%",
            ["--x16dxbju" as any]: "4px",
            ["--x168tnhs" as any]: "4px",
            ["--xgtnwqa" as any]: "4px",
            ["--x6ulrhq" as any]: "50%",
            ["--x1j99h4o" as any]: "50%",
            ["--xlcg5hk" as any]: "50%",
            ["--x1cqce2t" as any]: "24px",
            ["--xz5hhjv" as any]: "24px",
            ["--xjziy7d" as any]: "24px",
            ["--xkjoe7p" as any]: "8px",
            ["--xo0722j" as any]: "8px",
            ["--xpenkto" as any]: "0",
            ["--x1ba17e0" as any]: "2px",
            ["--x4utseb" as any]: "3px",
            ["--x13w4mq5" as any]: "32px",
            ["--x1uzztpd" as any]: "95%",
            ["--x1tc54p7" as any]: "75%",
            ["--x1rqbjtg" as any]: "min(334px, 100vw - 48px)",
            ["--x1wk4hzn" as any]: "32px",
            ["--xy5yvoz" as any]: "32px",
            ["--x18uyjkh" as any]: "32px",
            ["--xxqa0dq" as any]: "32px",
            ["--x3e6wff" as any]: "40px",
            ["--xkca2vv" as any]: "36px",
            ["--x82mkzn" as any]: "32px",
            ["--x1r0jlc1" as any]: "32px",
            ["--x19dpyk1" as any]: "64px",
            ["--x4ach5t" as any]: "64px",
            ["--x1axk1tg" as any]: "32px",
            ["--xr0fzoy" as any]: "32px",
            ["--xwkvfc1" as any]: "36px",
            ["--x1kdnp2l" as any]: "36px",
            ["--xafjmui" as any]: "28px",
            ["--xh7z1na" as any]: "32px",
            ["--xios89i" as any]: "32px",
            ["--x15etoab" as any]: "32px",
            ["--x5muypq" as any]: "32px",
            ["--xrxntdb" as any]: "100%",
            ["--x5suos6" as any]: "400% auto",
            ["--xzbtx9w" as any]: "64px",
            ["--xzubya6" as any]: "50px",
            ["--x1m69m10" as any]: "8px",
            ["--xik0f35" as any]: "8px",
            ["--xalic96" as any]: "4px",
            ["--x1pap48z" as any]: "72px",
            ["--xdt1ml" as any]: "12px",
            ["--x5yrerl" as any]: "3px",
            ["--x1s60eyr" as any]: "10px",
            ["--x4jee19" as any]: "4px",
            ["--xuvcqbj" as any]: "0%",
            ["--xt15msc" as any]: "#FFFFFF",
            ["--xqg8v9z" as any]: "#F1F4F7",
            ["--x666kwq" as any]: "#E6EBEF",
            ["--x1pemqhl" as any]: "#0A1317",
            ["--xbdgffm" as any]: "#1C2B33",
            ["--xa5yyo8" as any]: "#4BA9FE4D",
            ["--xxknqzc" as any]: "#0000008C",
            ["--x158zvr2" as any]: "#2B3D46B2",
            ["--x16izkdv" as any]: "#1C2B33E6",
            ["--x1sbw8zh" as any]: "#FFFFFFCC",
            ["--xk3by9m" as any]: "#F1F4F7B2",
            ["--xlev17u" as any]: "#F1F4F7CC",
            ["--x11l78wh" as any]: "#FB7D874D",
            ["--x6tbpgk" as any]: "#FFFFFF99",
            ["--x14ttt0u" as any]: "#3CBC224D",
            ["--x24fn9h" as any]: "#A197FF4D",
            ["--x1rlt156" as any]: "#FBCE034D",
            ["--xwlrjka" as any]: "#0A13171F",
            ["--x1487n2n" as any]: "#0457CB",
            ["--xtgk73w" as any]: "#0A131773",
            ["--x1iy7589" as any]: "#FFFFFF",
            ["--x1sie9h7" as any]: "#748695",
            ["--xca3acd" as any]: "#0A131726",
            ["--x5bxsh4" as any]: "#44566480",
            ["--xn93tna" as any]: "#CCD3DB",
            ["--x1hg3a3i" as any]: "#8494A3",
            ["--xeh2i4f" as any]: "#1C2B33",
            ["--xzq5v5e" as any]: "#5D6C7B",
            ["--x9mpi4i" as any]: "#CCD3DB",
            ["--x1y5o4kb" as any]: "#FFFFFF",
            ["--xfe8al5" as any]: "#0143B5",
            ["--xyil8vw" as any]: "#CCD3DB",
            ["--xuc1hzd" as any]: "#AFD7FF4D",
            ["--xza3hsg" as any]: "#0171E3",
            ["--xud6c83" as any]: "#042F97",
            ["--x1ikcymc" as any]: "#0457CB",
            ["--x18os2xs" as any]: "#DBECFF",
            ["--x1f2g9z6" as any]: "#DDE2E8",
            ["--xz9lgvt" as any]: "#0171E3",
            ["--x6axvlg" as any]: "#042F97",
            ["--xt2qcoh" as any]: "#0A131726",
            ["--x6x6ilv" as any]: "#0A13174D",
            ["--xh6bbig" as any]: "#0457CB",
            ["--x1esmk3j" as any]: "#D31130",
            ["--xpa06uk" as any]: "#4E606F",
            ["--x1jzxkya" as any]: "#147B29",
            ["--x127c7k2" as any]: "#FBCE03",
            ["--xmdq6we" as any]: "#0A1317",
            ["--x1gy3fwr" as any]: "#FFFFFF",
            ["--x1y8ex37" as any]: "#44566480",
            ["--xm07qmq" as any]: "#FFFFFF",
            ["--xeytzu2" as any]: "#F1F4F74D",
            ["--x1glbl71" as any]: "#042F97",
            ["--x7vh06b" as any]: "#7B0210",
            ["--x1hiqbtc" as any]: "#647685",
            ["--x9igmjo" as any]: "#09441F",
            ["--x1y1vcbx" as any]: "#0A1317",
            ["--x1t4c8kb" as any]: "#4507A9",
            ["--xj6fmph" as any]: "#5D6C7B",
            ["--xusudzu" as any]: "#5D2E04",
          }}
          className="bg-white text-black border-4 border-black rounded-[35px] shadow-[12px_12px_0px_#000] overflow-hidden flex flex-col w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[16px_16px_0px_#000]"
        >
          {/* Post Header */}
          <div className="flex items-center justify-between border-b-4 border-black px-5 py-3 bg-slate-950 text-white flex-shrink-0">
            <span className="font-bold text-[16px] tracking-tight">SOBRE MÍ // BIOGRAFÍA</span>
            <div className="bg-emerald-500 text-white font-black uppercase text-[9px] px-2 py-0.5 border-2 border-white shadow-[2px_2px_0px_#000]">
              Disponible
            </div>
          </div>

          <div className="p-8 flex flex-col gap-8 bg-white">
            {/* Upper profile section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              {/* Left Column: Avatar with Instagram Story Ring */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="relative p-[5px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-lg">
                  <div className="p-[3px] rounded-full bg-white">
                    <div className="relative w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-full overflow-hidden bg-neutral-100">
                      <Image
                        src="/profile.png"
                        alt="Foto del perfil de danielcruztj"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Profile Info */}
              <div className="flex-1 flex flex-col gap-4 text-center sm:text-left min-w-0">
                {/* Row 1: Username & Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <h2 className="text-2xl font-bold tracking-tight text-black truncate">danielcruztj</h2>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                    <a
                      href="mailto:josedcp1@gmail.com"
                      className="px-4 py-1.5 rounded-lg text-sm font-bold bg-[#efefef] hover:bg-[#dbdbdb] text-black transition-colors"
                    >
                      Mensaje
                    </a>
                    <a
                      href="https://www.linkedin.com/in/danielcruztj/"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-1.5 rounded-lg text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/danitocsc"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-1.5 rounded-lg text-sm font-bold bg-black text-white hover:opacity-90 transition-opacity"
                    >
                      GitHub
                    </a>
                  </div>
                </div>



                {/* Row 3: Bio Details */}
                <div className="text-sm">
                  <h3 className="font-bold text-lg text-black">Daniel Cruz</h3>
                  <span className="text-neutral-500 font-medium block text-sm mt-0.5">AI Developer & Data Analyst</span>
                  <p className="text-neutral-800 mt-2 text-sm leading-relaxed">
                    Transformo datos en conocimiento accionable mediante soluciones digitales, flujos de trabajo inteligentes y automatización con IA. Especialista en Next.js, Astro, LLMs y análisis de datos.
                  </p>
                  <a
                    href="https://github.com/danitocsc"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-blue-900 font-bold text-sm mt-3 hover:underline"
                  >
                    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    <span>github.com/danitocsc</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Highlights Section */}
            <div className="border-t border-neutral-100 pt-6 flex gap-6 overflow-x-auto justify-center sm:justify-start">
              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="p-[3px] rounded-full border border-neutral-200 bg-neutral-50 group-hover:scale-105 transition-transform">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden bg-neutral-100 relative flex items-center justify-center">
                    <SiNextdotjs className="w-8 h-8 text-black" />
                  </div>
                </div>
                <span className="text-[10px] font-bold text-neutral-800">Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="p-[3px] rounded-full border border-neutral-200 bg-neutral-50 group-hover:scale-105 transition-transform">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden bg-neutral-100 relative flex items-center justify-center">
                    <SiPython className="w-8 h-8 text-[#3776AB]" />
                  </div>
                </div>
                <span className="text-[10px] font-bold text-neutral-800">Python</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="p-[3px] rounded-full border border-neutral-200 bg-neutral-50 group-hover:scale-105 transition-transform">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden bg-neutral-100 relative flex items-center justify-center">
                    <SiGooglegemini className="w-7 h-7 text-[#1A73E8]" />
                  </div>
                </div>
                <span className="text-[10px] font-bold text-neutral-800">Gemini</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="p-[3px] rounded-full border border-neutral-200 bg-neutral-50 group-hover:scale-105 transition-transform">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden bg-neutral-100 relative flex items-center justify-center">
                    <SiAnthropic className="w-7 h-7 text-[#D97706]" />
                  </div>
                </div>
                <span className="text-[10px] font-bold text-neutral-800">Claude</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="p-[3px] rounded-full border border-neutral-200 bg-neutral-50 group-hover:scale-105 transition-transform">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden bg-neutral-100 relative flex items-center justify-center">
                    <SiOpenai className="w-7 h-7 text-[#10A37F]" />
                  </div>
                </div>
                <span className="text-[10px] font-bold text-neutral-800">GPT</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="p-[3px] rounded-full border border-neutral-200 bg-neutral-50 group-hover:scale-105 transition-transform">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden bg-neutral-100 relative flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#2d50f2]" viewBox="0 0 1024 1024" fill="currentColor">
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm172.4 564.4c-22.3 38.6-63.5 64.6-110.9 64.6h-123c-47.4 0-88.6-26-110.9-64.6-22.3-38.6-22.3-86.4 0-125l61.5-106.6c22.3-38.6 63.5-64.6 110.9-64.6h123c47.4 0 88.6 26 110.9 64.6 22.3 38.6 22.3 86.4 0 125l-61.5 106.6z" />
                    </svg>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-neutral-800">DeepSeek</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="p-[3px] rounded-full border border-neutral-200 bg-neutral-50 group-hover:scale-105 transition-transform">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden bg-neutral-100 relative flex items-center justify-center">
                    <SiVercel className="w-6 h-6 text-black" />
                  </div>
                </div>
                <span className="text-[10px] font-bold text-neutral-800">Vercel</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white text-black border-4 border-black rounded-[35px] shadow-[12px_12px_0px_#000] overflow-hidden flex flex-col w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[16px_16px_0px_#000]">
          {/* Post Header */}
          <div className="flex items-center justify-between border-b-4 border-black px-5 py-3 bg-slate-950 text-white flex-shrink-0">
            <span className="font-bold text-[18px] tracking-tight">⚙️ HABILIDADES TÉCNICAS // TECH_STACK</span>
            <div className="bg-yellow-400 text-black font-black uppercase text-[8px] px-1.5 py-0.5 border-2 border-black rotate-[-2deg]">
              SKILLS
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 flex flex-col gap-6 text-left bg-white">
            <p className="text-xs text-neutral-600 font-medium">
              Herramientas y tecnologías con las que construyo soluciones eficientes en desarrollo y datos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Dev Web */}
              <div className="rounded-2xl border-2 border-black p-4 shadow-[4px_4px_0px_#000] bg-neutral-50">
                <h3 className="font-black text-sm text-indigo-700 mb-3 uppercase tracking-wider">
                  Desarrollo Web & Backend
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-medium">
                  <span className="px-2.5 py-1 rounded border-2 border-black bg-blue-100 text-black font-extrabold shadow-[1px_1px_0px_#000]">TypeScript</span>
                  <span className="px-2.5 py-1 rounded border-2 border-black bg-yellow-100 text-black font-extrabold shadow-[1px_1px_0px_#000]">Python</span>
                  <span className="px-2.5 py-1 rounded border-2 border-black bg-indigo-100 text-black font-extrabold shadow-[1px_1px_0px_#000]">Next.js</span>
                  <span className="px-2.5 py-1 rounded border-2 border-black bg-orange-100 text-black font-extrabold shadow-[1px_1px_0px_#000]">Astro</span>
                  <span className="px-2.5 py-1 rounded border-2 border-black bg-neutral-100 text-black font-extrabold shadow-[1px_1px_0px_#000]">Flask</span>
                </div>
              </div>

              {/* IA */}
              <div className="rounded-2xl border-2 border-black p-4 shadow-[4px_4px_0px_#000] bg-neutral-50">
                <h3 className="font-black text-sm text-indigo-700 mb-3 uppercase tracking-wider">
                  IA & Automatización
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-medium">
                  <span className="px-2.5 py-1 rounded border-2 border-black bg-emerald-100 text-black font-extrabold shadow-[1px_1px_0px_#000]">GPT</span>
                  <span className="px-2.5 py-1 rounded border-2 border-black bg-purple-100 text-black font-extrabold shadow-[1px_1px_0px_#000]">Claude</span>
                  <span className="px-2.5 py-1 rounded border-2 border-black bg-blue-100 text-black font-extrabold shadow-[1px_1px_0px_#000]">Gemini</span>
                  <span className="px-2.5 py-1 rounded border-2 border-black bg-rose-100 text-black font-extrabold shadow-[1px_1px_0px_#000]">n8n</span>
                </div>
              </div>

              {/* Data */}
              <div className="rounded-2xl border-2 border-black p-4 shadow-[4px_4px_0px_#000] bg-neutral-50 md:col-span-2">
                <h3 className="font-black text-sm text-indigo-700 mb-3 uppercase tracking-wider">
                  Datos & Herramientas
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-medium">
                  <span className="px-2.5 py-1 rounded border-2 border-black bg-sky-100 text-black font-extrabold shadow-[1px_1px_0px_#000]">SQL</span>
                  <span className="px-2.5 py-1 rounded border-2 border-black bg-orange-100 text-black font-extrabold shadow-[1px_1px_0px_#000]">Git</span>
                  <span className="px-2.5 py-1 rounded border-2 border-black bg-amber-100 text-black font-extrabold shadow-[1px_1px_0px_#000]">Power BI</span>
                  <span className="px-2.5 py-1 rounded border-2 border-black bg-red-100 text-black font-extrabold shadow-[1px_1px_0px_#000]">Oracle Cloud</span>
                  <span className="px-2.5 py-1 rounded border-2 border-black bg-neutral-100 text-black font-extrabold shadow-[1px_1px_0px_#000]">Vercel</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="w-full max-w-7xl mx-auto px-6">
        <ProjectsCollage />
      </div>

      <main className="mx-auto max-w-7xl px-6 pb-20 flex flex-col gap-10">
        <section className="text-sm text-neutral-600 dark:text-slate-400 bg-white/80 dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-indigo-950/50 border border-black/[.06] dark:border-indigo-500/20 rounded-xl p-6 shadow-sm dark:shadow-indigo-500/10 text-center">
          <p className="italic">
            "Mi objetivo es construir herramientas y productos que optimicen los procesos reales de las empresas usando la flexibilidad del desarrollo web moderno y la eficiencia de la inteligencia artificial."
          </p>
        </section>
      </main>
    </div>
  );
}
