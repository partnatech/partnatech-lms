"use client"
import { usePathname } from "next/navigation"

export const Logo = () => {
  const router = usePathname()

  const isAuthRoute = router === "/login" || router === "/register"

  return (
    <svg
      width="158"
      height="26"
      viewBox="0 0 158 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.0269 1C14.6972 1 11.3378 3.68102 10.0135 9.01076C12.0162 6.32974 14.3419 5.3284 17.0229 6.00673C18.5411 6.39435 19.6393 7.4926 20.8345 8.72005C22.8049 10.7227 25.066 13.0162 30.0404 13.0162C35.3701 13.0162 38.7295 10.3351 40.0538 5.00538C38.0512 7.68641 35.7254 8.68776 33.0444 8.00943C31.5263 7.62181 30.428 6.52355 29.2328 5.29609C27.2625 3.2934 25.0014 1 20.0269 1ZM10.0135 12.9839C4.68372 12.9839 1.32436 15.6649 0 20.9946C2.00269 18.3136 4.3284 17.3123 7.00942 17.9906C8.52759 18.3782 9.62584 19.4764 10.821 20.7039C12.7914 22.7066 15.0525 25 20.0269 25C25.3567 25 28.716 22.319 30.0404 16.9892C28.0377 19.6703 25.712 20.6716 23.031 19.9933C21.5128 19.6057 20.4145 18.5074 19.2194 17.2799C17.249 15.3096 14.9879 12.9839 10.0135 12.9839Z"
        fill="#2DD4BF"
      />
      <path
        d="M52.492 20V6.90909H57.1582C58.1767 6.90909 59.0205 7.09446 59.6895 7.4652C60.3585 7.83594 60.8592 8.34304 61.1916 8.98651C61.524 9.62571 61.6902 10.3459 61.6902 11.147C61.6902 11.9524 61.5219 12.6768 61.1852 13.3203C60.8528 13.9595 60.35 14.4666 59.6767 14.8416C59.0077 15.2124 58.166 15.3977 57.1518 15.3977H53.943V13.723H56.9729C57.6163 13.723 58.1384 13.6122 58.5389 13.3906C58.9395 13.1648 59.2335 12.858 59.421 12.4702C59.6085 12.0824 59.7023 11.6413 59.7023 11.147C59.7023 10.6527 59.6085 10.2138 59.421 9.83026C59.2335 9.44673 58.9374 9.14631 58.5325 8.92898C58.132 8.71165 57.6035 8.60298 56.9473 8.60298H54.4672V20H52.492ZM66.6217 20.2173C65.9995 20.2173 65.437 20.1023 64.9342 19.8722C64.4313 19.6378 64.0329 19.299 63.7388 18.8558C63.4491 18.4126 63.3042 17.8693 63.3042 17.2259C63.3042 16.6719 63.4107 16.2159 63.6238 15.858C63.8369 15.5 64.1245 15.2166 64.4867 15.0078C64.8489 14.799 65.2538 14.6413 65.7012 14.5348C66.1486 14.4283 66.6046 14.3473 67.0691 14.2919C67.6572 14.2237 68.1344 14.1683 68.5009 14.1257C68.8674 14.0788 69.1337 14.0043 69.2999 13.902C69.4661 13.7997 69.5492 13.6335 69.5492 13.4034V13.3587C69.5492 12.8004 69.3915 12.3679 69.0762 12.0611C68.7651 11.7543 68.3006 11.6009 67.6827 11.6009C67.0393 11.6009 66.5322 11.7436 66.1614 12.0291C65.795 12.3104 65.5414 12.6236 65.4008 12.9688L63.6046 12.5597C63.8177 11.9631 64.1288 11.4815 64.5379 11.1151C64.9512 10.7443 65.4263 10.4759 65.9633 10.3097C66.5002 10.1392 67.0648 10.054 67.6572 10.054C68.0492 10.054 68.4647 10.1009 68.9036 10.1946C69.3468 10.2841 69.7602 10.4503 70.1437 10.6932C70.5315 10.9361 70.8489 11.2834 71.0961 11.7351C71.3433 12.1825 71.4668 12.7642 71.4668 13.4801V20H69.6004V18.6577H69.5236C69.4001 18.9048 69.2147 19.1477 68.9675 19.3864C68.7204 19.625 68.4029 19.8232 68.0151 19.9808C67.6273 20.1385 67.1629 20.2173 66.6217 20.2173ZM67.0371 18.6832C67.5656 18.6832 68.0173 18.5788 68.3923 18.37C68.7715 18.1612 69.0592 17.8885 69.2552 17.5518C69.4555 17.2109 69.5556 16.8466 69.5556 16.4588V15.1932C69.4874 15.2614 69.3553 15.3253 69.1593 15.3849C68.9675 15.4403 68.7481 15.4893 68.5009 15.532C68.2538 15.5703 68.013 15.6065 67.7786 15.6406C67.5442 15.6705 67.3482 15.696 67.1906 15.7173C66.8198 15.7642 66.481 15.843 66.1742 15.9538C65.8717 16.0646 65.6288 16.2244 65.4455 16.4332C65.2665 16.6378 65.1771 16.9105 65.1771 17.2514C65.1771 17.7244 65.3518 18.0824 65.7012 18.3253C66.0506 18.5639 66.4959 18.6832 67.0371 18.6832ZM74.0125 20V10.1818H75.8598V11.7415H75.962C76.141 11.2131 76.4564 10.7976 76.9081 10.495C77.364 10.1882 77.8796 10.0348 78.4549 10.0348C78.5743 10.0348 78.7149 10.0391 78.8768 10.0476C79.043 10.0561 79.173 10.0668 79.2667 10.0795V11.9077C79.19 11.8864 79.0537 11.8629 78.8576 11.8374C78.6616 11.8075 78.4656 11.7926 78.2696 11.7926C77.8179 11.7926 77.4152 11.8885 77.0615 12.0803C76.712 12.2678 76.435 12.5298 76.2305 12.8665C76.026 13.1989 75.9237 13.5781 75.9237 14.0043V20H74.0125ZM86.0838 10.1818V11.7159H80.7209V10.1818H86.0838ZM82.1591 7.82955H84.0703V17.1172C84.0703 17.4879 84.1257 17.767 84.2365 17.9545C84.3473 18.1378 84.4901 18.2635 84.6648 18.3317C84.8438 18.3956 85.0377 18.4276 85.2465 18.4276C85.3999 18.4276 85.5341 18.4169 85.6492 18.3956C85.7642 18.3743 85.8537 18.3572 85.9176 18.3445L86.2628 19.9233C86.152 19.9659 85.9944 20.0085 85.7898 20.0511C85.5853 20.098 85.3296 20.1236 85.0228 20.1278C84.5199 20.1364 84.0512 20.0469 83.6165 19.8594C83.1819 19.6719 82.8303 19.3821 82.5618 18.9901C82.2934 18.598 82.1591 18.1058 82.1591 17.5135V7.82955ZM90.1092 14.1705V20H88.198V10.1818H90.0325V11.7798H90.154C90.3798 11.2599 90.7335 10.8423 91.2151 10.527C91.7009 10.2116 92.3124 10.054 93.0496 10.054C93.7186 10.054 94.3045 10.1946 94.8074 10.4759C95.3102 10.7528 95.7001 11.1662 95.9771 11.7159C96.2541 12.2656 96.3926 12.9453 96.3926 13.755V20H94.4814V13.9851C94.4814 13.2734 94.296 12.7173 93.9253 12.3168C93.5545 11.9119 93.0453 11.7095 92.3976 11.7095C91.9544 11.7095 91.5602 11.8054 91.2151 11.9972C90.8741 12.1889 90.6035 12.4702 90.4033 12.8409C90.2072 13.2074 90.1092 13.6506 90.1092 14.1705ZM101.813 20.2173C101.191 20.2173 100.628 20.1023 100.126 19.8722C99.6227 19.6378 99.2243 19.299 98.9303 18.8558C98.6405 18.4126 98.4956 17.8693 98.4956 17.2259C98.4956 16.6719 98.6021 16.2159 98.8152 15.858C99.0283 15.5 99.3159 15.2166 99.6781 15.0078C100.04 14.799 100.445 14.6413 100.893 14.5348C101.34 14.4283 101.796 14.3473 102.261 14.2919C102.849 14.2237 103.326 14.1683 103.692 14.1257C104.059 14.0788 104.325 14.0043 104.491 13.902C104.658 13.7997 104.741 13.6335 104.741 13.4034V13.3587C104.741 12.8004 104.583 12.3679 104.268 12.0611C103.957 11.7543 103.492 11.6009 102.874 11.6009C102.231 11.6009 101.724 11.7436 101.353 12.0291C100.986 12.3104 100.733 12.6236 100.592 12.9688L98.796 12.5597C99.0091 11.9631 99.3202 11.4815 99.7293 11.1151C100.143 10.7443 100.618 10.4759 101.155 10.3097C101.692 10.1392 102.256 10.054 102.849 10.054C103.241 10.054 103.656 10.1009 104.095 10.1946C104.538 10.2841 104.952 10.4503 105.335 10.6932C105.723 10.9361 106.04 11.2834 106.287 11.7351C106.535 12.1825 106.658 12.7642 106.658 13.4801V20H104.792V18.6577H104.715C104.591 18.9048 104.406 19.1477 104.159 19.3864C103.912 19.625 103.594 19.8232 103.207 19.9808C102.819 20.1385 102.354 20.2173 101.813 20.2173ZM102.229 18.6832C102.757 18.6832 103.209 18.5788 103.584 18.37C103.963 18.1612 104.251 17.8885 104.447 17.5518C104.647 17.2109 104.747 16.8466 104.747 16.4588V15.1932C104.679 15.2614 104.547 15.3253 104.351 15.3849C104.159 15.4403 103.939 15.4893 103.692 15.532C103.445 15.5703 103.204 15.6065 102.97 15.6406C102.736 15.6705 102.54 15.696 102.382 15.7173C102.011 15.7642 101.672 15.843 101.366 15.9538C101.063 16.0646 100.82 16.2244 100.637 16.4332C100.458 16.6378 100.368 16.9105 100.368 17.2514C100.368 17.7244 100.543 18.0824 100.893 18.3253C101.242 18.5639 101.687 18.6832 102.229 18.6832ZM109.357 20V6.90909H111.332V18.2997H117.264V20H109.357ZM123.596 20.1982C122.628 20.1982 121.795 19.9915 121.096 19.5781C120.402 19.1605 119.865 18.5746 119.485 17.8203C119.11 17.0618 118.923 16.1733 118.923 15.1548C118.923 14.1491 119.11 13.2628 119.485 12.4957C119.865 11.7287 120.393 11.13 121.071 10.6996C121.753 10.2692 122.549 10.054 123.461 10.054C124.015 10.054 124.552 10.1456 125.072 10.3288C125.592 10.5121 126.059 10.7997 126.472 11.1918C126.885 11.5838 127.211 12.093 127.45 12.7195C127.689 13.3416 127.808 14.098 127.808 14.9886V15.6662H120.003V14.2344H125.935C125.935 13.7315 125.833 13.2862 125.628 12.8984C125.424 12.5064 125.136 12.1974 124.765 11.9716C124.399 11.7457 123.968 11.6328 123.474 11.6328C122.937 11.6328 122.468 11.7649 122.068 12.0291C121.672 12.2891 121.365 12.63 121.147 13.0518C120.934 13.4695 120.828 13.9233 120.828 14.4134V15.532C120.828 16.1882 120.943 16.7464 121.173 17.2067C121.407 17.6669 121.733 18.0185 122.151 18.2614C122.569 18.5 123.056 18.6193 123.615 18.6193C123.977 18.6193 124.307 18.5682 124.606 18.4659C124.904 18.3594 125.162 18.2017 125.379 17.9929C125.596 17.7841 125.762 17.5263 125.878 17.2195L127.686 17.5455C127.542 18.0781 127.282 18.5447 126.907 18.9453C126.536 19.3416 126.069 19.6506 125.507 19.8722C124.949 20.0895 124.311 20.1982 123.596 20.1982ZM132.786 20.2173C132.164 20.2173 131.601 20.1023 131.098 19.8722C130.595 19.6378 130.197 19.299 129.903 18.8558C129.613 18.4126 129.468 17.8693 129.468 17.2259C129.468 16.6719 129.575 16.2159 129.788 15.858C130.001 15.5 130.289 15.2166 130.651 15.0078C131.013 14.799 131.418 14.6413 131.865 14.5348C132.313 14.4283 132.769 14.3473 133.233 14.2919C133.821 14.2237 134.299 14.1683 134.665 14.1257C135.031 14.0788 135.298 14.0043 135.464 13.902C135.63 13.7997 135.713 13.6335 135.713 13.4034V13.3587C135.713 12.8004 135.556 12.3679 135.24 12.0611C134.929 11.7543 134.465 11.6009 133.847 11.6009C133.203 11.6009 132.696 11.7436 132.325 12.0291C131.959 12.3104 131.705 12.6236 131.565 12.9688L129.769 12.5597C129.982 11.9631 130.293 11.4815 130.702 11.1151C131.115 10.7443 131.59 10.4759 132.127 10.3097C132.664 10.1392 133.229 10.054 133.821 10.054C134.213 10.054 134.629 10.1009 135.068 10.1946C135.511 10.2841 135.924 10.4503 136.308 10.6932C136.696 10.9361 137.013 11.2834 137.26 11.7351C137.507 12.1825 137.631 12.7642 137.631 13.4801V20H135.764V18.6577H135.688C135.564 18.9048 135.379 19.1477 135.132 19.3864C134.884 19.625 134.567 19.8232 134.179 19.9808C133.791 20.1385 133.327 20.2173 132.786 20.2173ZM133.201 18.6832C133.73 18.6832 134.181 18.5788 134.556 18.37C134.936 18.1612 135.223 17.8885 135.419 17.5518C135.62 17.2109 135.72 16.8466 135.72 16.4588V15.1932C135.651 15.2614 135.519 15.3253 135.323 15.3849C135.132 15.4403 134.912 15.4893 134.665 15.532C134.418 15.5703 134.177 15.6065 133.943 15.6406C133.708 15.6705 133.512 15.696 133.355 15.7173C132.984 15.7642 132.645 15.843 132.338 15.9538C132.036 16.0646 131.793 16.2244 131.61 16.4332C131.431 16.6378 131.341 16.9105 131.341 17.2514C131.341 17.7244 131.516 18.0824 131.865 18.3253C132.215 18.5639 132.66 18.6832 133.201 18.6832ZM140.177 20V10.1818H142.024V11.7415H142.126C142.305 11.2131 142.62 10.7976 143.072 10.495C143.528 10.1882 144.044 10.0348 144.619 10.0348C144.738 10.0348 144.879 10.0391 145.041 10.0476C145.207 10.0561 145.337 10.0668 145.431 10.0795V11.9077C145.354 11.8864 145.218 11.8629 145.022 11.8374C144.826 11.8075 144.63 11.7926 144.434 11.7926C143.982 11.7926 143.579 11.8885 143.226 12.0803C142.876 12.2678 142.599 12.5298 142.395 12.8665C142.19 13.1989 142.088 13.5781 142.088 14.0043V20H140.177ZM148.996 14.1705V20H147.085V10.1818H148.919V11.7798H149.041C149.267 11.2599 149.62 10.8423 150.102 10.527C150.588 10.2116 151.199 10.054 151.936 10.054C152.605 10.054 153.191 10.1946 153.694 10.4759C154.197 10.7528 154.587 11.1662 154.864 11.7159C155.141 12.2656 155.279 12.9453 155.279 13.755V20H153.368V13.9851C153.368 13.2734 153.183 12.7173 152.812 12.3168C152.441 11.9119 151.932 11.7095 151.284 11.7095C150.841 11.7095 150.447 11.8054 150.102 11.9972C149.761 12.1889 149.49 12.4702 149.29 12.8409C149.094 13.2074 148.996 13.6506 148.996 14.1705Z"
        fill="white"
      />
    </svg>
  )
}
