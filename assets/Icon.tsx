import Svg, { Path } from "react-native-svg";

export default function Icon(props: any) {
  return (
    <Svg
      width={29}
      height={43}
      viewBox="0 0 29 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.884 16.582h7.232v-1.107H.884v1.107zm3.062 3.13h1.108v-7.368H3.946v7.369z"
        fill="#000"
      />
      <Path
        d="M.884 16.582h-.8v.8h.8v-.8zm7.232 0v.8h.8v-.8h-.8zm0-1.107h.8v-.8h-.8v.8zm-7.232 0v-.8h-.8v.8h.8zm3.062 4.238h-.8v.8h.8v-.8zm1.108 0v.8h.8v-.8h-.8zm0-7.37h.8v-.8h-.8v.8zm-1.108 0v-.8h-.8v.8h.8zM.884 17.383h7.232v-1.6H.884v1.6zm8.032-.8v-1.107h-1.6v1.107h1.6zm-.8-1.907H.884v1.6h7.232v-1.6zm-8.032.8v1.107h1.6v-1.107h-1.6zm3.862 5.038h1.108v-1.6H3.946v1.6zm1.908-.8v-7.37h-1.6v7.37h1.6zm-.8-8.17H3.946v1.6h1.108v-1.6zm-1.908.8v7.37h1.6v-7.37h-1.6zM22.839 10.065l-2.44-.883L4.89 33.365l2.44.882 15.509-24.182zM18.125 29.11h8.75v-2.215h-8.75v2.214z"
        fill="#000"
      />
    </Svg>
  );
}
